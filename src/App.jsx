import Hero from "./sections/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import LogoSection from "./sections/LogoSection.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Experience from './sections/Experience.jsx'
import TechStack from "./sections/TechStack.jsx"
import Testimonials from "./sections/Testimonials.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"

const App = () => {
  return (
		<>
			<Navbar />
			<Hero />
			{/* <ShowcaseSection /> */}
			{/* <LogoSection /> */}
			<div className="mb-10"></div>
			<FeatureCards />
			<Experience />
			<TechStack />
			<Testimonials />
			<Contact />
			<Footer />
		</>
  )
}

export default App
