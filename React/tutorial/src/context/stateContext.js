import {createContext, useContext, useState} from "react";

const StateContext = createContext();


export default function ContextProvider({children}) {
	const [loader, setLoader] = useState(false);

	return (
		<StateContext.Provider
			value={{
				loader, setLoader
			}}
		>
			{children}
			{loader && 
			<div style={{
				position: "absolute",
				top: 0, left: 0,
				width: "100vw", height: "100vh",
				background: "yellow",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}>
				<span>Loading...</span>
			</div>}
		</StateContext.Provider>	
	)
}

export function useStateContext() {
	return useContext(StateContext)
}