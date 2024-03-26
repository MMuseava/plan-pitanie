// import React from "react";
// import { useTranslation } from "react-i18next";

// import "./navBar.style.css";

// const NavBar = () => {
// 	const { t, i18n } = useTranslation();

// 	return (
// 		<div>
// 			<nav>
// 				<ul>
// 					<li>
// 						<a href="#">{t("hello")}</a>
// 					</li>
// 					<li>
// 						<a href="#">Советы</a>
// 					</li>
// 					<li>
// 						<a href="#">Дыхание</a>
// 					</li>
// 					<li>
// 						<a href="#">План Питание</a>
// 					</li>
// 				</ul>
// 				<button onClick={() => i18n.changeLanguage("ru")}>ru</button>
// 			</nav>
// 		</div>
// 	);
// };

// export default NavBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function CollapsibleExample() {
	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						<NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
