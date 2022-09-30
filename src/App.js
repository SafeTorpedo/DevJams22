import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import "./index.css";
import Canvas from "./components/Canvas";

function App() {
    return (
        <div>
            <Navbar />
            <div className="login min-h-full -mt-5 h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route
                                path="/dashboard"
                                element={<Canvas width={800} height={300} />}
                            />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default App;
