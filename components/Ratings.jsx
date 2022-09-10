import React from 'react'
import PropTypes from 'prop-types'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const Rating = ({value, text, color}) => {

    return (
    <div className="rating ">
   
        <span>
            <i style={{ color: color }} className={value >= 1 ?  'BsStarFill' : value >= 0.5 ? 'BsStarHalf': 'BsStar'} />
           
      
        </span>

        <span>
            <i style={{ color: color }} className={value >= 2 ?  'BsStarFill' : value >= 1.5 ? 'BsStarHalf': ' BsStar'} />
        </span>
        <span>
            <i style={{ color: color }} className={value >= 3 ?  'BsStarFill' : value >= 2.5 ? 'BsStarHalf': ' BsStar'} />
        </span>
        <span>
            <i style={{ color: color }} className={value >= 4 ?  'BsStarFill' : value >= 3.5 ? 'BsStarHalf': ' BsStar'} />
        </span>

        <span>
            <i style={{ color: color }} className={value >= 5 ?  'BsStarFill' : value >= 4.5 ? 'BsStarHalf': ' BsStar'} />
        </span>
        <span>
            {text && text}
        </span>
    </div>
    )
}

export default Rating
Rating.defaultProps = {
    color: "#f8e825"
}

//type checks our props
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    // text: PropTypes.string.isRequired,
    color: PropTypes.string
}
