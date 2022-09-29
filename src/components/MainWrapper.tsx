import {Route, Routes} from "react-router-dom";
import {ThemePage} from "./HomeWork/ThemePage";
import {ApiCORSPage} from "./HomeWork/apiCORSPage";
import {HomePage} from "./HomePage";


export function MainWrapper() {


    return (
        <div style={{display: "grid", justifyItems: "center"}}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/theme" element={<ThemePage/>}/>
                <Route path="/apiCORS" element={<ApiCORSPage/>}/>
            </Routes>
        </div>
    )
}