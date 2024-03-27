import React from 'react'
import { getImageUrl } from '../../utils'

import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageUrl('about/aboutImage.png')} alt="Me sitting with a laptop" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frondend Developer</h3>
              <p>I'm a frontend developer with experience in building responsive and optimaized sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt="Server" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimized back-end systems and APIs</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
              <img src={getImageUrl('about/uiIcon.png')} alt="Ui" />
              <div className={styles.aboutItemText}>
              <h3>UL Designer</h3>
              <p>I have designed multiple landing pages and have systen as well</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About