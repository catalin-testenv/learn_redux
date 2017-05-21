import React from 'react';
import { connect } from 'react-redux';
import { setUnit } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  value: state.unit
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (e) => {
    dispatch(setUnit(Number(e.target.value)));
  }
});

const Unit = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  return (
      <input type="text" value={props.value} onChange={props.onChange} />
  );
});

export default Unit;
