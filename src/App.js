import logo from './logo.svg';
import './App.css';
import { HashRouter,Route, Routes } from 'react-router-dom'
import NavigationBar from './components/Navigation/NavigationBar';
import GoLangPage from './components/GoLangPage/GoLangPage';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<GoLangPage />}></Route>
          <Route path="/GoLangPage" element={<GoLangPage />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
