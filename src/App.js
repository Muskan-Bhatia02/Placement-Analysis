// import logo from './logo.svg';
import './App.css';
// import Eligibility from './components/Eligibility';
// import Help from './components/Help';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>


      <Navbar title="Placement Analysis" para1="Eligibility" para2="Alumni Search" para3="Company Search" para4="Help" />
      <Home/>
      {/* <Eligibility/> */}
      {/* <Help/> */}

    </>
  );
}

export default App;
