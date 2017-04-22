import React from 'react'
import MySmartComp from './containers/MySmartComp'
import InputNumberIncrease from './containers/InputNumberIncrease'
import { connect } from 'react-redux'


let App = () => {
    return (
      <div>
        <MySmartComp />
        <InputNumberIncrease />
      </div>
    )
}

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default App
