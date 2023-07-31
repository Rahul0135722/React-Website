import AboutUs from "./components/AboutUs/AboutUs"
import CarTariffs from "./components/CarTariffs/CarTariffs"
import ContactUs from "./components/ContactUs/ContactUs"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import MapLocation from "./components/MapLocation/MapLocation"
import Services from "./components/Services/Services"
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions"
import WhatsApp from "./components/Whatsapp/WhatsApp"

import css from "./Styles/App.module.scss"

function App() {

  return (
    <div className={css.container}>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <TermsAndConditions />
      <CarTariffs />
      <MapLocation/>
      <ContactUs />
      <WhatsApp />
    </div>
  )
}

export default App
