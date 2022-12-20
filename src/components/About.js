import React from "react"

export default function about(prop){

    return(
        <>
        <div style={{textAlign:'center', color:prop.mode==='light'?'black':'white'}}>
            <h3>Hi, This is Chinmay Pardhikar. This is my first site in React.</h3>
        </div>
        </>
    );
}