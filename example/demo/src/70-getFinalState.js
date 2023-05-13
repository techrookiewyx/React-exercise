export default function getFinalState(baseState, queue) {
  let finalState = baseState;
  queue.forEach(ele=>{
    if(typeof ele=== 'function'){
      finalState = ele(finalState);
    }
    else{
      finalState=ele;
    } 
  })
  return finalState;
}
