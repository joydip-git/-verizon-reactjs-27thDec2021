import React from "react";
import Introduction from "../introduction/Introduction";
import Welcome from "../welcome/Welcome";

export default function App() {

    const welcomeReactDesign = Welcome()
    const introReatDesign = Introduction()

    const brReactElement = React.createElement('br')

    const mainReactElement = React.createElement(
        'div',
        { id: 'appDiv' },
        [welcomeReactDesign, brReactElement, introReatDesign]
    )

    return mainReactElement
}

/**
 * 
 * <div id='appDiv'>
 *    <p>
 *      Welcome to React JS
 *    </p>
 *    <br/>
 *    <div>
 *      ....
 *    </div>
 * </div>
 */