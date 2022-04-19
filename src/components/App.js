import React, {useState} from "react";
import Nav from "./Nav";
import Container from "./Container"
import hogs from "../porkers_data";

function App() {
	const [data, setData] = useState(hogs)
	const [shownPigs, setShownPigs] = useState([])
	const [greased, setGreased] = useState(false)
	const filteredData = greased ? data.filter((x) => x.greased === true) : data
	
	
	
	return (
		<div className="App">
			<Nav greased={greased} setGreased={setGreased} setData={setData} data={data}/>
			<Container data={filteredData} setData={setData} shownPigs={shownPigs} setShownPigs={setShownPigs}/>
		
		</div>
	);
}

export default App;
