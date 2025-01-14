import Carrinho from "./Container/Carrinho/Carrinho";
import Header from "./Container/Header/header";
import SideBar from "./Container/SideBar";

function App() {
  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100vh', position: 'relative' }}>
     
      <Header />
      <Carrinho />
      <SideBar />
    </div>
  );
}

export default App;