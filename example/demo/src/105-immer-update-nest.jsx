import { useImmer } from "use-immer";
import { changeTravelPlan } from "./palaces-data-change";

function PlaceTree({ id, parentId, placesById, onComplete }) {
  const place = placesById[id];
  const childrenIds = place.childIds;
  return (
    <li>
      {place.title}
      <button onClick={() => {
        onComplete(id,parentId)
      }}>
        Complete
      </button>
      {childrenIds.length>0 && 
        <ol>
          {childrenIds.map(ele =>
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

export default function ImmerTravelPlan() {
  const [plan, updatePlan] = useImmer(changeTravelPlan);
  function handleComplete(id, pId) { 
    updatePlan(draft => {
      const parent = draft[pId];
      parent.childIds = parent.childIds.filter(ele => id !== ele);
      deleteAllCilid(id);
      function deleteAllCilid(id) {
        const place = draft[id];
        place.childIds.forEach(deleteAllCilid);
        delete draft[id];
      }
    })
  }
  const root = plan[0];
  const childrenIds = root.childIds;
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