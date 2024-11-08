import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";

export default function App() {
	const [showLogin, setShowLogin] = useState(false)
	return (
		<BrowserRouter>
			{showLogin ? <LoginPopup setShowLogin = {setShowLogin} /> : <></>}
			<Header setShowLogin = {setShowLogin} />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}