import "./information.scss"
import { GiUsaFlag } from "react-icons/gi";
import { GiBrazilFlag } from "react-icons/gi";
import { RiGraduationCapFill } from "react-icons/ri";
import { SectionTitle } from "../sectionTitle/section-title";

export function Info() {
  return(
    <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span><GiUsaFlag /> EN - Intermediary</span>
          <span><GiBrazilFlag /> PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="education-info">
          <span><RiGraduationCapFill /> </span>
          <span>Computer Engineer Bachelors Degree - Universidade das Américas</span>
        </div>
        </div>
  )
}