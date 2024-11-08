import { useState } from 'react'
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = ({ containerStyles }) => {
	const [isActive, setisActive] = useState("home")
	const [showPrograms, setShowPrograms] = useState(false)

	return (
		<nav className={`${containerStyles}`}>
			<a href={'#'} onClick={() => setisActive("home")} className={isActive === "home" ? "active-link" : ""}><div className='flexCenter gap-x-1'><MdHomeFilled />Home</div></a>
			<a href={'#about'} onClick={() => setisActive("about")} className={isActive === "about" ? "active-link" : ""}><div className='flexCenter gap-x-1'><MdCategory />About</div></a>
			<div 
				className={`relative ${isActive === "courses" ? "active-link" : ""}`}
				onMouseEnter={() => setShowPrograms(true)}
				onMouseLeave={() => setShowPrograms(false)}
			>
				<a 
				href={'#courses'} 
				onClick={() => setisActive("courses")}
				className='flexCenter gap-x-1 cursor-pointer'
				>
					<MdShop2 />Programs<IoIosArrowDown />
				</a>
				{showPrograms && (
				<div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-2 z-10">
					<a href={'#clinical-courses'} className="block p-2" onClick={() => setisActive("clinical-courses")}>Clinical Courses</a>
					<a href={'#technology'} className="block p-2" onClick={() => setisActive("technology")}>Technology</a>
					<a href={'#management'} className="block p-2" onClick={() => setisActive("management")}>Management</a>
					<a href={'#healthcare-practice-excellence'} className="block p-2" onClick={() => setisActive("healthcare-practice-excellence")}>Healthcare Practice Excellence</a>
				</div>
				)}
			</div>
			<a href={'#partners'} onClick={() => setisActive("partners")} className={isActive === "partners" ? "active-link" : ""}><div className='flexCenter gap-x-1'><MdContacts />Partners</div></a>
			<a href={'#blog'} onClick={() => setisActive("blog")} className={isActive === "blog" ? "active-link" : ""}><div className='flexCenter gap-x-1'><MdContacts />Blog</div></a>
			<a href={'#contact'} onClick={() => setisActive("contact")} className={isActive === "contact" ? "active-link" : ""}><div className='flexCenter gap-x-1'><MdContacts />Contact</div></a>
		</nav>
	)
}

export default Navbar
