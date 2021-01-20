import React from 'react';
import { Link} from 'react-router-dom';

export default function Button(props) {
    switch(props.action){
           case "redirect":
               console.log("BOOMsd!!");
               return  (<Link to={props.url}>
                            <button style={{"color": "white", "background": " #4482DF", "borderRadius":"1rem" , "border" : "none", "padding": "0.7rem"}}>{props.text}</button>
                        </Link>
                        );
    
            default:
                return <button>{props.text}</button>
    }
 
}
