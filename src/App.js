import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Footer />
        {/* JUST HTML */}
      </div>
    </BrowserRouter>
  );
}

export default App;
