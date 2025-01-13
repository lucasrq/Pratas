import { MdClose } from 'react-icons/md';
import SideBarCarrinho from './style';
import { motion } from 'framer-motion';
import useToggleStore from '../../../store';

function Carrinho() {
  const { isActive, toggleActive } = useToggleStore();

  function Teste() {
    toggleActive();
  }

  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100vh' }}>
      <motion.section
        animate={{
          x: isActive ? 0 : '100%', // Move o componente para dentro ou fora da tela
        }}
        initial={{ x: '100%' }} // Inicia à direita, fora da tela
        exit={{ x: '100%' }} // Quando o carrinho for fechado, ele se move para a direita
        transition={{
          type: 'spring',
          stiffness: 50,
        }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          zIndex: 1000, // Garantir que o componente fique acima de outros
          overflow: 'hidden', // Impede qualquer overflow durante a animação
          visibility: isActive ? 'visible' : 'hidden', // Fica visível quando ativo, invisível quando não
        }}
      >
        <SideBarCarrinho>
          <section className="HeaderCarrinho">
            <h1>MEU CARRINHO</h1>
            <MdClose size={24} color="#333" onClick={Teste} />
          </section>

          <section className="MainCarrinho">
            <div className='product'>
              os Produtos ficaram aqui
            </div>
          </section>
          <footer className='Footer'>
            <div className='checkout'>
              <span>SubTotal</span>
              <span>R${122}</span>
            </div>
            <div className='checkout'>
              <span>Frete</span>
              <span>Gratis</span>
            </div>
            <div className='checkout'>
              <span>Total</span>
              <span>R${122}</span>
            </div>
            <div className='botao'>
              <button>Finalizar Compra</button>
            </div>
          </footer>
        </SideBarCarrinho>
      </motion.section>
    </div>
  );
}

export default Carrinho;
