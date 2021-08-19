import styled from "styled-components";

export const NavContainer = styled.div`
`;
export const NavWrapper = styled.ul`
	height: 60px;
	display: flex;
	background-color: #212121;
	justify-content: center;
	margin: -10px;
	padding: 0;
	overflow: hidden;
	list-style-type: none;
`;
export const NavElements = styled.li`
	list-style-type: none;
	float: left;
`;
export const NavStuffs = styled.p`
	display: block;
	color: white;
	text-align: center;
	font-size: 22px;
	padding-left: 22px;
	cursor: pointer;

	&:active {
		padding-right: 3px;
		padding-left: 2px;
		margin-left: 12.7px;
		background-color: grey;
		border-radius: 1250px;
	}
`;
export const NavStuffsLogo = styled.p`
	letter-spacing: -1.5px;
	font-size: 22px;
	display: block;
	color: white;
	text-align: center;
	padding-bottom: 5px;
	cursor: pointer;
	position: relative;
	bottom: 3px;
`;
export const NavStuffsSearch = styled.p`
position: relative;
top: 3px;
	display: flex;
	color: white;
	text-align: center;
	padding-left: 15px;
	justify-content: center;
	cursor: pointer;
`;
export const Img = styled.img`
	width: 30px;
	border-radius: 20px;
	cursor: pointer;
`;
export const ImgLogo = styled.img`
	width: 38px;
	border-radius: 20px;
	cursor: pointer;
`;
export const NavRight = styled.div`
	margin-left: auto;
	padding-right: 40px;
	float: right;
`;
export const NavLeft = styled.div`
	margin-right: auto;
	padding-left: 10px;
	float: left;
`;

export const Input = styled.input`
height: 25px;
	width: 500px;
	border: 2px solid #313131;
	background-color: #121212;
	transition: 0.2s ease-in;
	@media screen and (max-width: 1020px) {
		transition: 0.2s ease-in-out;
		width: 350px;
	}
	@media screen and (max-width: 850px) {
		transition: 0.2s ease-in-out;
		width: 200px;
	}
	@media screen and (max-width: 764px) {
		transition: 0.2s ease-in-out;
		width: 100px;
	}

	&::placeholder {
		padding: 12px;
		font-size: 15px;
	}
`;