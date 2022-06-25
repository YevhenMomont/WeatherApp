import "./App.css";
import Home from "./Components/Home";

const Header = () => (
  <div>
    <nav>
      <a href="/" onClick={Home}>
        Home
      </a>
      <a href="/city">City</a>
    </nav>
  </div>
);

function App() {
  return <Header />;
}

export default App;
