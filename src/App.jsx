import { Route, Routes } from "react-router-dom";
import Navbar from "./components/component.navbar";
import Home from "./pages/home.page";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-[90%] mx-auto py-6">
                {/* Routing */}
                <Routes >
                    <Route element={<Home />} path="/" />
                </Routes>
            </div>

        </>
    )
}

export default App;