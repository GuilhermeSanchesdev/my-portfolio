import Image from "next/image";



import "./header.scss"

export function Header() {
  return(
    <div className="header">
      <div>
         <h1>Hi, i´m Guilherme! 👋

         </h1>
         <h2>Software Engineer</h2>
       </div>
       <Image
         src="/me.jpg"
         alt="Next.js Logo"
         width={300}
         height={310}
         priority
       />
    </div>
  )
}
