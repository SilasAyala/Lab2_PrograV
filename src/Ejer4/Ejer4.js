import React, {useState} from "react";

import './Ejer4.css'



const Ejer4 = (props) => {
const [inputText, setInputText] = useState('');

const itemList = ['lorem ','ipsum ','dolor ','sit ','amet ','consectetuer ','adipiscing ','elit ','Donec ','odio ','Quisque ','volutpat ','mattis ','eros. ','Nullam ','malesuada ','erat ','ut ','turpis ','Suspendisse ','urna ','nibh ','viverra ','non ','semper ','suscipit ','posuere ','a ','pede '];

const textChangeHandler = (event) => {
   setInputText(console.log(event.target.value));
}



    return(
       <div>
            <div>
                <input type="text" value={inputText} onChange={textChangeHandler} placeholder="Ingrese una palabra" />
            </div>
            <div>
               <a>{itemList}</a>
            </div> 
        </div>
       
    );
}

export default Ejer4;