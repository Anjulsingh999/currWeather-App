import React from "react";
import windImg from './windy-fill.png'
import dropImg from './drop-line.png'


const Moreinfo=(props)=>{
    
    return(
        <>
              <div className="more_info">
                    <div className="humidity_info">
                        <img src={dropImg} />
                        <div className="humidity_value">
                            {props.currhumidity}%
                            <div className="humidity_text">
                                Humidity
                            </div>
                        </div>
                    </div>

                    <div className="windspeed_info">
                        <img src={windImg} />
                        <div id="windspeed_value">
                            {props.currwindspeed} Km/h
                            <div id="humidity_text">
                                Wind Speed
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Moreinfo;