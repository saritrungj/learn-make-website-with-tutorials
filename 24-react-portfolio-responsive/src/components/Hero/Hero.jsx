import React from 'react'
import styles from './Hero.module.css'

import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Ada</h1>
          <p className={styles.description}>
            I'm a Full Stack Developer with 5 years of experience using
            React and NodeJS. Reach out if you'd like to learn more!
          </p>
          <a className={styles.contactBtn} href="mailto:myemail@email.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl('hero/heroImage.png')} alt="Her" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </>
  )
}

export default Hero