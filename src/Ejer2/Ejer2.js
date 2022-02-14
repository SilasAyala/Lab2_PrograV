import React, {useState} from "react";

import './Ejer2.css'

const Ejer2 = (props) => {
    
    const [cont, setCont] = useState(0);


    return(
        <div className="main-nav">
            <h1>
                Me han clickeado {cont} veces
            </h1>
            <div className="div-button">
                <button onClick={() => setCont(cont + 1)}>
                    Hacer Click!
                </button> 
            </div>
            
        </div>
        
    );
}

export default Ejer2;