import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        
        //.slick-next:before{
          // font-size:2rem;
        //}

        //.slick-prev:before {
            //font-size:2rem;
        //}

        .slick-slide img {
            padding: 0 1.3rem;
        }

        .slick-prev:before {
            color: #5300bc;
        }

        .slick-next:before {
            color: #5300bc;
        }
    }

`

