export function ButtonList({ conts, selectId, onSelect }) { 
  return (
    <ul>
      {conts.map(ele =>
        <li key={ele.id}>
          <button onClick={() => {onSelect(ele.id)}}>
            {selectId===ele.id ?
              <b>{ele.name}</b>:
              ele.name
            }
          </button>
        </li>
      )}
    </ul>
  )
}

