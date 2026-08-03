import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Cases } from './components/sections/Cases'
import { DesignDashboard } from './components/sections/DesignDashboard'
import { FAQ } from './components/sections/FAQ'
import { GameMechanics } from './components/sections/GameMechanics'
import { Hero } from './components/sections/Hero'
import { PlatformFlow } from './components/sections/PlatformFlow'
import { Platforms } from './components/sections/Platforms'
import { PromoConfigurator } from './components/sections/PromoConfigurator'
import { Rewards } from './components/sections/Rewards'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PlatformFlow />
        <GameMechanics />
        <Rewards />
        <Platforms />
        <DesignDashboard />
        <Cases />
        <PromoConfigurator />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
