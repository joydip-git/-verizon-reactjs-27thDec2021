import React, { Component, createRef } from 'react'
import NameCls from './NameCls'
import NameFunc from './NameFunc';

export default class AnotherClsParent extends Component {

    constructor() {
        super()
        //this.nameComponentRef = createRef()
        this.nameClsComponentRef = null;
        this.nameFuncComponentInputRef = createRef()
    }

    setClsComponentRef = (componentRef) => {
        this.nameClsComponentRef = componentRef
    }

    render() {
        return (
            <div>
                {/* <Name ref={this.nameComponentRef} /> */}
                Name Class component:<br />
                <NameCls ref={this.setClsComponentRef} />
                <br />
                <br />
                Name Functional component:<br />
                <NameFunc ref={this.nameFuncComponentInputRef} x={10} />
            </div>
        )
    }
    componentDidMount() {
        // this.nameComponentRef.current.focusElement()
        //this.nameComponentRef.focusElement()
        this.nameFuncComponentInputRef.current.focus()
    }
}



