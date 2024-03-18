import React from "react";


const Weatherimage=(props)=>{
    return(
        <>
             <div className="weather_image">
                    <img src={props.srcimg} alt="image"/>
                </div>
        </>
    )
}

export default Weatherimage;