import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;

        .slick-slide img {
            padding: 0 1.3rem;
        }

        .slick-prev:before {
            color: #6400e7;
        }

        .slick-next:before {
            color: #6400e7;
        }
    }

`

