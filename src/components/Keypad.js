// Code Keypad Component Here
import React from 'react';

function Keypad (){
    function keyPadPress() {
        console.log('Entering password...');
    }
    return (
        <div>
            <input type="password" onChange={(keyPadPress)}/>
        </div>
    )
}

export default Keypad;