import React from 'react'

export default function StateImitateEmp() {
  let status = 'empty';
  if(status==='success'){
    return <h1>That's right!</h1>
  }
  return (
    <div>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea />
        <br />
        <button>
          Submit
        </button>
      </form>
    </div> 
  )
}
