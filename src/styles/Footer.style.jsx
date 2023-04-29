import styled from "styled-components";

export const FooterContainer = styled.div`
    width:100%;
    height:16rem;
    display:flex;
    justify-content:center;
    background-image: linear-gradient(183deg, #000000 83%, #5300bc );
    color:#5300bc;
    flex-direction:column;
    align-items:center;
    border-top: 0.1px solid #5300bc;
    border-image: linear-gradient(to right, #000000 60%, #5300bc, #d40073) 1;
    border-left: 0;
	border-right: 0;
	border-bottom: 0;
`

export const LogoFooter = styled.img`
    max-width:8rem;
`

export const Icons = styled.div`
    display:flex;
    position: relative;
    right:0.5rem;
    margin-top:2rem;
    font-size:3rem;
    

    & > a {
        opacity:0.7;
        margin-left:1rem;
    &:hover {
        opacity: 100%;
}
    }
`