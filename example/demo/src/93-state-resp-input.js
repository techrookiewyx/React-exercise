import {useState} from 'react'

export default function StateRespInput() {
  const [textContent, setTextContent] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');
  if(status==='success'){
    return <h1>That's right!</h1>
  }
  function handleTextChange(e) {
    setTextContent(e.target.value);
  }
  async function handleSubmit(e) { 
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(textContent);
      setStatus('success');
    } catch (err) { 
      setError(err);
      setStatus('typing')
    }
  }
  function submitForm(content){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          let whenError = content.toLowerCase()!=='lima'
          if (whenError) {
            reject(new Error('Good guess but a wrong answer. Try again!'));
          } else {
            resolve();
          }
        },1500)
    })
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleTextChange}
          value={textContent}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={textContent.length===0 || status==='submitting'}>
          Submit
        </button>
        {error !== null &&
          <p style={{color:'red'}}>{error.message}</p>
        }
      </form>
    </>
  )
}
