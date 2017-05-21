import React from 'react';
import { connect } from 'react-redux';
import { toggleCounter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  value: state.counter.value,
  started: state.counter.started
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(toggleCounter())
});

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.started ? 'stop' : 'start'}</button>
      <span>{props.value}</span>
    </div>
  );
});

export default Counter;
