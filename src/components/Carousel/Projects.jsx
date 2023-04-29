import React from "react";
import styled from "styled-components";
import SliderComp from "./Slider";

const Projects = () => {
    return(
        <Container>
            <Slide>
                <SliderComp/>
            </Slide>
        </Container>
    )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width:1280px;
    margin:0 auto;
    padding:0rem 0rem 6rem 0rem;
`

const Slide = styled.div`
-webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.2));

`