import React, { useState } from 'react'


function Planel({ title, children }) { 
  const [isAcitive, setIsActive] = useState(false);
  return (
    <div style={{
      width: 400,
      border: '1px solid black',
      padding:10
    }}>
      <h3>{title}</h3>
      {isAcitive ? 
        <p>{children}</p>
        : <button onClick={() => {setIsActive(true)}}>显示</button>
      }
    </div>
  )
}

export default function StateIndependence() {
  return (
    <>
      <h2>哈萨克斯坦，阿拉木图</h2>
      <Planel title='关于'>
      阿拉木图人口约200万，是哈萨克斯坦最大的城市。它在 1929 年到 1997 年间都是首都。
      </Planel>
      <Planel title='词源'>
      这个名字来自于 <span lang="kk-KZ">алма</span>，哈萨克语中“苹果”的意思，经常被翻译成“苹果之乡”。事实上，阿拉木图的周边地区被认为是苹果的发源地，<i lang="la">Malus sieversii</i> 被认为是现今苹果的祖先。
      </Planel>
    </>
  )
}
