import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Management from "./pages/Management";
import ClinicalCourses from "./pages/ClinicalCourses";
import Technology from "./pages/Technology";
import HealthCarePractice from "./pages/HealthCarePractice";
import Partner from "./pages/Partner";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
	const [showLogin, setShowLogin] = useState(false)
	return (
		<BrowserRouter>
			{showLogin ? <LoginPopup setShowLogin = {setShowLogin} /> : <></>}
			<Header setShowLogin = {setShowLogin} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/coures" element={<Courses />} />
				<Route path="/clinical-courses" element={<ClinicalCourses />} />
				<Route path="/technology" element={<Technology />} />
				<Route path="/management" element={<Management />} />
				<Route path="/healthcare-practice-excellence" element={<HealthCarePractice />} />
				<Route path="/partner" element={<Partner />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	)
}