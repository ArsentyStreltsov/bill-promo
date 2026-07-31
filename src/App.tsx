import { ContactProvider } from './components/ContactContext'
import { ContactModal } from './components/ContactModal'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AdminDashboard } from './components/sections/AdminDashboard'
import { Analytics } from './components/sections/Analytics'
import { AntiFraud } from './components/sections/AntiFraud'
import { Cases } from './components/sections/Cases'
import { Comparison } from './components/sections/Comparison'
import { CustomDesign } from './components/sections/CustomDesign'
import { ExperienceStats } from './components/sections/ExperienceStats'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { GameMechanics } from './components/sections/GameMechanics'
import { Hero } from './components/sections/Hero'
import { LaunchSteps } from './components/sections/LaunchSteps'
import { Platforms } from './components/sections/Platforms'
import { PointsSystem } from './components/sections/PointsSystem'
import { ProductOverview } from './components/sections/ProductOverview'
import { PromoConfigurator } from './components/sections/PromoConfigurator'
import { ReceiptValidation } from './components/sections/ReceiptValidation'
import { Rewards } from './components/sections/Rewards'
import { Services } from './components/sections/Services'
import { UserJourney } from './components/sections/UserJourney'

export default function App() {
  return (
    <ContactProvider>
      <Header />
      <main>
        <Hero />
        <ProductOverview />
        <UserJourney />
        <ReceiptValidation />
        <GameMechanics />
        <PointsSystem />
        <Rewards />
        <PromoConfigurator />
        <Platforms />
        <CustomDesign />
        <AdminDashboard />
        <Analytics />
        <AntiFraud />
        <Services />
        <Cases />
        <ExperienceStats />
        <Comparison />
        <LaunchSteps />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ContactModal />
    </ContactProvider>
  )
}
