import { useState } from 'react'
import { changeTravelPlan } from './palaces-data-change'

function PlaceTree({ id, placesById }) {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      {childIds.length > 0 &&
        <ol>
          {childIds.map(ele=>
            <PlaceTree
              key={ele}
              id={ele}
              placesById={placesById}
            />  
          )}
        </ol>
      }
     </li>
  )
}
export default function AvoidDeepState() {
  const [plan, setPlan] = useState(changeTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <div>
      <ol>
        {planetIds.map(ele =>
          <PlaceTree
            key={ele}
            id={ele}
            placesById={plan}
          />
       )}
      </ol>
    </div>
  )
}
