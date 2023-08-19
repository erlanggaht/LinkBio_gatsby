import * as React from "react"
import * as styles from '../style.module.css'
import '../global.css'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import LoadingPage from "../Loading/Loading_Page"
import Layout from "./layout"
// Initialize Firebase

const SocialMedia = () => {
return  <div className={styles.socialmedia}>
<a href="https://www.facebook.com/erlangga.hidayatullah.94" target="_blank"  without rel="noreferrer">
<div className={styles.socialmedia_img}>
  <StaticImage src="../images/facebook.svg" alt='facebook'
width={60}
height={60}
/>
<p>Facebook</p>
</div>
</a>

<a href="https://instagram.com/erlanggaht93/" target="_blank" without rel="noreferrer">
<div className={styles.socialmedia_img}><StaticImage src="../images/instagram2.svg" alt='instagram'
width={60}
height={60}
/>
<p>Instagram</p>

</div>
</a>
 
<a href="https://github.com/erlanggaht/" target="_blank" without rel="noreferrer">
<div className={styles.socialmedia_img}><StaticImage src="../images/github_black.svg" alt='githubme'
width={60}
height={60}
/>
<p>Github</p>
</div>
</a>

<a href="https://bitbucket.org/erlanggaht/" target="_blank" without rel="noreferrer">
<div className={styles.socialmedia_img}><StaticImage src="../images/bitbucket2.svg" alt='bitbucket'
width={60}
height={60}
/>
<p>Bitbucket</p>
</div>
</a>

<a href="https://medium.com/@erlanggahidayat.md
" target="_blank" without rel="noreferrer">
<div className={styles.socialmedia_img}><StaticImage src="../images/medium.svg" alt='instagram'
width={60}
height={60}
/>
<p>Medium</p>
</div>
</a>
</div>
}

const Slider = () => {

  return (
   <div className={styles.Project}>
    <div>
    <Link href={'/projects'}><p className={styles.SeeAll}>See All</p></Link>
    <StaticImage src={'../images/project.svg'} alt="ProjectIcon" width={60} height={60} style={{margin:'10px 0 0 0'}} />
    </div>
    <div>
     <Link to="/projects"> <h2 style={{display:"flex",justifyContent:"space-between",alignItems:"center",lineHeight:1}}> My Projects  </h2></Link>
      <p className={styles.pragrafMyProject}>A web project that may be useful to everyone.</p>
    </div>
   </div>
  )
}

const TechStack = () => {
  return  <div className={styles.tech}><StaticImage src="../images/react.svg" alt="react" width={34} height={34}/>
  <StaticImage src="../images/js.svg" alt="react" width={34} height={34}/>
  <StaticImage src="../images/mysql.svg" alt="mysql" width={34} height={34}/>
  <StaticImage src="../images/nod.svg" alt="nodejs" width={34} height={34}/>
  <StaticImage src="../images/mongo.svg" alt="mongo" width={34} height={34}/>
  <StaticImage src="../images/html.svg" alt="html" width={34} height={34}/>
  </div>
}

const Slicing = () => {
  return (
    <div className={styles.slicing}>
      <div className={styles.contentSlicing}>
      <div style={{display:"flex",alignItems:'center',gap:'1rem'}}>
      <Link href={'https://github.com/erlanggaht/landing-page-nextjs13/tree/erlanggaht'} target="_blank" without rel="noreferrer"  ><StaticImage src="../images/github.svg" height={50} width={50} style={{opacity:'0.7'}} className={styles.GitBranch}/></Link>
        </div>
        <div className={styles.headerSlicing}>
      
      <Link href={'https://landingpage-erlanggaht.vercel.app/'} target="_blank" without rel="noreferrer"> <h2 className={styles.headerTitleSlicing} style={{margin:'3px 0'}}>Simple White Landing Page</h2></Link> 
      </div>
        <p className={styles.textSlicing}>Slicing web design is suitable for health companies or others. it's made with nextJS13 and tailwinds for the design</p>
        <div style={{display:"flex",gap:"1rem",margin:'10px 0 0 0',position:"absolute",bottom:'8px'}}>
         <StaticImage src="../images/tailwinds.svg" alt="tailwinds" height={34} width={34}/>
         <StaticImage src="../images/nextjs.svg" alt="nextjs" height={34} width={34}/>
         </div>
      </div>

      <div className={styles.contentSlicing}>
        <div className={styles.headerSlicing}>
        <div></div>
        <Link href={'https://github.com/erlanggaht/myportof-nextjs13/tree/erlanggaht'} target="_blank" without rel="noreferrer">   <StaticImage src="../images/github.svg" height={50} width={50} style={{opacity:'0.7'}} className={styles.GitBranch}/></Link>
        </div>
        <Link href={'https://portofolio-erlanggaht.vercel.app/'} target="_blank" without rel="noreferrer"> <h2 className={styles.headerTitleSlicing} style={{margin:'3px 0'}}>Semi Dark Portofolio Page</h2></Link>
        <p className={styles.textSlicing}>Slicing web design portfolio is suitable for personal or other websites. it's made with nextJS13 and tailwinds with animations not burdening the client </p>
        <div style={{display:"flex",gap:"1rem",margin:'10px 0 0 0',position:"absolute",bottom:'8px'}}>
         <StaticImage src="../images/tailwinds.svg" alt="tailwinds" height={34} width={34}/>
         <StaticImage src="../images/nextjs.svg" alt="nextjs" height={34} width={34}/>
         </div>
      </div>
      
      <div className={styles.contentSlicing}>
        <div className={styles.headerSlicing}>
        <Link href={'https://github.com/erlanggaht/myportof-nextjs13/tree/erlanggaht'} target="_blank" without rel="noreferrer">   <StaticImage src="../images/github.svg" height={50} width={50} style={{opacity:'0.7'}} className={styles.GitBranch}/></Link>
        </div>
        <Link href={'https://erlanggaht93.vercel.app/'} target="_blank" without rel="noreferrer">  <h2 className={styles.headerTitleSlicing} style={{margin:'3px 0'}}>Dark And Light Theme Portfolio Pages</h2></Link>
        <p className={styles.textSlicing}>Slicing web design is suitable for personal web or other. it's built with nextJS13 and tailwinds for design</p>
        <div style={{display:"flex",gap:"1rem",margin:'10px 0 0 0',position:"absolute",bottom:'8px'}}>
         <StaticImage src="../images/tailwinds.svg" alt="tailwinds" height={34} width={34}/>
         <StaticImage src="../images/nextjs.svg" alt="nextjs" height={34} width={34} />
         <StaticImage src="../images/mongo.svg" alt="mysql" height={34} width={34}/>
         </div>
      </div>

      
      
    </div>
  )
}

const IndexPage = () => {
  const [loading,setLoading] = React.useState(true)

  React.useEffect(() => {
    
    document.onreadystatechange = function () {
      console.log('readyyyy')
      setLoading(false)
    }
  })
 
 
  
  return (
    <>
 {!loading ? <LoadingPage/> : 
<main className={styles.layout}>

    <div>
      <div className={styles.header}>
        <div>
      <img src='https://res.cloudinary.com/djsizjaee/image/upload/v1684489838/erlangga_etodo4.png ' alt="erlanggaht"  className={styles.profile_image} />
      </div>
        <div style={{display:"flex",alignItems:'flex-start',flexDirection:"column",justifyContent:"center"}}> 
        <h1 className={styles.titleHead}>Hey, I'm Erlangga Hidayatullah.</h1>
        <span style={{fontWeight:"300",paddingLeft:"3px"}}className={styles.descriptionHeader}>Sofware Enginer and Web Full-stack Developer</span>
        <TechStack/>
        </div>
      </div>
      <div>
        <div style={{margin:"3rem 0"}}>
      <h3 className={styles.titleH3}><StaticImage  src="../images/circle.svg" height={17} width={17} style={{margin:"3px 0px 0 0"}} alt="circle"/> Social Links</h3>
      <SocialMedia/>
      </div>
      <div style={{margin:"8rem 0"}}>
      <h3 className={styles.titleH3}><StaticImage src="../images/circle.svg" height={17} width={17} style={{margin:"3px 0px 0 0"}} alt="circle"/> Project</h3>
        <Slider/>
      </div>
      <div style={{margin:"3rem 0"}}>
      <h3 className={styles.titleH3}><StaticImage src="../images/circle.svg" height={17} width={17} style={{margin:"3px 0px 0 0"}}/> Slicing</h3>
      <Slicing/>  
      </div>
      </div>
    </div>
    <div className={styles.guestbook}>
      <Link href={'/guestbook'}><span className={styles.guestbookTeks}>GuestBook</span></Link>
    </div>
    <Layout/>

    </main> }
    </>
  )
}

export default IndexPage

export const Head = () =>  {
  return (
    <>
    <link rel="icon" type="image/x-icon" href="../assets/favicon.svg"></link>
     <title>Erlangga Hidayatullah</title>
    </>
  )
}

