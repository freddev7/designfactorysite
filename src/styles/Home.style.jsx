import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
    background-color: #000000;
    display:flex;
    flex-direction:column;
    padding: 0rem;
`;

export const gradient = keyframes`

0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}
`;

export const FirstHomeContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 7rem 6rem 4rem 6rem;
    overflow: hidden;

    @media (max-width: 1024px) and (min-width: 768px) {
        flex-direction:column-reverse;
        padding: 9rem 3rem 9rem 3rem;
    }

    @media (max-width: 768px) and (min-width: 590px) {
        flex-direction:column-reverse;
        padding: 9rem 3rem 9rem 3rem;
    }

    @media (max-width: 590px) and (min-width: 428px) {
        flex-direction:column-reverse;
        padding:1rem;
    }

    @media (max-width: 428px) and (min-width: 375px) {
        flex-direction:column-reverse;
        padding:1rem;
    }

    @media (max-width: 375px) and (min-width: 320px) {
        flex-direction:column-reverse;
        padding:1rem;
    }
`
export const Logo3dAnimation = keyframes`
    0% { transform: translate(0%); }
    25% { transform: translateY(7%); }
    50% { transform: translate(0%); }
    75% { transform: translate(-5%); }
    100% { transform: translate(0%); }
`

export const HomeImages = styled.div`
    display:flex;
    position: relative;
    align-items:center;

    @media (max-width: 590px) and (min-width: 428px) {
        position:sticky;
    }
`

export const Logo3d = styled.img`
    width: 29rem;
    height: 21rem;
    animation: ${Logo3dAnimation} 3s linear infinite;

    @media (max-width: 590px) and (min-width: 428px) {
        width:21rem;
    }

    @media (max-width: 428px) and (min-width: 375px) {
        width:20rem;
    }

    @media (max-width: 375px) and (min-width: 320px) {
        width:18rem;
    }
`

export const BackgroundIcon = styled.img`
    max-width: 30rem;
    height: auto;
    opacity: 0.4; 
    position:absolute;
    transform: translate(-120px);

       
    @media (max-width: 768px) and (min-width: 590px) {
        transform: translate(-50px);
    }
    
    @media (max-width: 590px) and (min-width: 428px) {
        max-width:18rem;
        transform: translate(-30px);
    }

    @media (max-width: 428px) and (min-width: 375px) {
        max-width:18rem;
        transform: translate(-15px);
    }

    @media (max-width: 375px) and (min-width: 320px) {
        max-width:18rem;
        transform: translate(-5px);
    }
`

export const TextFirstContainer = styled.div`
    color:#5300bc;
    font-size: 1.6rem;
    font-family: 'Rajdhani';

    & > h1 {
        animation: ${gradient} 3s ease-in-out infinite;
        font-weight:500;
        background: linear-gradient(to right , #d40073, #5300bc 70%); 
        -webkit-background-clip: text;
        background-size:200%;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }

    & > p {
        margin-top: 1rem;
        font-weight:300;
        line-height:2rem;
    }
    @media (max-width: 1024px) and (min-width: 768px) {
        margin-top:2rem;
    }

    @media (max-width: 768px) and (min-width: 590px) {
        margin-top:2rem;
    }

    @media (max-width: 590px) and (min-width: 428px) {
        font-size:1.3rem;
        margin-top:2rem;
    }

    @media (max-width: 428px) and (min-width: 375px) {
        font-size:1.3rem;
        margin-top:3rem;
    }

    @media (max-width: 375px) and (min-width: 320px) {
        font-size:1.2rem;
        margin-top:3rem;
    }
`

export const ImageContainer = styled.div`
    border-bottom: 0.1px solid #5300bc;
    border-image: linear-gradient(to right, #000000 20%, #5300bc, #d40073) 1;
    border-left: 0;
	border-right: 0;
	border-top: 0;
    min-height:25vh;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:3rem;
    letter-spacing:0.1rem;

    & > q {
    font-family:'Rajdhani';
    color:#fff;
    font-weight:700;
    animation: ${gradient} 3s ease-in-out infinite;
    background: linear-gradient(to right , #d40073, #5300bc 70%); 
    -webkit-background-clip: text;
    background-size:200%;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    
    }

    @media (max-width: 590px) and (min-width: 428px) {
        font-size:1.7rem;
        text-align:center;
        min-height:20vh;
        background-position: 30% 40%;
    }

    @media (max-width: 428px) and (min-width: 375px) {
        font-size:1.5rem;
        min-height:16vh;
    }

    @media (max-width: 375px) and (min-width: 320px) {
        font-size:1.3rem;
        min-height:18vh;
    }

`

export const SecondHomeContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:11rem 6rem 9rem 6rem;

    @media (max-width: 1024px) and (min-width: 768px) {
        flex-direction:column;
        padding:19rem 3rem 0rem 3rem;
    }

    @media (max-width: 768px) and (min-width: 590px) {
        flex-direction:column;
        padding: 19rem 3rem 0rem 3rem;
    }

    @media (max-width: 590px) and (min-width: 428px) {
        flex-direction:column;
        padding:16rem 1rem 0rem 1rem;
    }

    @media (max-width: 428px) and (min-width: 375px) {
        flex-direction:column;
        padding:16rem 1rem 3rem 1rem;

    }

    @media (max-width: 375px) and (min-width: 320px) {
        flex-direction:column;
        padding:16rem 1rem 3rem 1rem;
    }
`

export const SecondHomeImages = styled.div`
    display:flex;
    align-items:center;

    @media (max-width: 1024px) and (min-width: 768px) {
        justify-content:center;
    }

    @media (max-width: 768px) and (min-width: 590px) {
        justify-content:center;
    }

    @media (max-width: 590px) and (min-width: 428px) {
        justify-content:center;
    }

    @media (max-width: 428px) and (min-width: 375px) {
        justify-content:center;
    }

    @media (max-width: 375px) and (min-width: 320px) {
        justify-content:center;
    }
`

export const Logo = styled.img`
    max-width: 23rem;
    height: auto;
    position:absolute;
    
    @media (max-width: 590px) and (min-width: 428px) {
        max-width:18rem;
    }

    @media (max-width: 428px) and (min-width: 375px) {
        max-width:18rem;
    }

    @media (max-width: 375px) and (min-width: 320px) {
        max-width:17rem;
    }
`

export const BackgroundSketch = styled.img`
    max-width:29rem;
    height:auto;
    transform: translate(50px);
    position:absolute;
    opacity: 0.4;
    
    @media (max-width: 590px) and (min-width: 428px) {
        max-width:23rem;
        transform: translate(20px);
    }

    @media (max-width: 428px) and (min-width: 375px) {
        max-width:21rem;
        transform: translate(10px);
    }

    @media (max-width: 375px) and (min-width: 320px) {
        max-width:22rem;
        transform: translate(0px);
    }
`

export const TextSecondContainer = styled.div`
    color:#5300bc;
    font-size: 1.6rem;
    font-family: 'Rajdhani';
    padding:0rem 3rem 0rem 30rem; 

    & > h1 {
        animation: ${gradient} 3s ease-in-out infinite;
        font-weight:500;
        background: linear-gradient(to right , #d40073, #5300bc 70%); 
        -webkit-background-clip: text;
        background-size:200%;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }

    & > p {
        margin-top: 1rem;
        font-weight:300;
        line-height:2rem;
        margin-bottom: 2rem;
    }

    & > i {
        font-size:3rem;
        opacity:0.7;
            &:hover {
        opacity: 100%;
}
    
    }

    @media (max-width: 1024px) and (min-width: 768px) {
        padding:13rem 0rem 5rem 0rem;
    }

    @media (max-width: 768px) and (min-width: 590px) {
        padding: 13rem 0rem 5rem 0rem;
    }

    @media (max-width: 590px) and (min-width: 428px) {
        font-size:1.3rem;
        padding:13rem 0rem 5rem 0rem;

    }

    @media (max-width: 428px) and (min-width: 375px) {
        font-size:1.3rem;
        padding:13rem 0rem 0rem 0rem;
    }

    @media (max-width: 375px) and (min-width: 320px) {
        font-size:1.3rem;
        padding:13rem 0rem 0rem 0rem;
    }
`

export const CarouselContainer = styled.div`
    overflow:hidden;
    position:relative;
    white-space:nowrap;
    border-bottom: 0.1px solid #5300bc;
    border-image: linear-gradient(to right, #000000 20%, #5300bc, #d40073) 1;
    border-left: 0;
	border-right: 0;
	border-top: 0;
`

export const Scroll = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
`

export const Slider = styled.div`
    display:inline-flex;
    animation: ${Scroll} 20s linear infinite;
    margin-bottom:4rem;
`

export const ItemCarousel = styled.img`
    width:5rem;
    margin: 0 5rem;
    
    &:nth-child(4) {
        width:6rem;
    }

    &:nth-child(5) {
        width:9rem;
    }

    &:nth-child(6) {
        width:5rem;
    }

    &:nth-child(8) {
        width:8rem;
    }

`

export const ThirdHomeContainer = styled.div`
    background-color: #000000;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:6rem 6rem 6rem 6rem;
    overflow: hidden;

    @media (max-width: 900px) and (min-width: 768px) {
        padding:6rem 2rem 6rem 2rem;
    }

    @media (max-width: 768px) and (min-width: 590px) {
        flex-direction:column;
        padding:6rem 3rem 6rem 3rem;
    }

    @media (max-width: 590px) and (min-width: 428px) {
        flex-direction:column;
        padding:3rem 1rem 5rem 1rem;
    }

    @media (max-width: 428px) and (min-width: 375px) {
        flex-direction:column;
        padding:3rem 1rem 5rem 1rem;
    }

    @media (max-width: 375px) and (min-width: 320px) {
        flex-direction:column;
        padding:3rem 1rem 5rem 1rem;
    }
`

export const ThirdHomeImages = styled.div`
    display:flex;
    align-items:center;
`

export const Media = styled.img`
    max-width: 19rem;
    height: auto;
    border-radius:1rem;
    position:relative;
    
    @media (max-width: 590px) and (min-width: 428px) {
        max-width: 18rem;
        padding-right:0rem;
    }

    @media (max-width: 428px) and (min-width: 375px) {
        left:1rem;
    }

    @media (max-width: 375px) and (min-width: 320px) {
         max-width:18rem;
         left:1rem;
    }
`

export const BackgroundMedias = styled.img`
    max-width: 20rem;
    height:auto;
    right:10rem;
    position:absolute;

    @media (max-width: 768px) and (min-width: 590px) {
        right:16rem;
        max-width:20rem;
    }

    @media (max-width: 590px) and (min-width: 428px) {
       left:3rem;
       max-width:20rem;
    }

    @media (max-width: 428px) and (min-width: 375px) {
       max-width:20rem;
       right:4rem;
    }

    @media (max-width: 375px) and (min-width: 320px) {
         max-width:18rem;
         right:4rem;
    }

`

export const TextThirdContainer = styled.div`
    color:#5300bc;
    font-size: 1.6rem;
    font-family: 'Rajdhani';
    display: flex;
    flex-direction: column;
    padding-right: 4rem;

    & > h1 {
        animation: ${gradient} 3s ease-in-out infinite;
        font-weight:500;
        background: linear-gradient(to right , #d40073, #5300bc 70%); 
        -webkit-background-clip: text;
        background-size:200%;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        
    }

    & > p {
        margin-top: 1rem;
        font-weight:300;
        line-height:2rem;
    }

    @media (max-width: 590px) and (min-width: 428px) {
        font-size:1.3rem;
        padding-right:0rem;
        padding-bottom:3rem;
    }

    @media (max-width: 428px) and (min-width: 375px) {
        font-size:1.3rem;
        padding-right:0rem;
        padding-bottom:3rem;
    }
    
    @media (max-width: 375px) and (min-width: 320px) {
        font-size:1.2rem;
        padding-right:0rem;
        padding-bottom:3rem;
    }

`

export const Icons = styled.div`
    display:flex;
    margin-top:3rem;
    font-size:3rem;

    & > a {
        opacity:0.7;
        margin-right:1rem;
    &:hover {
        opacity: 100%;
}
    }
`

export const Project = styled.div`
    background-color: #000000;
`

export const FourthHomeContainer = styled.div`
    background-color: #000000;
    display:flex;
    align-items:center;
    padding:6rem 6rem 6rem 6rem;
    border-top: 0.1px solid #5300bc;
    border-image: linear-gradient(to left, #000000 40%, #5300bc, #d40073) 1;
    border-left: 0;
	border-right: 0;
	border-bottom: 0;

    @media (max-width: 900px) and (min-width: 768px) {
        padding:6rem 2rem 6rem 2rem;
    }

    @media (max-width: 768px) and (min-width: 590px) {
        flex-direction:column-reverse;
        padding:6rem 3rem 3rem 3rem;
    }

    @media (max-width: 590px) and (min-width: 428px) {
        flex-direction:column-reverse;
        padding:3rem 1rem 3rem 1rem;
    }

    @media (max-width: 428px) and (min-width: 375px) {
       flex-direction:column-reverse;
       padding:3rem 1rem 3rem 1rem;
    }

    @media (max-width: 375px) and (min-width: 320px) {
       flex-direction:column-reverse;
       padding:3rem 1rem 3rem 1rem;
    }

`

export const VideoContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     width: 19rem;
`

export const BackgroundWebs = styled.img`
    position:absolute;
    max-width:31rem;
    align-self:flex-end;

    @media (max-width: 428px) and (min-width: 375px) {
        max-width:22rem;
    }

    @media (max-width: 375px) and (min-width: 320px) {
        max-width:20rem;
    }
`


export const TextFourthContainer = styled.div`
    color:#5300bc;
    font-size: 1.6rem;
    font-family: 'Rajdhani';
    display: flex;
    flex-direction: column;
    padding-left: 6rem;

    & > h1 {
        animation: ${gradient} 3s ease-in-out infinite;
        font-weight:500;
        background: linear-gradient(to right , #d40073, #5300bc 70%); 
        -webkit-background-clip: text;
        background-size:200%;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        
    }

    & > p {
        margin-top: 1rem;
        font-weight:300;
        line-height:2rem;
    }

    @media (max-width: 900px) and (min-width: 768px) {
        padding-left:3rem;
    }

    @media (max-width: 768px) and (min-width: 590px) {
        padding-left:2rem;
    }

    @media (max-width: 590px) and (min-width: 428px) {
        font-size:1.3rem;
        padding-left:0rem;
        padding-bottom:2rem;
    }

    @media (max-width: 428px) and (min-width: 375px) {
       font-size:1.3rem;
       padding-left:0rem;
    }

    @media (max-width: 375px) and (min-width: 320px) {
       font-size:1.2rem;
       padding-left:0rem;
    }

`

export const IconsWeb = styled.div`
    display:flex;
    align-items:center;
    margin-right:1rem;
    margin-top:3rem;
    font-size:3rem;

    & > i {
        opacity:0.7;
        

    &:nth-child(1) {
        font-size:4rem;
    }  
    
    &:nth-child(2) {
        font-size:4rem;
    }

    &:nth-child(3) {
        margin-bottom:0.6rem;
        margin-left:0.6rem;
    }
    
    &:nth-child(4) {
        font-size:4rem;
        margin-left:0.6rem;
    }  

    &:hover {
        opacity: 100%;
}
    }
`

export const ButtonWeb = styled.button`
        color: #5300bc;
        width: 10.6rem;
        height: 2.9rem;
        font-size: 1.3rem;
        font-family: 'Rajdhani';
        margin-top:1rem;
        border: double 1px transparent;
        border-radius: 0.6rem;
        background-image: linear-gradient(-188deg, black 50%, #111111), linear-gradient(-198deg , #d40073, #5300bc 70%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        cursor:pointer;
        text-decoration:none;
        display:flex;
        align-items:center;
        justify-content:center;

        span {
            background: linear-gradient(-188deg , #d40073, #5300bc 70%); 
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }

        @media (max-width: 768px) and (min-width: 590px) {
            display:none;
        }

        @media (max-width: 590px) and (min-width: 428px) {
            display:none;
        }
        
        @media (max-width: 428px) and (min-width: 375px) {
            display:none;
        }

        @media (max-width: 375px) and (min-width: 320px) {
            display:none;
        }    
`

export const ButtonWebTwo = styled.button`
        color: #5300bc;
        width: 10.6rem;
        height: 3rem;
        font-size: 1.3rem;
        font-family: 'Rajdhani';
        margin-top:1rem;
        border: double 1px transparent;
        border-radius: 0.8rem;
        background-image: linear-gradient(-188deg, black 50%, #111111), linear-gradient(-198deg , #d40073, #5300bc 70%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        cursor:pointer;
        display:none;
        text-decoration:none;
        align-items:center;
        justify-content:center;

        span {
            background: linear-gradient(-188deg , #d40073, #5300bc 70%); 
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }


        @media (max-width: 768px) and (min-width: 590px) {
            margin-top:3rem;
            align-self:center;
            display:flex;
        }

        @media (max-width: 590px) and (min-width: 428px) {
            margin-top:3rem;
            align-self:center;
            display:flex;
        }

        @media (max-width: 428px) and (min-width: 375px) {
            margin-top:3rem;
            align-self:center;
            display:flex;
        }

        @media (max-width: 375px) and (min-width: 320px) {
            margin-top:3rem;
            display:flex;
            align-self:center;
        }   
`

export const SiteContainer = styled.div`
    display:flex;
    flex-direction:column;
`

