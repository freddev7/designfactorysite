import styled from "styled-components";


export const FooterContent= styled.div`
    background-color: #000000;
`;

export const FooterContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    border-top: 0.1px solid #6400e7;
    border-image: linear-gradient(to left, #000000 60%, #6400e7, #d40073) 1;
    border-left: 0;
	border-right: 0;
	border-bottom: 0;
    padding:3rem 0rem 1rem 0rem;
    background: linear-gradient(360deg, rgba(212, 0, 255, 0.192) , #000000 46% );
`

export const LogoFooter = styled.img`
    max-width:6rem;
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