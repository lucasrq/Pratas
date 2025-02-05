import ProductContainer from "./style";

export type ProductProps = {
    photo: string;
    price: number;
    productName: string;
    desconto: string;
    onBuy?: () => void; 
    id : number;
}

function Product({photo, price, productName, desconto, onBuy}: ProductProps) {

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price);
      };


  return (
        <ProductContainer>
            <div className="product-img">
                <img src={photo} alt="photo" />
            </div>
            <div className="product-details">
                <p className='ProductName'>{productName}</p>
                <p>{desconto}</p>
                <p className='price'>{formatPrice(price)}</p>
                <p className='Parcelamento'>ou 2x de {formatPrice(price / 2)} sem juros</p>
                <p className='Frete'>Frete grátis</p>
            </div>

            <div className="product-button">
                <button onClick={onBuy}>Comprar</button>
            </div>
        </ProductContainer>
)
}

export default Product;