import Carrinho from "./Container/Carrinho/Carrinho";
import Header from "./Container/Header/header";

function App() {
  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100vh', position: 'relative' }}>
      <Header />
      <Carrinho />
    </div>
  );
}

export default App;