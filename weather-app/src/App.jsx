import './App.css'
// import WeatherBase from "./components/WeatherBase"
import Weather from './components/Weather'
import Footer from "./components/Footer"
import LandingPage from './components/LandingPage'
// import WeatherImg from './components/WeatherImg'
// import WeatherTemp from './components/WeatherTemp'
// import WeatherInfo from './components/WeatherInfo'


function App() {

  return (
    <section>
      {/* <WeatherBase/>
      <WeatherTemp/>
      <WeatherImg/>
      <WeatherInfo/> */}
      <LandingPage/>
      <Weather/>
      <Footer/>
     
     
    </section>
  )
}

export default App
