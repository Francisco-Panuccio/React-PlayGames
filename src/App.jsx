import './App.scss';
import Header from "./components/Header";
/* import Main from "./components/Main"; */
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header/>
{/*       <Main/> */}
      <ItemListContainer/>
      <Footer/>
    </>
  )
}

export default App;