import React from "react";
import Menubar from "./Components/menuBar";

export function MainView(){
    return(
        <div>
            <Menubar/>
            <main>
                
            </main>
            <footer className="bg-white">
                <h1>
                    Info contact
                </h1>
            </footer>
        </div>
    )
}

export default MainView