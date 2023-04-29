import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Views
import Home from "./views/home.jsx";
import injectContext, { Context } from "./store/appContext";


//Components
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import Form from "./views/form.jsx";
import Contact from "./views/contact.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	// const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);

	return (
		<div onClick={(e) => actions.ranClick(e)} id="main" >
			<BrowserRouter >
				<Navbar />
				<div className="container-xxl hv-100" id="main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/form" element={<Form />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);