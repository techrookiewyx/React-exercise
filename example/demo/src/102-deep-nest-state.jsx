import { initialTravelPlan } from "./places-data";
import { useState } from "react";

function PlaceTree({place}){
  const childPlaces = place.childPlaces;
  return(
    <li>
      {place.title}
      {childPlaces.length > 0 &&
        <ol>
          {childPlaces.map(ele =>
            <PlaceTree key={ele.id} place={ele}/>
          )}
        </ol>
      }
    </li>
  )
}
export default function DeepNestState() {
  const [plan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;
  return (
    <div>
      <h2>Places to visit</h2>
      <ol>
        {planets.map(ele =>
          <PlaceTree key={ele.id} place={ele}/>
        )}
      </ol>
    </div>
  )
}
