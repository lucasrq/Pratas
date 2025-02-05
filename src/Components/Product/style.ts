import styled from "styled-components";

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width:220px;
    max-width:220px;
    height: 480px;
    box-shadow: 0px 3px 12px 0px #00000038;
    border-radius: 10px;

.product-img{
    width: 100%;
    height: 228px;
    margin-top: 32px;
    margin-bottom: 9px;
    overflow-y:hidden;
}
.product-details{
    p{
        margin-left: 12px;
        text-align: left;
        font-family: Poppins;
    }
    .ProductName{
    
    font-size: 15px;
    font-weight: 300;
    line-height: 22.5px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #3F3F40;
    }

    p:nth-child(2){
    font-family: Poppins;
    font-weight: 300;
    margin-left: 12px;
    color: #3F3F40;
     margin-top:12px; 
    text-decoration: line-through;
    line-height: 24px;
    }
    .price{
        font-family: Poppins;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        margin-bottom: 5px;
    }
    .Parcelamento{
        font-size: 12px;
    }
    .Frete{
        color: #3442B5;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        margin-bottom: 12px;
        margin-top: 12px;
    }

   
} 
.product-button{
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    button{
        height: 44px;
        width: 90%;
        background-color: #3442B5;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    
}
`

export default ProductContainer