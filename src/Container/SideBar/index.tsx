import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import {useToggleSideBar} from '../../../store';
import { ListSideBar, SideBarWrapper } from './style';
import SubTititulo from '../../Components/SubTitle';

function SideBar() {

    const { isSideBarActive, toggleSideBarActive } = useToggleSideBar();

    function Teste() {
        toggleSideBarActive();
    }
  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100vh' }}>
      <motion.section
        animate={{
          x: isSideBarActive ? 0 : '-160%', // Move o componente para dentro ou fora da tela
        }}
        initial={{ x: '-150%' }} // Inicia à direita, fora da tela
        exit={{ x: '-200%' }} // Quando o carrinho for fechado, ele se move para a direita
        transition={{
          type: 'spring',
          stiffness: 42,
        }}
        style={{
          position: 'absolute',
          top: 0,
          padding:'0 20px',
          borderBottom: '1px solid #ccc',
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          zIndex: 1000, // Garantir que o componente fique acima de outros
          overflow: 'hidden', // Impede qualquer overflow durante a animação
          
        }}
      >
        <div>
          <SideBarWrapper>
            <div>
                <img src="/sa.png" alt="Logo" />
            </div>
            <div className='close' onClick={Teste}>
                <MdClose size={24} color="#333"  />
            </div>
          </SideBarWrapper>
            <SubTititulo color='GreyTitle' size='ParagraphPrincipal'>Explore</SubTititulo>
            <ListSideBar>
                <li onClick={Teste}>Mais Vendidos</li>
                <li onClick={Teste}>Colar</li>
                <li onClick={Teste}>Brincos</li>
                <li onClick={Teste}>Alianças</li>
                <li onClick={Teste}>todos os produtos</li>
                <li onClick={Teste}>Corentes</li>
                <li><a href="https://wa.me/5511964503028?text=Ola%20Vim%20Direto%20do%20site%20JSPRATAS" target="_blank" rel="noopener noreferrer">
                Contato
              </a></li>
            </ListSideBar>
        </div>
      </motion.section>
    </div>
  );
}

export default SideBar;