import React, { useEffect } from "react";
import { Project, HomeContainer, FirstHomeContainer, Logo3d, BackgroundIcon, TextFirstContainer, HomeImages, ImageContainer, SecondHomeContainer, SecondHomeImages, Logo, BackgroundSketch, TextSecondContainer, CarouselContainer, Slider, ItemCarousel, ThirdHomeContainer, ThirdHomeImages, TextThirdContainer, BackgroundMedias, Media, FourthHomeContainer, VideoContainer, BackgroundWebs, TextFourthContainer, Icons, IconsWeb, ButtonWeb, ButtonWebTwo, SiteContainer } from "../styles/Home.style";
import brainstorm from "../assets/brainstorm.svg"
import worldiconnew from "../assets/worldiconnew.svg";
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
import webvideo from "../assets/webvideo.mp4"
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
                    <h1 data-aos="fade-right">Vamos digitalizar<br/> o seu negócio!</h1>
                    <p data-aos="fade-up">Adotar uma estratégia digital, poderá expandir o alcance e a visibilidade do seu negócio, tornando os produtos ou serviços mais acessíveis, através de conteúdos respectivamente essenciais na internet, transmitindo as informações de maneira eficiente.</p>
                </TextFirstContainer>
                <HomeImages>
                    <BackgroundIcon src={worldiconnew}></BackgroundIcon>
                    <Logo3d src={brainstorm}></Logo3d>
                </HomeImages>
            </FirstHomeContainer>
            <ImageContainer><h1 data-aos="fade-right">JÁ DIVULGOU SUA MARCA HOJE?</h1></ImageContainer>
            <SecondHomeContainer id="logos">
                <SecondHomeImages>
                    <BackgroundSketch src={backgroundicon}></BackgroundSketch>
                    <Logo src={logossection} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"></Logo>
                </SecondHomeImages>
                <TextSecondContainer>
                    <h1 data-aos="fade-right">LOGO</h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">Representação visual de uma empresa ou marca, projetada para ser facilmente reconhecida e lembrada. Utilizada em diversos meios de comunicação, desde cartões de visita até propagandas em televisão.</p>
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
                    <h1 data-aos="fade-right">MEDIA</h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">A aparência/imagem da empresa nas mídias sociais pode impactar a percepção do público-alvo. Os layouts, cores e fontes devem ser consistentes com a identidade visual e materiais de marketing.</p>
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
                            url={webvideo}
                            width='100%'
                            height='100%'
                            controls={true}
                            playsinline={true}
                            config={{ file: { attributes: { playsInline: true, }, }, }}
                        />
                    </VideoContainer>
                    <ButtonWebTwo as="a" href="https://www.omeusalao.com.br" target="_blank"><span>O MEU SALÃO</span></ButtonWebTwo>
                </SiteContainer>
                <TextFourthContainer>
                    <BackgroundWebs src={backgroundweb} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"></BackgroundWebs>
                    <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">WEB</h1>
                    <p data-aos="fade-right">Fornecer informações do seu negócio na web, pode influenciar diretamente na escolha dos usúarios, além de ser atrativo, a experiência de acesso intensifica a conexão com os seus clientes.</p>
                    <IconsWeb>
                        <i><DiHtml5 /></i><i><DiCss3 /></i><i><DiJsBadge /></i><i><DiReact /></i>
                    </IconsWeb>
                    <ButtonWeb as="a" href="https://www.omeusalao.com.br" target="_blank"><span>O MEU SALÃO</span></ButtonWeb>
                </TextFourthContainer>
            </FourthHomeContainer>
        </HomeContainer>
    )
}

export default Home