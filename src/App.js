import './App.css';
import Header from './containers/Layout/Header/Header';
import NavigationItems from './components/Navigation/NavigationItems/NavigationItems'

function App() {
  return (
    <div className="App">
      <NavigationItems />
      <Header></Header> 
    </div>
  );
}

export default App;
