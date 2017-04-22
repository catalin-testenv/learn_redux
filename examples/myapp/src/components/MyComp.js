import React, { PropTypes } from 'react'

const MyComp = ({ counter, onClick }) => {

    return(
        <p onClick={() => onClick()}>
            {counter}
        </p>
    )
}

MyComp.propTypes = {
  counter: PropTypes.number.isRequired
}

export default MyComp
