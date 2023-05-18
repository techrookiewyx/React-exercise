import React from 'react'
import { SpecificExprot } from './15-exprot'


export function Test(){
  return (
     <p style={{color:"red"}}>我是默认导出中的具名导出</p>
   )
}
export default function DefExprot() {
  return (
    <div>
      <h2>我是默认导出</h2>
      <p>下面是具名导入的内容:</p>
        <SpecificExprot />
        <SpecificExprot />
        <SpecificExprot />
        <Test/>
    </div>
  )
}
