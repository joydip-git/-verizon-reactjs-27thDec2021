import React from 'react'
import logError from '../services/logerror'
import handleError from './handleError'

let Hero = props => {
    const { heroName } = props

    if (heroName === 'Joker') {
        throw new Error('Joker is not a hero')
    }

    return <span>{heroName}</span>
}

Hero = handleError(Hero, logError)
export default Hero
