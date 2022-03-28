import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import UseRefExample1 from "./components/useRef/UseRefExample1";
import UseRefExample2 from "./components/useRef/UseRefExample2";
import UseRefExample3 from "./components/useRef/UseRefExample3";
import UseMemoExample from "./components/useMemo/UseMemoExample";
import UseCallbackExample from "./components/useCallback/UseCallbackExample";
import CustomHookExample1 from "./components/customHook/CustomHookExample1";
import CustomHookExample2 from "./components/customHook/CustomHookExample2";

function App() {
	return (
		<Router>
			<div className="container mt-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/useref-example-1"
						element={<UseRefExample1 />}
					/>
					<Route
						path="/useref-example-2"
						element={<UseRefExample2 />}
					/>
					<Route
						path="/useref-example-3"
						element={<UseRefExample3 />}
					/>
					<Route
						path="/usememo-example"
						element={<UseMemoExample />}
					/>
					<Route
						path="/usecallback-example"
						element={<UseCallbackExample />}
					/>
					<Route
						path="/custom-hook-example-1"
						element={<CustomHookExample1 />}
					/>
					<Route
						path="/custom-hook-example-2"
						element={<CustomHookExample2 />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
