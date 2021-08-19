import React from "react";
import {
	SidebarContainer,
	SidebarElenents,
	SidebarThing,
	SidebarWrapper,
    Line
} from "./SidebarElements";
import { AiFillHome, AiFillClockCircle, AiFillLike } from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import {
	RiHistoryFill,
	RiVideoFill,
	RiArrowDropDownLine,
} from "react-icons/ri";

const Sidebar = () => {
	return (
		<>
			<SidebarContainer>
				<SidebarWrapper>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<AiFillHome
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Home
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<FaCompass
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Explore
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<MdSubscriptions
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Subscriptions
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<MdVideoLibrary
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Library
						</SidebarThing>
					</SidebarElenents>
                    <Line/>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<RiHistoryFill
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							History
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<RiVideoFill
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Your videos
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<AiFillClockCircle
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Watch Later
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<AiFillLike
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Liked videos
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<RiArrowDropDownLine
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Show more
						</SidebarThing>
					</SidebarElenents>
                    <Line/>
                    <SidebarElenents>
						<SidebarThing fullWidth={true}>
							<AiFillHome
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Home
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<FaCompass
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Explore
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<MdSubscriptions
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Subscriptions
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<MdVideoLibrary
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Library
						</SidebarThing>
					</SidebarElenents>
                    <Line/>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<RiHistoryFill
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							History
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<RiVideoFill
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Your videos
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<AiFillClockCircle
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Watch Later
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<AiFillLike
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Liked videos
						</SidebarThing>
					</SidebarElenents>
					<SidebarElenents>
						<SidebarThing fullWidth={true}>
							<RiArrowDropDownLine
								style={{
									paddingRight: "30px",
									paddingLeft: "20px",
									fontSize: "20px",
								}}
							/>
							Show more
						</SidebarThing>
					</SidebarElenents>
                    <Line/>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
