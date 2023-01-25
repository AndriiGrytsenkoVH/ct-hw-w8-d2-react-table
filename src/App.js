import { useState } from "react";
import Navbar from "./components/Navbar";
import KekambasTable from "./components/KekambasTable";

function App() {
	return (
		<>
			<Navbar /> 
			<div className='container my-3'>
				<KekambasTable />
			</div>
		</>
	);
}

export default App;
