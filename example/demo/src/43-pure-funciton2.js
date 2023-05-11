import React from "react";

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}


export default function TeaGathering() {
  let cups = [];
  for (let i  = 1; i <= 12; i++) {
    cups.push(<Cup guest={i} key={i} />) 
  }
  return (
    <React.StrictMode>
      {cups}
    </React.StrictMode>
  )
}