import { createGlobalStyle } from "styled-components"; 


const GlobalStyled = createGlobalStyle`
    *{
        padding:0;
        margin:0%;
        box-sizing:border-box;
        overflow-x:hidden;
    }

    body{
        overflow-x:hidden;
        font-family:'Poppins' , sans-serif;
    }
 
`

export default GlobalStyled