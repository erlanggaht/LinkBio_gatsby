import * as React from "react"
import * as styles from '../style.module.css'
import { StaticImage } from "gatsby-plugin-image"


const LinkProject = {
  bacaquran : {
    web_url : 'https://bacaquran-v2.vercel.app/',
    github : 'https://github.com/erlanggaht/WebQuranV2/tree/erlanggaht',
    isi : "Let's read the Koran while in the grip of a digital gadget.",
    title : "Digital Reading Quran"
  },
  ytDownloader : {
    web_url : 'https://youtubedownload.vercel.app/',
    github : 'https://github.com/erlanggaht/ytdownloader-vercel/tree/main',
    isi : "download youtube videos free. built with vite preact. and wait for the next display I will fix it.",
    title : "Youtube Video Download"
  },
  usersAdmin : {
    web_url : 'https://users-admin.vercel.app/',
    github : 'https://github.com/erlanggaht/users_admin_fr_vercel/tree/erlanggaht',
    isi : "Slicing web design is suitable for health companies or others. it's made with nextJS13 and tailwinds for the design.",
    title : "All Kinds Of Form Styles And Frontend Validations"
  },
  seblaks : {
    web_url : 'https://seblaks.vercel.app/',
    github : 'https://github.com/erlanggaht/web_seblak/tree/erlanggaht',
    isi : "The spicy food website, Seblak, is made using NextJS and DaisyUI technology and auth from Firebase ",
    title : "Seblak Food Website"
  }
}

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
     <StaticImage src="../images/tailwinds.svg" alt="tailwinds" height={34} width={34} />
     <StaticImage src="../images/nextjs.svg" alt="nextjs" height={34} width={34}/>
     </div>
  </div>
)
}

export default function Projects() {
  
  return (
    <div className={styles.layout}>
      <h1>My Project</h1>
      <div className={styles.slicing}>
       
       <ContentSlicing props={{
        github:LinkProject.bacaquran.github,
        web_url :LinkProject.bacaquran.web_url,
        isi : LinkProject.bacaquran.isi,
        title : LinkProject.bacaquran.title
        }}/>

        <ContentSlicing props={{
        github:LinkProject.ytDownloader.github,
        web_url :LinkProject.ytDownloader.web_url,
        isi : LinkProject.ytDownloader.isi,
        title : LinkProject.ytDownloader.title
        }}/>

        <ContentSlicing props={{
        github:LinkProject.usersAdmin.github,
        web_url :LinkProject.usersAdmin.web_url,
        isi : LinkProject.usersAdmin.isi,
        title : LinkProject.usersAdmin.title
        }}/>

        <ContentSlicing props={{
        github:LinkProject.seblaks.github,
        web_url :LinkProject.seblaks.web_url,
        isi : LinkProject.seblaks.isi,
        title : LinkProject.seblaks.title
        }}/>
        
      </div>
      </div>
    )
  
  
}
