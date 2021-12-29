import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ heroName }) => {
    let design;
    if (heroName === 'Joker') {
        throw new Error('Joker is not a hero')
    }
    design = (
        <div>
            Hero:&nbsp;{heroName}           
        </div>
    )
    return design
}

Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}

export default Hero

/**
 * const Hero = ({ heroName }) => {
    let design;
    try {
        if (heroName === 'Joker') {
            throw new Error('Joker is not a hero')
        }
        design = (
            <div>
                Hero:&nbsp;{heroName}
            </div>
        )
    }
    catch (err) {
        design = <span>{heroName} has caused error</span>
    }
    return design
}
 */
