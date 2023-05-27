import { useSelectOptions } from "./185-useSelectOptions";


export default function EffectAlone() {
  const [listPlent, plantId, setPlantID] =
    useSelectOptions('/planets');
  const [listPlace, placeId, setPlaceId] =
    useSelectOptions(plantId ? `/planets/${plantId}/places` : null);
  return (
    <>
      <label>
        Pick a planet:{' '}
        <select
          value={plantId}
          onChange={e=>setPlantID(e.target.value)}
        >
          {listPlent?.map(ele =>
            <option key={ele.id} value={ele.id}>{ele.name}</option>
          )}
        </select>
      </label>
      <br/>
      <label>
      Pick a place:{' '}
        <select
          value={placeId}
          onChange={e=>setPlaceId(e.target.value)}
        >
          {listPlace?.map(ele =>
            <option key={ele.id} value={ele.id}>{ele.name}</option>
          )}
        </select>
      </label>
      <hr />
      <p>You are going to:{placeId || '...'} on {plantId || '...'}</p>
    </>
  )
 }