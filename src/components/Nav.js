import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({greased, setGreased, data, setData}) => {
	
	function clickTheGreaser() {
		setGreased(!greased)
		console.log(greased)
	}
	function sortByName(){
		const sortedList = data.sort((a, b) => a.name.localeCompare(b.name))
		setData([...sortedList])

	}
	function sortByWeight() {
		console.log(data.weight)
		const sortedList = data.sort((a, b) => a.weight.toString().localeCompare(b.weight.toString()))
		console.log(sortedList)
		setData([...sortedList])

	}

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<button onClick={() => clickTheGreaser()}>
			{greased ? "Show All" : "Greased"}
			</button>
			<button onClick={() => sortByName()}>Sort By Name</button>
			<button onClick={() => sortByWeight()}>Sort By Weight</button>
		</div>
	);
};

export default Nav;
