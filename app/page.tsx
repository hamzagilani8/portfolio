
import About from "@/components/about";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import Skills from "@/components/skills";
import { aboutMe, experience, portfolio, services, skillsData } from "@/data/presonalData";

export default function Home() {
  return (
   <div className="bg-white-light">
    <Hero/>
    <About data={aboutMe}/>
    <Services data={services}/>
    <Skills data={skillsData} experienceData={experience}/>
    <Portfolio data={portfolio}/>
   </div>
  )
}
