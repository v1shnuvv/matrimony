
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './App'
import Page1 from "./Login"
import Page2 from "./Reg"
import Page3 from "./Page"

export default function Navigation(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Login" element={<Page1/>}></Route>
            <Route path="/Register" element={<Page2/>}></Route>
            <Route path="/Page" element={<Page3/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}