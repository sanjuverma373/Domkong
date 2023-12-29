import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Headersec from './components/Headersec';
import Aboutsec from './components/Aboutsec';
import Utilitiessec from './components/Utilitiessec';
import Mintsec from './components/Mintsec';
import { Accordion } from 'react-bootstrap';
import Accordionsec from './components/Accordionsec';
import Rodmapsec from './components/Roadmapsec';
import Meetteamsec from './components/Meetteamsec';
import Thekongsec from './components/Thekongsec';
import Slidersec from './components/Slidersec';
import Backtotop from './components/Backtotop';


function App() {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    document.getElementById("preloader").classList.add("d_none")
    document.body.classList.remove("overflow-hidden")

  }, 2000);
  return (
    <div>
      <div id="preloader" class=" overflow-y-hidden  position-relative loader_bg ">
        <div class=" bg-black vh-100 d-flex align-items-center justify-content-center  position-fixed  top-0 start-0 w-100 ">
          <div class="d-flex align-items-center justify-content-center preloder-img ">
            <div class="loading-bar">Loading</div>
          </div>
        </div>
      </div>

      <Headersec />
      <Aboutsec />
      <Utilitiessec />
      <Thekongsec />
      <Mintsec />
      <Rodmapsec />
      <Slidersec />
      <Meetteamsec />
      <Accordionsec />
      <Backtotop />
    </div>
  );
}

export default App;
