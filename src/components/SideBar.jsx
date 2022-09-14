import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<Stack
			direction="row"
			sx={{
				overflow: "auto",
				height: { sx: "auto", md: "92%" },
				flexDirection: { md: "column" },
				minWidth: "200px",
			}}
		>
			{categories.map((category) => (
				<button
					className="category-btn"
					onClick={() => {
						setSelectedCategory(category.name);
					}}
					style={{
						background: category.name === selectedCategory && "#fc1503",
						color: "#fff",
						margin: "5px",
					}}
					key={category.name}
				>
					<span style={{ color: category.name === selectedCategory ? "#fff" : "red", marginRight: "15px" }}>{category.icon}</span>
					<span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>{category.name}</span>
				</button>
			))}
		</Stack>
	);
};

export default SideBar;
