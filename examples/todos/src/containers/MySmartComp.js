import { connect } from 'react-redux'
import { increaseCounter } from '../actions'
import MyComp from '../components/MyComp'

const mapStateToProps = (state, ownProps) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
      dispatch(increaseCounter(ownProps.increase||1))
  }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    console.log('MySmartComp stateProps', stateProps, 'dispatchProps', dispatchProps, 'ownProps', ownProps)
    return {...stateProps, ...dispatchProps}
}

const MySmartComp = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(MyComp)

export default MySmartComp
