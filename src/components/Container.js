import React from "react";
import Pig from "./Pig"

function Container({ data, setData, shownPigs, setShownPigs }) {
    const pigCards = data.map((pig) => (
        <Pig data={pig} setData={setData} shownPigs={shownPigs} setShownPigs={setShownPigs}/>
    ))
    return (
        <div>{pigCards}</div>
    )
}
export default Container