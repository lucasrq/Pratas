import { MdClose } from 'react-icons/md';
import SideBarCarrinho from './style';
import { motion } from 'framer-motion';
import useToggleStore from '../../../store';

function Carrinho() {
  const { isActive, toggleActive } = useToggleStore();

  function Teste() {
    console.log(isActive);
    toggleActive();
  }
  
  return (
    <>
      <motion.section
        animate={{
          x: isActive ? 0 : '100%', // Move o componente para dentro ou fora da tela
        }}
        initial={{ x: '-100%' }} // Posição inicial fora da tela
        transition={{
          
          stiffness: 100,
        }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          display: isActive ? 'flex' : 'none',
          overflowX:'hidden',
        }}
      >
        <SideBarCarrinho>
          <section className="HeaderCarrinho">
            <h1>MEU CARRINHO</h1>
            <MdClose size={24} color="#333" onClick={Teste} />
          </section>

          <section className="MainCarrinho">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint laudantium
            libero deleniti incidunt ullam natus officiis, sapiente expedita numquam nesciunt
            recusandae tempore dicta autem doloribus consectetur repellendus necessitatibus voluptas?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro quibusdam hic! Nobis iure vitae quam eos, maiores corrupti corporis provident consequuntur officiis doloribus. Voluptatem nulla labore nobis assumenda numquam.
          </section>
        </SideBarCarrinho>
      </motion.section>
    </>
  );
}

export default Carrinho;
