import useLocalStorage from "../../hooks/useLocalStorage";

const CustomHookExample2 = () => {
	const [task, setTask] = useLocalStorage("task", "");
	const [tasks, setTasks] = useLocalStorage("tasks", []);

	const onSubmit = (e) => {
		e.preventDefault();

		const taskObj = {
			task,
			completed: false,
			data: new Date().toLocaleDateString(),
		};

		setTasks([...tasks, taskObj]);
	};

	return (
		<>
			<form onSubmit={onSubmit} className="w-50">
				<div className="mb-3">
					<label className="form-label">Task</label>
					<input
						type="text"
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>

			<hr />

			{tasks.map((task) => (
				<h3 key={task.data}>{task.task}</h3>
			))}
		</>
	);
};

export default CustomHookExample2;
