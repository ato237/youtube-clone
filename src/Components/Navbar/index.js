import React from "react";
import {
	NavContainer,
	NavWrapper,
	NavStuffsSearch,
	NavStuffsLogo,
	NavElements,
	NavStuffs,
	Img,
	ImgLogo,
	NavLeft,
	NavRight,
	Input,
} from "./NavbarElements";
import { BiMicrophone, BiVideoPlus } from "react-icons/bi";
import { IoAppsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import Pic from "../Images/tonyProfilePic.jpg";
import Pic2 from "../Images/logoY.png";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
	return (
		<>
			<NavContainer>
				<NavWrapper>
					<NavLeft>
						<NavElements>
							<NavStuffs>
								<AiOutlineMenu style={{fontWeight:20}}/>
							</NavStuffs>
						</NavElements>
						<NavElements>
							<NavStuffs>
								<ImgLogo src={Pic2} alt="logo.jpg" />
							</NavStuffs>
						</NavElements>
						<NavElements>
							<NavStuffsLogo>YouTube</NavStuffsLogo>
						</NavElements>
                        </NavLeft>
						<NavElements>
							<NavStuffsSearch>
								<Input type="/" placeholder="Search" />
								<BiSearch
									style={{
										backgroundColor: "#313131",
										padding: "7.5px",
										paddingRight: "30px",
                                        paddingLeft: "30px"
									}}
								/>
							</NavStuffsSearch>
						</NavElements>
						<NavElements>
							<NavStuffs>
								<BiMicrophone />
							</NavStuffs>
						</NavElements>
					<NavRight>
						<NavElements>
							<NavStuffs>
								<BiVideoPlus />
							</NavStuffs>
						</NavElements>
						<NavElements>
							<NavStuffs>
								<IoAppsOutline />
							</NavStuffs>
						</NavElements>
						<NavElements>
							<NavStuffs>
								<IoMdNotificationsOutline />
							</NavStuffs>
						</NavElements>
						<NavElements>
							<NavStuffs>
								<Img src={Pic} alt="tony.jpg" />
							</NavStuffs>
						</NavElements>
					</NavRight>
				</NavWrapper>
			</NavContainer>
		</>
	);
};

export default Navbar;
