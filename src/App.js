import './App.scss';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Organizer from './containers/Organizer/Organizer';
import Login from './containers/MyAccount/Login/Login'; 
import Register from './containers/MyAccount/Register/Register';
import CPCreateForm from './containers/CollectionPoint/CPCreateForm/CPCreateForm'; 
import CPProfile from './containers/CollectionPoint/CPProfile/CPProfile/CPProfile';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; 
import Dashboard from './containers/MyAccount/Dashboard/Dashboard';
import CPProfileIndiv from './containers/IndividualCP/CPProfileIndiv';
import CPCreateSuccess from './containers/CollectionPoint/CPCreateSuccess/CpCreateSuccess';
function App() {

  return (
   
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path='/imorganizer' element={<Organizer />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
            <Route path='/createcp' exact element={<CPCreateForm />} />
            <Route path='/:cpId/createsuccess' exact element={<CPCreateSuccess />} />
            <Route path='/cpprofile' exact element={<CPProfile />} />
            <Route path='/collectionPoints/:cpId' exact element={<CPProfile />} />
            <Route path='/collectionPoint/:cpId' exact element={<CPProfileIndiv />} />
            <Route path='/dashboard' exact element={<Dashboard/>} />
            <Route path='/' exact element={<Home />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
