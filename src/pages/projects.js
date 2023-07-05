import * as React from "react"
import * as styles from '../style.module.css'
import { StaticImage } from "gatsby-plugin-image"
import LinkProject from "../LinkProjects/link_projects"

const LinkProjects = LinkProject

function ContentSlicing ({props}) {
return (
  <div className={styles.contentSlicing}>
  <div style={{display:"flex",alignItems:'center',gap:'1rem'}}>
  <a href={props.github} rel="noreferrer" target="_blank"  >
    <StaticImage src="../images/github.svg" height={50} width={50} styxle={{opacity:'0.7'}} className={styles.GitBranch} alt="githubIcon"/></a>
    </div>
    <div className={styles.headerSlicing}>
  
  <a href={props.web_url} rel="noreferrer" target="_blank"> <h2 className={styles.headerTitleSlicing} style={{margin:'3px 0'}}>{props.title}</h2></a> 
  </div>
    <p className={styles.textSlicing}>{props.isi}</p>
    <div style={{display:"flex",gap:"1rem",margin:'10px 0 0 0',position:"absolute",bottom:'8px'}}>
      <a target="_blank" href={props.web_url} style={{backgroundColor:'#222',padding:'6px 12px',color:"#eee",borderRadius:'3px'}}>Visit</a>
     </div>
  </div>
)
}

export default function Projects() {
  
  return (
    <>
    <title>Projects</title>
    <div className={styles.layout}>
      <h1>My Project</h1>
      <div className={styles.slicing}>
       
       {LinkProjects.map((m,i) => {
          console.log(m.github)
           return <ContentSlicing key={i} props={{
            github:m.github,
            web_url :m.web_url,
            isi : m.isi,
            title : m.title
            }}/>
         
       })}

        
      </div>
      </div>
      </>
    )
  
  
}
