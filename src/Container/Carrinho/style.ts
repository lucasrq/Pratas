import styled from "styled-components";

const SideBarCarrinho = styled.aside`
    
@media screen and (max-width: 768px) {
    position:absolute;
    top:0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    right:0%;
    height:100%;
    width:100%;
    .HeaderCarrinho{
        display:flex;
        height:70px;
        justify-content:space-between;
        padding:20px;
        background-color:white;
        overflow-y:hidden;
        border-bottom:1px solid #ccc;
        align-items:center;
        h1{
            display:flex;
            text-align:center;
            align-items:center;
            overflow-y:hidden;
        }
}
    .MainCarrinho{
        background-color:#fff;
        border:none;
        padding:20px;
        height:600px;
        .product{
            
        }
       
    } 
    .Footer{
       
        overflow-y:hidden;
        background-color:#fff;
        border:none;
        padding:40px;
        .checkout{
            display:flex;
            justify-content:space-between;
            border-bottom:1px solid black;
            span{
                text-align:center;
                align-items:center;
                margin-bottom:13px;
                margin-top:13px;
            }
        }

        .botao{
            text-align:center;
            align-items:center;
            display:flex;
            justify-content:center;
            margin-top:20px;
            button{
                background-color:#000;
                width:100%;
                height:50px;
                color:#fff;
                font-size:21px;
                border-radius:10px;
            }
        }
        }
    


}`
export default SideBarCarrinho