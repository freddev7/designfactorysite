import React, { useEffect } from "react";
import { Project, HomeContainer, FirstHomeContainer, Logo3d, BackgroundIcon, TextFirstContainer, HomeImages, ImageContainer, SecondHomeContainer, SecondHomeImages, Logo, BackgroundSketch, TextSecondContainer, CarouselContainer, Slider, ItemCarousel, ThirdHomeContainer, ThirdHomeImages, TextThirdContainer, BackgroundMedias, Media, FourthHomeContainer, VideoContainer, BackgroundWebs, TextFourthContainer, Icons, IconsWeb, ButtonWeb, ButtonWebTwo, SiteContainer } from "../styles/Home.style";
import logo3d from "../assets/3dlogo.svg";
import worldicon from "../assets/worldicon.svg";
import logossection from "../assets/logossection.svg"
import backgroundicon from "../assets/backgroundicon.svg"
import logo_jr from "../assets/logo_jr.svg"
import logo_can from "../assets/logo_can.svg"
import logo_fsd from "../assets/logo_fsd.svg"
import logo_mn from "../assets/logo_mn.svg"
import logo_sn from "../assets/logo_sn.svg"
import logo_jrs from "../assets/logo_jrs.svg"
import logo_ff from "../assets/logo_ff.svg"
import logo_lm from "../assets/logo_lm.svg"
import backgroundmedias from "../assets/backgroundmedias.svg"
import backgroundweb from "../assets/backgroundweb.svg"
import media from "../assets/media.jpg"
import videosite from "../assets/videosite.mp4"
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects } from "react-icons/si";
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";
import Aos from 'aos'
import 'aos/dist/aos.css'
import ReactPlayer from 'react-player';

import Projects from "./Carousel/Projects"

function Home() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <HomeContainer>
            <FirstHomeContainer id="about">
                <TextFirstContainer>
                    <h1 data-aos="fade-right">Vamos digitalizar o seu negócio!</h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" >Ao adotar uma estratégia digital, você poderá expandir seu alcance e tornar seus produtos ou serviços acessíveis a um público muito maior, sem as limitações físicas de um espaço físico. Além disso, ter uma presença forte na internet permite que você se conecte com seus clientes de maneira mais eficiente, através das redes sociais, e-mails e outras plataformas.</p>
                </TextFirstContainer>
                <HomeImages>
                    <BackgroundIcon src={worldicon}></BackgroundIcon>
                    <Logo3d src={logo3d}></Logo3d>
                </HomeImages>
            </FirstHomeContainer>
            <ImageContainer><q data-aos="fade-right">JÁ DIVULGOU SUA MARCA HOJE?</q></ImageContainer>
            <SecondHomeContainer id="logos">
                <SecondHomeImages>
                    <BackgroundSketch src={backgroundicon}></BackgroundSketch>
                    <Logo src={logossection} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"></Logo>
                </SecondHomeImages>
                <TextSecondContainer>
                    <h1 data-aos="fade-right">LOGOS</h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">Logotipo é uma representação visual de uma empresa ou marca, que é projetada para ser facilmente reconhecida e lembrada pelo público. Um logotipo eficaz é crucial para a identidade da marca, pois ajuda a transmitir a mensagem da empresa de forma clara e consistente. O logotipo pode ser utilizado em diversos meios de comunicação, desde cartões de visita até propagandas em televisão.</p>
                    <i><SiAdobeillustrator /></i>
                </TextSecondContainer>
            </SecondHomeContainer>
            <CarouselContainer>
                <Slider>
                    <ItemCarousel src={logo_jr}></ItemCarousel>
                    <ItemCarousel src={logo_can}></ItemCarousel>
                    <ItemCarousel src={logo_fsd}></ItemCarousel>
                    <ItemCarousel src={logo_jrs}></ItemCarousel>
                    <ItemCarousel src={logo_mn}></ItemCarousel>
                    <ItemCarousel src={logo_sn}></ItemCarousel>
                    <ItemCarousel src={logo_ff}></ItemCarousel>
                    <ItemCarousel src={logo_lm}></ItemCarousel>
                </Slider>
                <Slider>
                    <ItemCarousel src={logo_jr}></ItemCarousel>
                    <ItemCarousel src={logo_can}></ItemCarousel>
                    <ItemCarousel src={logo_fsd}></ItemCarousel>
                    <ItemCarousel src={logo_jrs}></ItemCarousel>
                    <ItemCarousel src={logo_mn}></ItemCarousel>
                    <ItemCarousel src={logo_sn}></ItemCarousel>
                    <ItemCarousel src={logo_ff}></ItemCarousel>
                    <ItemCarousel src={logo_lm}></ItemCarousel>
                </Slider>
            </CarouselContainer>
            <ThirdHomeContainer id="medias">
                <TextThirdContainer>
                    <h1 data-aos="fade-right">MEDIAS</h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">A arte visual para mídias sociais é um aspecto fundamental de qualquer estratégia de marketing digital. Afinal, a aparência da sua marca nas plataformas de mídia social pode impactar a percepção do seu público-alvo sobre o seu negócio. Ao criar arte visual para mídias sociais, é importante considerar alguns fatores importantes. Primeiro, a arte visual deve ser consistente com a identidade visual da sua marca, como as cores, fontes e estilos de design que você usa em outros lugares, como seu site e materiais de marketing impressos.</p>
                    <Icons>
                        <a><SiAdobephotoshop /></a><a><SiAdobeaftereffects /></a>
                    </Icons>
                </TextThirdContainer>
                <ThirdHomeImages>
                    <BackgroundMedias src={backgroundmedias} data-aos="fade-right"></BackgroundMedias>
                    <Media src={media} data-aos="fade-left"></Media>
                </ThirdHomeImages>
            </ThirdHomeContainer>
            <Project>
                <Projects />
            </Project>
            <FourthHomeContainer id="web">
                <SiteContainer>
                    <VideoContainer>
                        <ReactPlayer
                            url={videosite}
                            width='100%'
                            height='100%'
                            controls={true}
                            playsinline={true}
                            config={{ file: { attributes: { playsInline: true, }, }, }}
                        />
                    </VideoContainer>
                    <ButtonWebTwo>O MEU SALÃO</ButtonWebTwo>
                </SiteContainer>
                <TextFourthContainer>
                    <BackgroundWebs src={backgroundweb} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"></BackgroundWebs>
                    <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">WEB</h1>
                    <p data-aos="fade-right">Logotipo é uma representação visual de uma empresa ou marca, que é projetada para ser facilmente reconhecida e lembrada pelo público. Um logotipo eficaz é crucial para a identidade da marca, pois ajuda a transmitir a mensagem da empresa de forma clara e consistente. O logotipo pode ser utilizado em diversos meios de comunicação, desde cartões de visita até propagandas em televisão.</p>
                    <IconsWeb>
                        <i><DiHtml5 /></i><i><DiCss3 /></i><i><DiJsBadge /></i><i><DiReact /></i>
                    </IconsWeb>
                    <ButtonWeb><span>O MEU SALÃO</span></ButtonWeb>
                </TextFourthContainer>
            </FourthHomeContainer>
        </HomeContainer>
    )
}

export default Home