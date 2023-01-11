import "./App.css";
import Routes from './routes'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
  function App() {
  return (
    <div className="apptest">
      <Routes/>
   </div>
  );
}

export default App;
