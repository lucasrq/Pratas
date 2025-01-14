import styled from "styled-components";

export const SideBarWrapper = styled.div`
display: flex;
justify-content:space-between;
width:100%;
align-items:center;
margin-top:-20px;
border-bottom:1px solid #ccc;
    img{
        width:100%;
        max-width:140px;
        height: auto;
        
    }
    .close{
        width:50px;
        height:50px;
        display:flex;
        border:1px solid black;
        text-align:center;
        align-items:center;
        justify-content:center;
    }
`
