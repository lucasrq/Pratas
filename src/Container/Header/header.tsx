import { FaBars, FaShoppingCart } from "react-icons/fa";
import HeaderStyle from "./style";
import useToggleStore from "../../../store";
import { useToggleSideBar } from "../../../store";

function Header() {
  const { toggleActive } = useToggleStore();

  const { toggleSideBarActive } = useToggleSideBar();
  return (
    <>
      <HeaderStyle>
        <div>
          <FaBars size={24} color="#000" onClick={toggleSideBarActive}/>
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