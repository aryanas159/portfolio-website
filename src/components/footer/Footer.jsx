import React from 'react'
import s from './footer.module.css'
import home from '../../assets/home.png'
import user from '../../assets/user.png'
import email from '../../assets/email.png'
import twitter from '../../assets/twitter_bw.png'
import linkedin from '../../assets/linkedin_bw.png'
import instagram from '../../assets/instagram_bw.png'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.links}>
                <div className={s.link}>
                    <a href="#home">
                    <img src={home} alt="Home" />
                    <p>Home</p>
                    </a>
                </div>
                <div className={s.link}>
                    <a href="#about">
                    <img src={user} alt="User" />
                    <p>About me</p>
                    </a>
                </div>
            </div>
            <div className={s.socials}>
                <a href="https://twitter.com/ssaryans597" target="_blank">
                    <img src={twitter} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/ssaryans159" target="_blank">
                    <img src={linkedin} alt="Linkedin" />
                </a>
                <a href="https://www.instagram.com/ssaryans" target="_blank">
                    <img src={instagram} alt="Instagram" />
                </a>
            <div className={s.email}>
                <img src={email} alt="Email" />
                <p>ssaryans597@gmail.com</p>
            </div>
            </div>
        </div>
    )
}
export default Footer;