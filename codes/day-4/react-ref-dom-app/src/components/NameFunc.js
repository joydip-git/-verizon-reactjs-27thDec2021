import React, { forwardRef } from 'react'

let NameFunc = (props, reference) => {
    return (
        <div>
            Name:&nbsp;<input type='text' ref={reference} />
        </div>
    )
}

NameFunc = forwardRef(NameFunc)
export default NameFunc

/**
 * React.createElement('div',null,[,,])
 * 
 * {
 *   type:'div',
 *   key:null,
 *   ref:null,
 *   props:{
 *     id:'valDiv',
 *     style:{width:'50px'}
 *     numData:0,
 *     children:[,,]
 *   }
 * }
 */

