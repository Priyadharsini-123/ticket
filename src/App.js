
import './css/custom-bootstrap.css'
import './App.css';
import Home from "./Section/Home";
import Choose from "./Section/Choose";
import Video from "./Section/Video";
import { Work } from "./Section/Work";

import { OurRoute } from "./Section/OurRoute";
import DownloadApp from "./Section/DownloadApp";
import Header from './Section/Header';
import Footer from './Section/Footer';


function App() {
  return (
    <>
   <Header/>
   
    <Home/>
   
    <Choose/>
    <Video/>
    <Work/> 
    <OurRoute/>
    <DownloadApp/>
    <Footer/>
    </>
    
  );
}

export default App;
