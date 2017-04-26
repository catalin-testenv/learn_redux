import React, { PropTypes } from 'react'

const MyComp = ({ counter, isOdd, onClick }) => {

    return(
        <p onClick={() => onClick()} style={{color: isOdd ? 'red' : 'black'}}>
            {counter}
        </p>
    )
}

MyComp.propTypes = {
  counter: PropTypes.number.isRequired
}

export default MyComp
