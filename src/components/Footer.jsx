import { FooterContent, FooterContainer, LogoFooter, Icons } from "../styles/Footer.style";
import logo from '../assets/logo.svg'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <FooterContent>
            <FooterContainer>
                <LogoFooter img src={logo}></LogoFooter>
                <Icons>
                    <a href="https://www.instagram.com/design_factory7/" target="_blank"><FaInstagram /></a><a href="https://www.linkedin.com/in/frederico-fulg%C3%AAncio/" target="_blank"><FaLinkedin /></a><a href="https://github.com/freddev7" target="_blank"><FaGithub /></a>
                </Icons>
            </FooterContainer>
        </FooterContent>
    );
}

export default Footer;