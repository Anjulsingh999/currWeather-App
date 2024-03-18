import React, { useState } from "react";
import './index.css'
import SearchIcon from '@mui/icons-material/Search';
import Weatherimage from "./Weatherimage";
import Weatherdetail from "./Weatherdetail";
import Moreinfo from './Moreinfo';
import sunImage from './img/sun-fill.png';
import cloudImage from './img/clouds.png';
import drizzleImage from './img/drizzle.png';
import mistImage from './img/mist.png';
import rainImage from './img/rain.png';
import snowImage from './img/snow.png';


const App = () => {

    const [temprature, setTemprature] = useState(null);
    const [city, setCity] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [windspeed, setWindSpeed] = useState(null);
    const [inputcity, setinputcityname] = useState("");
    const [displaytype, setdisplaytype] = useState("none");
    const [img, setimg] = useState(null);
    const [errormsg,seterrormsg]=useState("none");

    const inputEvent = (event) => {
        if (event.target.value === "Prayagraj") {
            setinputcityname("Allahabad");
        }
        else {
            setinputcityname(event.target.value);
        }
        
    }

        const showimage = (weatherimg) => {
            if (weatherimg === "Clear") {
                setimg(sunImage);
            }
            else if (weatherimg === "Clouds") {
                setimg(cloudImage);
            }
            else if (weatherimg === "Drizzle") {
                setimg(drizzleImage);
            }
            else if (weatherimg === "Mist") {
                setimg(mistImage);
            }
            else if (weatherimg === "Rain") {
                setimg(rainImage);
            }
            else if (weatherimg === "Snow") {
                setimg(snowImage);
            }
        }


        const onsubmit = () => {
            

            const api_key = "7dd96a1570b2832a6a06a037004919fd";
            const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
            const api_city = inputcity;


            async function weather() {
                let data = await fetch(api_url + api_city + `&appid=${api_key}`);
                let output = await data.json();
                console.log(output);
                if (output.cod === '404') {
                    setdisplaytype("none");
                    seterrormsg("block");
                }
                else {
                    
                    setTemprature(Math.round(output.main.temp));
                    setCity(output.name);
                    setHumidity(output.main.humidity);
                    setWindSpeed(output.wind.speed);
                    let setweatherimg=output.weather[0].main;
                    showimage(setweatherimg);
                    setdisplaytype("block");
                    seterrormsg("none");
                }
                
                
                
            }
            
            
            weather();
        }


        return (
            <>
                <div className="container">

                <div className="search">
                <div className="search_area">
                        <div className="search_box">
                            <input type="text" placeholder="Enter the city name" onChange={inputEvent} value={inputcity} />
                        </div>
                        <div className="search_icon">
                            <button onClick={onsubmit} ><SearchIcon /></button>
                        </div>
                    </div>
                    <div className="errortext" style={{display:errormsg}}>
                        invalid city name !
                    </div>
                </div>
                   
                       
                    <div className="info" style={{ display: displaytype }}>
                        <Weatherimage srcimg={img} />
                        <Weatherdetail currtemp={temprature} currcity={city} />
                        <Moreinfo currhumidity={humidity} currwindspeed={windspeed} />
                    </div>
                </div>
            </>
        )
    }

    export default App;