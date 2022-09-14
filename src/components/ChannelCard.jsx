import { Link } from "react-router-dom";
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoChannelTitle, demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channel, channelId, marginTop }) => {
	console.log(channel);
	console.log(channelId);
	return (
		<Box
			sx={{
				boxShadow: "none",
				borderRadius: "20px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: { md: "320px", xs: "356px" },
				margin: "auto",
				marginTop: marginTop,
			}}
		>
			<Link to={`/channel/${channel?.id?.channelId || channel?.id}`}>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						textAlign: "center",
						color: "#fff",
					}}
				>
					<CardMedia
						image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
						alt={channel?.snippet?.title}
						sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: 2, border: "1px solid #e3e3e3" }}
					/>
					<Typography variant="h6">
						{channel?.snippet?.title || demoChannelTitle}
						<CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
					</Typography>
					{channel?.statistics?.subscriberCount && (
						<Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
							{parseInt(channel?.statistics?.subscriberCount).toLocaleString()} SUBSCRIBERS
						</Typography>
					)}
				</CardContent>
			</Link>
		</Box>
	);
};

export default ChannelCard;
