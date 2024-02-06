//import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header';
import Main from './Components/Main'; 
import about from './Components/about';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <about/>
    </div>
  );
}

export default App;
