import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { client } from "../client";
import { feedQuery, searchQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
	const [pins, setPins] = useState();
	const [loading, setLoading] = useState(false);
	const { categoryId } = useParams();

	useEffect(() => {
		if (categoryId) {
			setLoading(true);
			const query = searchQuery(categoryId);
			client.fetch(query).then((data) => {
				setPins(data);
				setLoading(false);
			});
		} else {
			setLoading(true);

			client.fetch(feedQuery).then((data) => {
				setPins(data);
				setLoading(false);
			});
		}
	}, [categoryId]);
	const ideaName = categoryId || "new";
	if (loading) {
		return (
			<Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
		);
	}
	if (!pins?.length) {
		return (
			<>
				<h1 style={{ fontWeight: "revert", fontSize: "revert" }}>
					No pins available
				</h1>

				<button
					style={{
						backgroundColor: "white",
						marginTop: "1rem",
						padding: "1.24rem",
						borderRadius: "2px",
						border: "2px solid black ",
					}}
				>
					<Link to="/create-pin">Create {categoryId} Pins</Link>
				</button>
			</>
		);
	}
	return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
