import React, { createRef } from 'react'
import NameCls from './NameCls'

const AnotherFuncParent = () => {

    let nameComponentRef = null
    const setNameComponentRef = (componentRef) => {
        nameComponentRef = componentRef
        if (nameComponentRef !== null) {
            nameComponentRef.focusElement()
        }
    }

    // let nameComponentRef = createRef()
    // if (nameComponentRef.current) {
    //     nameComponentRef.current.focusElement()
    // }
    return (
        <div>
            {/* <Name ref={nameComponentRef} /> */}
            <NameCls ref={setNameComponentRef} />
        </div>
    )
}

export default AnotherFuncParent