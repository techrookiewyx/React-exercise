import getFinalState from "./70-getFinalState";
function increment(n) { 
  return n + 1;
}
increment.toString = () => 'n=>n+1';
function TestCase({ baseState, queue, expected }) { 
  const res = getFinalState(baseState,queue);
  return (
    <div>
      <p>初始 state： <b>{baseState}</b></p>
      <p>队列 state： <b>[{queue.join(', ')}]</b></p>
      <p>预期结果 state： <b>{expected}</b></p>
      <p style={{color:res===expected?'green':'red'}}>你的结果： <b>{res}</b></p>
    </div>
  )
}
export default function UpdateQueue(){
  return (
    <>
      <TestCase
        baseState={0}
        queue={[1,1,1]}
        expected={1}
      /> <hr/>
      <TestCase
         baseState={0}
        queue={[
          increment,
          increment,
          increment]}
         expected={3}
      /> <hr/>
      <TestCase
         baseState={0}
         queue={[
           5,
           increment,
         ]}
         expected={6}
      /> <hr/>
      <TestCase
          baseState={0}
          queue={[
            5,
            increment,
            42,
          ]}
          expected={42}
      />
    </>
  )
}