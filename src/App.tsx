import { BrowserRouter as Router} from 'react-router-dom';
import { Footer } from "./base/Footer";
import { Header } from "./base/Header";
import { Main } from "./base/Main";

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