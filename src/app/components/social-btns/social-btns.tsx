import { InstaIcon } from "../icons/insta-icon";
import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return(
      <div className="social">
        <a href="">
          <InstaIcon/>
          </a>
        <a href="">
        <LinkedInIcon/>
        </a>
        <a href="">
        <GitHubIcon/>
        </a>
      </div>
    )
}