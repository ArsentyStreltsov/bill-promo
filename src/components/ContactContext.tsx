import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

type ContactContextValue = {
  open: boolean
  openModal: (preset?: string) => void
  closeModal: () => void
  presetNote: string
}

const ContactContext = createContext<ContactContextValue | null>(null)

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [presetNote, setPresetNote] = useState('')

  const openModal = useCallback((preset = '') => {
    setPresetNote(preset)
    setOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <ContactContext.Provider value={{ open, openModal, closeModal, presetNote }}>
      {children}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const ctx = useContext(ContactContext)
  if (!ctx) throw new Error('useContact must be used within ContactProvider')
  return ctx
}
