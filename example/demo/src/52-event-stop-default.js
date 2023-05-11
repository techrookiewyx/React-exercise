import React from 'react'

export default function EventStopDef() {
  return (
    <form onSubmit={e=>{
      e.preventDefault();
      alert("提交表单")
    }}>
      <input type='text' />
      <button>提交</button>
    </form>
  )
}
