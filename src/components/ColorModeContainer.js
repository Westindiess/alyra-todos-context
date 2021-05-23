import ColorModeSwitcher from "./ColorModeSwitcher"
import { DarkModeContext } from "../context/DMContext"
import { useEffect, useState } from "react"

const ColorModeContainer = ({ children }) => {
	const [darkMode, setDarkMode] = useState(
		() => JSON.parse(localStorage.getItem("my-dark-mode")) || false
	)

	useEffect(() => {
		localStorage.setItem("my-dark-mode", JSON.stringify(darkMode))
	}, [darkMode])

	const modeClass = darkMode ? "bg-dark text-white" : ""

	return (
		<div className={`${modeClass} min-vh-100`}>
			<DarkModeContext.Provider value={darkMode}>
				<ColorModeSwitcher setDarkMode={setDarkMode} />
				{children}
			</DarkModeContext.Provider>
		</div>
	)
}

export default ColorModeContainer
