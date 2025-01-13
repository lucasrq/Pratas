import styled from "styled-components";

const SideBarCarrinho = styled.aside`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-width: 300px; /* Largura mínima */
    height: 80vh; /* Garante que a barra lateral tenha altura total da tela */
    overflow-x: hidden; /* Impede o overflow horizontal */
    transition: transform 0.3s ease-in-out; /* Suaviza a animação */

    .HeaderCarrinho {
      display: flex;
      height: 70px;
      justify-content: space-between;
      padding: 20px;
      background-color: white;
      border-bottom: 1px solid #ccc;
      align-items: center;
      h1 {
        display: flex;
        text-align: center;
        align-items: center;
      }
    }

    .MainCarrinho {
      background-color: #fff;
      border: none;
      padding: 20px;
      flex-grow: 1;
      overflow-y: auto; 
      .product {
        
      }
    }

    .Footer {
      background-color: #fff;
      border: none;
      padding: 40px;
      overflow-y: hidden;

      .checkout {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid black;

        span {
          text-align: center;
          align-items: center;
          margin-bottom: 13px;
          margin-top: 13px;
        }
      }

      .botao {
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: center;
        margin-top: 20px;

        button {
          background-color: #000;
          width: 100%;
          height: 50px;
          color: #fff;
          font-size: 21px;
          border-radius: 10px;
        }
      }
    }
  }
`;

export default SideBarCarrinho;
