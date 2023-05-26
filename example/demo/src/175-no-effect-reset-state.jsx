import { useState } from "react";
import { ButtonList } from "./175-button-list";
import { EditForm } from "./175-edit-form";
export default function NoEffectReState(){ 
  const [allP, setAllP] = useState(initialContacts);
  const [selectId, setSelectId] = useState(0);
  const selectP = allP[selectId];
  function handleSave(obj) { 
   setAllP(allP.map(ele => {
    if (ele.id === obj.id) {
      return obj
    } else { 
      return ele
    }
    }))
  }
  return (
    <div>
      <ButtonList conts={allP} selectId={selectId} onSelect={ e=>{setSelectId(e)}} />
      <br/>
      <EditForm key={selectId} selectP={selectP} onSave={handleSave} />
    </div>
  )
}
const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];