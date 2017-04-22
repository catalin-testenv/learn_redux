import { connect } from 'react-redux'
import { setIncrease } from '../actions'
import InputNumber from '../components/InputNumber'

const mapStateToProps = (state, ownProps) => ({
  value: state.increase
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(setIncrease(value))
  }
})

const InputNumberIncrease = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputNumber)

export default InputNumberIncrease
