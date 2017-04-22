import React from 'react'
import MySmartComp from '../containers/MySmartComp'
import InputNumberIncrease from '../containers/InputNumberIncrease'
import { connect } from 'react-redux'


let App = (props) => {
    const {increase} = props;
    return (
      <div>
        <MySmartComp increase={increase} />
        <InputNumberIncrease />
      </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
    increase: state.increase
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default App
