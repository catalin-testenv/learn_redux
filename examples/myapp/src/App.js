import React from 'react';
import { connect } from 'react-redux';
import Unit from './components/Unit';
import Counter from './components/Counter';


let App = () => {
    return (
      <div>
          <Unit />
          <Counter />
      </div>
    );
};

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;
