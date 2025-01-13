import styled from "styled-components";

const SideBarCarrinho = styled.aside`
    
@media screen and (max-width: 768px) {
    top:0;
    right:-100;
    width:100%;
    overflow-y:hidden;
    background-color:red;
    .HeaderCarrinho{
        display:flex;
        height:70px;
        justify-content:space-between;
        padding:20px;
        background-color:white;
        border-bottom:1px solid #ccc;

        h1{
            display:flex;
            text-align:center;
            align-items:center;
        }
}
    .MainCarrinho{
        height:100%;
        background-color:#fff;
        border:none;
        padding:20px;
    }
    border:none;


}`
export default SideBarCarrinho