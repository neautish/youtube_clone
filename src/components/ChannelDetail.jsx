import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);

	const { id } = useParams();

	console.log(channelDetail, videos);

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
			setChannelDetail(data?.items[0]);
		});
		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
			setVideos(data?.items);
		});
	}, [id]);

	const loading = <p style={{ color: "#fff" }}>Loading...</p>;

	if (!channelDetail || !videos) return loading;

	return (
		<Box minHeight="95vh">
			<Box>
				<div
					style={{
						minHeight: "250px",
						backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl}=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj)`,
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}
				/>
				<ChannelCard channel={channelDetail} marginTop="-93px" />
			</Box>
			<Box px={2}>
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
