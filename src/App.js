
import Navbar from "./Components/Navbar";
function App() {
  const cartCount = 1;
  return (
    <div className="App">
     <Navbar cartCount = {cartCount}/>
    </div>
  );
}

export default App;
