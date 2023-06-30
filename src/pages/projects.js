import * as React from "react"
import * as styles from '../style.module.css'
import { StaticImage } from "gatsby-plugin-image"


const LinkProject = {
  bacaquran : {
    web_url : 'https://bacaquran-v2.vercel.app/',
    github : 'https://github.com/erlanggaht/WebQuranV2/tree/erlanggaht',
    isi : "Let's read the Koran while in the grip of a digital gadget.",
    title : "Digital Reading Quran",
  },
  ytDownloader : {
    web_url : 'https://youtubedownload.vercel.app/',
    github : 'https://github.com/erlanggaht/ytdownloader-vercel/tree/main',
    isi : "download youtube videos free. built with vite preact. and wait for the next display I will fix it.",
    title : "Youtube Video Download"
  },
  TodoList : {
    web_url : 'https://todo-mylist.vercel.app/',
    github : 'https://github.com/erlanggaht/todolist.vue/',
    isi : "Todo list application with storage features, search lists, and an attractive appearance. made with vite + vue.",
    title : "To-Do List Application"
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
      <a target="_blank" href={props.web_url} style={{backgroundColor:'#222',padding:'6px 12px',color:"#eee",borderRadius:'3px'}}>Visit</a>
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
        github:LinkProject.TodoList.github,
        web_url :LinkProject.TodoList.web_url,
        isi : LinkProject.TodoList.isi,
        title : LinkProject.TodoList.title
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
