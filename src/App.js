import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import About from './Components/About';
import TypographyColorScheme from './Components/TypographyColorScheme';
import WalkthroughScreen from './Components/WalkthroughScreen';
import Signup from './Components/Signup';
import Login from './Components/Login';
/* import Screens from './Components/Screens'; */
import Packages from './Components/Packages';
import Filters from './Components/Filters';
import Layout from './Components/Layout';
import './App.css';


function App() {
  return (
    <div className="App">
      <HomePage />
      <About/>
      <TypographyColorScheme />
      <WalkthroughScreen />
      <Signup/>
      <Login/>
      {/* <Screens/> */}
      <Packages/>
      <Filters/>
      <Layout/>
    </div>
  );
}

export default App;
