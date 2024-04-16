import './App.css'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Home from './components/Home'
import WeatherMain from './components/WeatherMain';
import NoPage from "./components/NoPage";



function App() {
  return (
    <>
      <div>
          <Routes>
            <Route index element= {<Home />} />
            <Route path="/home" element ={<Home />} />
            <Route path="/weather" element= {<WeatherMain/>} />
            <Route path="/*" element= {<NoPage />} />
          </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
