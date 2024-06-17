
import { Header } from "./components/header/header";
import { GiUsaFlag } from "react-icons/gi";
import { GiBrazilFlag } from "react-icons/gi";
import { RiGraduationCapFill } from "react-icons/ri";

import "./styles/home.scss"
import { Experience } from "./components/experience/experience";
import { Info } from "./components/information/information";
import Image from "next/image";
import { EmailIcon } from "./components/icons/email-icon";
import { SocialBtns } from "./components/social-btns/social-btns";

export default function Home() {
  return (
    <main className="container">
     <Header/>
     <Experience/>
     <Info/>
        <div className="buttons">
        <SocialBtns/>
        <a className="btn-primary" href="mailto:guilhermesanchesdev@gmail.com" >
          Contact me
          <EmailIcon/>
          </a>
        </div>
    </main>
  );
}
