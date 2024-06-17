import { InstaIcon } from "../icons/insta-icon";
import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return(
      <div className="social">
        <a href="https://www.instagram.com/gsanchz_">
          <InstaIcon/>
          </a>
        <a href="https://www.linkedin.com/in/guilhermesanches-dev/">
        <LinkedInIcon/>
        </a>
        <a href="https://github.com/GuilhermeSanchesdev">
        <GitHubIcon/>
        </a>
      </div>
    )
}