import { BrowserRouter as Router} from 'react-router-dom';
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import icon from './images/hex-icon.png'

export function App(){
  return (
    <Router>
      <div className = "App">
        <header><Header/></header>
        <main><Main/></main>
        <footer><Footer/></footer>
      </div>
    </Router>
  );
}