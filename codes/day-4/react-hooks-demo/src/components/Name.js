import React, { useEffect } from 'react'

const Name = (props) => {

    //componentDidUpdate
    useEffect(
        () => {
            console.log('[Name] executed always')
            return () => {
                console.log('[Name] always clean up')
            }
        }
    )

    //componentDidUpdate+shouldComponentUpdate
    useEffect(
        () => {
            console.log('[Name] executed when props.nameData is diffeent')
            return () => {
                console.log('[Name] clean up only when props.nameData is diffeent')
            }
        },
        [props.nameData]
    )

    //componentDidMount
    useEffect(
        () => {
            console.log('[Name] executed only one time when mounted')

            //componentWillUnmount
            // return () => {
            //     console.log('[Name] clean up only one time when unmounted')
            // }
        },
        []
    )

    //componentWillUnmount
    useEffect(
        () => {
            return () => {
                console.log('[Name] clean up only one time when unmounted')
            }
        },
        []
    )

    console.log('[Name] rendered')
    return (
        <div>
            Name:&nbsp;
            <input
                type='text'
                value={props.nameData}
                onChange={
                    (e) => {
                        props.nameHandler(e.target.value)
                    }
                } />
        </div>
    )
}

export default Name
