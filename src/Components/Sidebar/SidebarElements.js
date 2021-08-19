import styled from "styled-components";
import { makeStyles as styles } from "@material-ui/core/styles";
import { Button as button } from "@material-ui/core";

export const SidebarContainer = styled.div`
	margin: 0;
	padding: 0;
`;
export const SidebarWrapper = styled.ul`
	position: fixed;
	margin: 0;
	padding: 0;
	padding-top: 20px;
	height: 500px;
	width: 230px;
	list-style-type: none;
	background-color: #212121;
	scrollbar-width: none;
	overflow-y: scroll;

	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 20px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;
export const SidebarElenents = styled.li`
`;
export const SidebarThing = styled(button)`
	&& {
		display: flex;
		justify-content: flex-start;
		color: white;
		padding: 10px;
		font-size: 11px;
	}

    &&:hover{
        background-color:#313131;
        transition: 0s;
    }
`;

export const Line = styled.hr`
	background-color: #313131;
    height:1px;
    width:200px;
    position: relative;
    right:3px;
    padding-left: 10px;
    border: none;
`;
