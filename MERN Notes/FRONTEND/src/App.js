import React from 'react'
import "./styles/globals.css";
import ContextProvider from "./context/stateContext"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import * as Pages from "./pages";
import Layout from './components/Layout/Layout';

function App() {
    return (
        <Router>
      	    <ContextProvider>
                <Layout>
                    <Routes>
                        <Route
                            exact path='/'
                            element={<Pages.Home />}
                        />
                        <Route
                            exact path='/login'
                            element={<Pages.Login />}
                        />
                        <Route
                            exact path='/register'
                            element={<Pages.Register />}
                        />
                        <Route
                            exact path='/add'
                            element={<Pages.Add />}
                        />
                        <Route
                            exact path='/edit/:id'
                            element={<Pages.Edit />}
                        />
                        <Route
                            path='*'
                            element={<Pages.Error404 />}
                        />
                    </Routes>
                </Layout>
            </ContextProvider>
        </Router>
    )
}

export default App