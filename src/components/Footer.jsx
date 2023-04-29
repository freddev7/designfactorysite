import { FooterContainer, LogoFooter, Icons } from "../styles/Footer.style";
import logo from '../assets/logo.svg'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <FooterContainer>
            <LogoFooter img src={logo}></LogoFooter>
            <Icons>
                <a><FaInstagram /></a><a><FaLinkedin /></a><a><FaGithub /></a>
            </Icons>
        </FooterContainer>
    );
}

export default Footer;