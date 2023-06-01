import React from "react"
import * as styles from '../style.module.css'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <div className={styles.footer}>
        <p>© 2023 Erlanggaht, Inc.</p>
      
        <div className={styles.pripacy_policy}>
        <Link to="/terms">Terms of use</Link> 
        <Link to="/privacy_policy">Pripacy Policy</Link>
        </div>
      </div>
      <div className={styles.thanksTo}>
        <p>Thanks</p>  <div><a href="firebase.google.com"><StaticImage src='../images/firebase.svg' width={32} height={32} /></a></div>
        </div>
    </div>
  )
}