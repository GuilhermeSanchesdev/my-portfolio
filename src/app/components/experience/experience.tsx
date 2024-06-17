import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"

export function Experience() {
  return(
    <div className="experience">
      <SectionTitle text="Experience"/>
      <p>8 months working as a Software Developer, on freelance websites.</p>
      <div className="experience-time">

        <div className="experience-language">
        <Image
         src="/react.webp"
         alt="Next.js Logo"
         width={40}
         height={40}
         priority
       />
       <div className="experience-unit">
        <div className="experience-measure measure-1">
          <span>1 year</span>
        </div>
       </div>
       </div>

        <div className="experience-language">
        <Image
         src="/TypeScript.png"
         alt="Next.js Logo"
         width={40}
         height={40}
         priority
       />
       <div className="experience-unit">
        <div className="experience-measure measure-2">
        <span>2 years</span>
        </div>
       </div>
        </div>


        <div className="experience-language">
      <Image
         src="/JavaScript-logo.png"
         alt="Next.js Logo"
         width={40}
         height={40}
         priority
       />
       <div className="experience-unit">
        <div className="experience-measure measure-2">
        <span>2 years</span>
        </div>
       </div>
        </div>

        <div className="experience-language">
      <Image
         src="/java.png"
         alt="Next.js Logo"
         width={40}
         height={40}
         priority
       />
       <div className="experience-unit">
        <div className="experience-measure measure-1">
        <span>1 year</span>
        </div>
       </div>
        </div>
      </div>
      </div>
  )
}