import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


//Views
import { Home } from "./views/home";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";
import Table from "./views/table";
import Detials from "./views/details";


//Components
import  Navbar  from "./component/navbar";
import  Footer  from "./component/footer";
import Todo from "./views/todo";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div id="main">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<div className="container-xxl hv-100">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/todo" element={<Todo
								check={checkIcon}
								getInput={inputValue}
								setInput={setInputValue}
								press={keyPress}
								trash={trashIcon}
								setTodo={setTodos}
							>
								{todos}
							</Todo>} />
						<Route path="/table" element={<Table />} />
						<Route path="/detials" element={<Detials />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					</div>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);