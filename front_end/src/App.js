import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
function App() {
  return (

    <div className="App">

        <Router>
          <Header/>

          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/Product/:id' element={<ProductPage/>}/>
            <Route path='/shoppingCart' element={<ProductPage/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
          <Footer/>          
        </Router>      

    </div>  
  );
}

export default App;
