import React from "react";
import Moment from "react-moment";

function Time() {
    return <Moment interval={1000} format={'DD/MM/YYYY hh:mm:ss'}></Moment>
}

export default Time;