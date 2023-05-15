import styled from "styled-components";

export const FooterContainer = styled.div`
    width:100%;
    height:16rem;
    display:flex;
    justify-content:center;
    background-image: linear-gradient(to bottom, #000000 87%, #6400e7 );
    flex-direction:column;
    align-items:center;
    border-top: 0.1px solid #6400e7;
    border-image: linear-gradient(to right, #000000 60%, #6400e7, #d40073) 1;
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
    font-size:2.7rem;

    & > a {
        color:#6400e7;
        opacity:0.7;
        margin-left:1rem;
    &:hover {
        opacity: 100%;
}
    }
`