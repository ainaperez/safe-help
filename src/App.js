import './App.scss';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Organizer from './containers/Organizer/Organizer';
import Login from './containers/MyAccount/Login/Login'; 
import Register from './containers/MyAccount/Register/Register';
import Settings from './containers/MyAccount/Settings/Settings';
import CPCreateForm from '../src/containers/CollectionPoint/CPCreateForm/CPCreateForm'; 
import CPProfile from '../src/containers/CollectionPoint/CPProfile/CPProfile/CPProfile';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; 
import Results from '../src/containers/Results/Results';
import Dashboard from '../src/containers/MyAccount/Dashboard/Dashboard';
import CPProfileIndiv from './containers/IndividualCP/CPProfileIndiv';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path='/imorganizer' element={<Organizer />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
            <Route path='/settings' exact element={<Settings />} />
            <Route path='/createcp' exact element={<CPCreateForm />} />
            <Route path='/cpprofile' exact element={<CPProfile />} />
            <Route path='/collectionPoints' exact element={<Results/>} />
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
