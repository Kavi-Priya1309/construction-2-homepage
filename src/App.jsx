import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ConstructionProcess from './components/ConstructionProcess'
import ProjectsSection from './components/ProjectsSection'
import QuoteForm from './components/QuoteForm'
import TestimonialsSection from './components/TestimonialsSection'
import ClientLogos from './components/ClientLogos'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <div className="hero-area">
        <Header />
        <HeroSlider />
      </div>

      <main>
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <ConstructionProcess />
        <ProjectsSection />
        <QuoteForm />
        <TestimonialsSection />
        <ClientLogos />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
