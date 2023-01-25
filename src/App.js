import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import KekambasTable from "./components/KekambasTable";

function App() {

	const [search, setSearch] = useState('');
	const [resultData, setResultData] = useState([])

	useEffect(() => {
        fetch(`https://scratched-juniper-salto.glitch.me/kekambas`)
            .then(res => res.json())
            .then(data => {
				let pattern = RegExp(search, 'i');
                data = data.filter( obj => obj.first_name.match(pattern) || obj.last_name.match(pattern));
				setResultData(data);
            })
    }, [search]);

	return (
		<>
			<Navbar setSearch={setSearch}/> 
			<h1 className="text-center">Here is the list of Kekambas{search ? `, filtered by string "${search}"` : ''}</h1>
			<div className='container my-3'>
				<KekambasTable data={resultData}/>
			</div>
		</>
	);
}

export default App;
