import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
	background: linear-gradient(to left, #000000 30% , #111111);
	height: 100px;
	display: flex;
	position:sticky;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 400;
    font-family: EuclidCircularB,-apple-system,BlinkMacSystemFont,Helvetica,Arial;
	top: 0;
	z-index: 50;
	width: 100%;
    border-bottom: 1px solid;
    border-image: linear-gradient(to left, #000000 50%,#6400e7 , #d40073 ) 1;
	border-left: 0;
	border-right: 0;
	border-top: 0;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content:end;
	height: 80px;
`;

export const NavLogo = styled(Link)`
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
`;

export const NavIcon = styled.img`
	width: 6rem;

	@media screen and (max-width: 1440px) and (min-width: 1240px) {
		margin-right:37rem;
	}
	@media screen and (max-width: 1239px) and (min-width: 1024px) {
		margin-right:20rem;
	}
	@media screen and (max-width: 1023px) and (min-width: 960px) {
		margin-right:20rem;
	}
	@media screen and (max-width: 961px) and (min-width: 769px) {
		margin-right:40rem;
	}
	@media screen and (max-width: 768px) and (min-width: 591px) {
		margin-right:28rem;
	}
	@media screen and (max-width: 590px) and (min-width: 429px) {
		margin-right:18rem;
	}
	@media screen and (max-width: 428px) and (min-width: 390px){
		margin-right:16rem;
	}
	@media screen and (max-width: 389px) and (min-width: 320px){
		margin-right:12rem;
	}
`;
export const MobileIcon = styled.div`
	display: none;
	z-index: 50;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 2rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	color: #fff;
    display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 30rem;
		position: absolute;
		padding-top: 15%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #111111;
		border-radius:0rem 0rem 1rem 1rem;
	}

	@media screen and (max-width: 590px) {
		height:28rem;
		padding-top: 20%;
	}

	@media screen and (max-width: 428px) {
		height:28rem;
		padding-top: 25%;
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	margin-left:3rem;
	cursor: pointer;
	@media screen and (max-width: 960px) {
		border-bottom: 0.1px solid #6400e7;
		border-image: linear-gradient(to left, #111111 40%, #6400e7 ,#d40073) 1;
		border-left: 0;
		border-right: 0;
		border-top: 0;
		margin-left:0rem;
		width: 100%;
		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(LinkScroll)`
	color: hsla(2,0%,100%,.5);
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	
	&.active {
		text-shadow: 0 0 20px #d40073, 0 0 15px #d40073, 0 0 10px #6400e7;
		@media screen and (min-width: 960px) {
			border-bottom: 1px solid #6400e7;
			border-image: linear-gradient(to left, #000000 , #6400e7) 1;
		}
	}
	&:hover {
		color: #c9bcda;
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;