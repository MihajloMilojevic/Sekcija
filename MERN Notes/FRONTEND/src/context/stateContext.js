/* eslint-disable react-hooks/exhaustive-deps */
import {createContext, useContext, useEffect, useState} from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import {Loader} from "../components";

const StateContext = createContext();


export default function ContextProvider({children}) {
	const searchParams = useSearchParams();
	const navigate = useNavigate();
	const location = useLocation();
	
	const [showLoader, setShowLoader] = useState(true);
	const [user, setUser] = useState(null);

	async function ShowMe() {
		try {
			setShowLoader(true);
			const res = await fetch(`/api/users/showme`);
			const json = await res.json();
			if(!json.ok) throw new Error(json.message);
			setUser(json.user);
			setTimeout(() => {
				setShowLoader(false);
				let route = searchParams[0].get("route");
				if(route)
					navigate(route);
				else
					navigate("/")
			}, 0.5 * 1000);
		} catch (error) {
			console.error(error);
			setTimeout(() => {
				setShowLoader(false);
				navigate("/login");
			}, 0.5 * 1000);
		}
	}

	useEffect(() => {ShowMe(); console.log("????");}, []);

	useEffect(() => {
		if(user || location.pathname === "/login" || location.pathname === "register") return;
		console.log("CHANGE");
		ShowMe()
	}, [location.pathname]);

	return (
		<StateContext.Provider
			value={{
				user, setUser,
				showLoader, setShowLoader
			}}
		>
			<Loader show={showLoader} />
			{children}
		</StateContext.Provider>	
	)
}

export function useStateContext() {
	return useContext(StateContext)
}

