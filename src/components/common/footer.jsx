import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">About</Link>
						</li>
						{/* <li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li> */}
						<li className="footer-nav-link-item">
							<Link to="/articles">Articles</Link>
						</li>
						<li className="footer-nav-link-item">
						<Link onClick={()=>window.open("https://drive.google.com/file/d/1yR_huGpOKWUzgIxAHy9-x8qJ4BG7IHQo/view?usp=sharing")}>Resume</Link>
						</li>
						{/* <li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li> */}
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
