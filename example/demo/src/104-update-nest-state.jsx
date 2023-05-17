import { useState } from "react"
import { changeTravelPlan } from "./palaces-data-change"

function PlaceTree({ id, placesById, parentId, onComplete }) { 
  const place = placesById[id];
  const childrenIds = place.childIds;
  return (
    <li>
      {place.title}
      <button
        onClick={() => {
          onComplete(id,parentId)
        }}  
      >Complete</button>
      {childrenIds.length>0&&
        <ol>
          {childrenIds.map(ele=>
            <PlaceTree
              key={ele}
              id={ele}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />  
          )}
        </ol>
      }
    </li>
  )
}
export default function TravelPlan() {
  const[plan, setPlan] = useState(changeTravelPlan);
  const root = plan[0];
  const childrenIds = root.childIds;
  function handleComplete(id, parentId) {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(ele=>id!==ele)
    }
    setPlan({
      ...plan,
      [parentId]:nextParent
    });
  }
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {childrenIds.map(ele=>
          <PlaceTree
            key={ele}
            id={ele}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        )}
      </ol>
    </>
  )
}