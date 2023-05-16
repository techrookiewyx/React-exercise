import React from 'react'

export default function StateImitateSuc() {
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
        <textarea disabled={status==='submitting'} />
        <br />
        <button disabled={status==='empty' || status==='submitting'}>
          Submit
        </button>
        {status === 'error' &&
          <p>Good guess but a wrong answer. Try again!</p>
        }
      </form>
    </div> 
  )
}
