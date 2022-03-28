import useFetch from "../../hooks/useFetch";

const CustomHookExample1 = () => {
	const { data, loading } = useFetch(
		"https://jsonplaceholder.typicode.com/posts",
		{}
	);

	if (loading) return <h3>Loading...</h3>;

	return (
		<div>
			{data.map((post) => (
				<p key={post.id}>{post.title}</p>
			))}
		</div>
	);
};

export default CustomHookExample1;
