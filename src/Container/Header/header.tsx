import { FaBars, FaShoppingCart } from "react-icons/fa";
import HeaderStyle from "./style";
import useToggleStore from "../../../store";


function Header() {
  const { isActive, toggleActive } = useToggleStore();
  return (
    <>
      <HeaderStyle>
        <div>
          <FaBars size={24} color="#000" onClick={() =>{console.log('opcoes')}}/>
        </div>

        <img src="/sa.png" alt="Logo" />

        <div>
          <FaShoppingCart size={24} color="#000" onClick={toggleActive}  />
        </div>
      </HeaderStyle>
      
     
    </>
  )
}

export default Header