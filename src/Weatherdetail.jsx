import React from "react";

const Weatherdetail = (props) => {
    return (
        <>
            <div className="temp-city">
                <div id="temp_info">
                   {props.currtemp}ºc
                </div>
                <div id="city_info">
                    {props.currcity}
                </div>
            </div>
        </>
    )
}

export default Weatherdetail;