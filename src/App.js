import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./components/Home";
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
   </Routes>
   </>
  );
}

export default App;
