import React from "react";

function Pig({ data, setData, shownPigs, setShownPigs }) {
    const { name, specialty, greased, weight, image, } = data
    const medal = data[Object.keys(data)[4]]

    function handleClick() {
        if (shownPigs.includes(data)) {
            const filteredList = shownPigs.filter((pig) => pig !== data)
            setShownPigs([...filteredList])
            console.log(shownPigs)

        } else {
            setShownPigs([...shownPigs, data])

        }
    }
    return (
        <div className="pigTile" onClick={() => handleClick()}>
            {shownPigs.includes(data) ?
                <div>
                    <p>{`Specialty: ${specialty}`}</p>
                    <p>{`Greased: ${greased}`}</p>
                    <p>{`Weight: ${weight}`} Pounds</p>
                    <p>{`Medal: ${medal}`}</p>
                </div>
                :
                <div>
                    <h2>{name}</h2>
                    <img src={image} alt={name} />
                </div>}
        </div>

    )

}
export default Pig