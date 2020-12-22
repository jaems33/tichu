import React from 'react';
import {connect} from 'react-redux';

const TurnControls: React.FunctionComponent<any> = ({submitHand, increment}) => {
  return (
  <section className="space--s--b">
    <button type="button" className="button space--s--r" onClick={submitHand}>Play Cards</button>
    <button type="button" className="button button--subtle" onClick={increment}>Pass</button>
  </section>)
}

function mapDispatchToProps(dispatch: any){
  return {
    increment: () => dispatch({type: "NEXT_TURN"})
  };
}

export default connect(null, mapDispatchToProps)(TurnControls);