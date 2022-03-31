import logo from './logo.svg';
import './App.css';
import { HashRouter,Route, Routes } from 'react-router-dom'
import NavigationBar from './components/Navigation/NavigationBar';
import GoLangPage from './components/GoLangPage/GoLangPage';
import NodeJSPage from './components/NodeJSPage/NodeJSPage';
import ExpressJSPage from './components/ExpressJSPage/ExpressJSPage';
import MongoDBExpressJSPage from './components/MongoDBExpressJSPage/MongoDBExpressJSPage';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<GoLangPage />}></Route>
          <Route path="/GoLangPage" element={<GoLangPage />}></Route>
          <Route path="/NodeJSPage" element={<NodeJSPage />}></Route>
          <Route path="/ExpressJSPage" element={<ExpressJSPage />}></Route>
          <Route path="/MongoDBExpressJSPage" element={<MongoDBExpressJSPage />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
