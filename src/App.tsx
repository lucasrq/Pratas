import Carrinho from "./Container/Carrinho/Carrinho";
import Header from "./Container/Header/header";
import Main from "./Container/SectionMain";
import SideBar from "./Container/SideBar";

function App() {
  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100vh', position: 'relative' }}>
     
      <Header />
      <Main/>
      <Carrinho />
      <SideBar />
    </div>
  );
}

export default App;