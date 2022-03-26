import { useState, useEffect, useRef } from "react";

const UseRefExample2 = () => {
	const [name, setName] = useState("");
	const renders = useRef(0);
	const prevName = useRef("");

	useEffect(() => {
		renders.current = renders.current + 1;
		prevName.current = name;
		console.log(prevName.current);
	}, [name]);

	return (
		<div>
			<h1>Renders: {renders.current}</h1>
			<h2>Prev Name State: {prevName.current}</h2>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				className="form-control mb-3"
			/>
		</div>
	);
};

export default UseRefExample2;
