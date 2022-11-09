import './App.css';
// import Header from './components/header/header';
import UrlContainer from './components/urlContainer/urlContainer';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Header/> */}
      <UrlContainer/>
      <Footer/>
    </div>
  );
}

export default App;
