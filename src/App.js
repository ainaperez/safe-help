import './App.scss';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Organizer from './containers/Organizer/Organizer';
import Header from './components/Navigation/Header/Header';
import Login from './containers/MyAccount/Login/Login'; 
import Register from './containers/MyAccount/Register/Register';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; 



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path='/imorganizer' element={<Organizer />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
            <Route path='/' exact element={<Home />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
