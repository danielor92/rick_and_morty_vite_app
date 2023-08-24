import SearchBar from "./SearchBar";
import styleNav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar({ onSearch, onRandomize }) {
	return (
		<div className="pre-navbar">
			<div className="buttons-nav">
				<NavLink
					to={"/home"}
					className={({ isActive }) =>
						isActive ? styleNav.active : styleNav.disable
					}>
					<button className="button-home">Home</button>
				</NavLink>
				<NavLink
					to={"/about"}
					className={({ isActive }) =>
						isActive ? styleNav.active : styleNav.disable
					}>
					<button className="button-about">About</button>
				</NavLink>
			</div>
			<div>
				<SearchBar onSearch={onSearch} onRandomize={onRandomize} />
			</div>
		</div>
	);
}

export default NavBar;
