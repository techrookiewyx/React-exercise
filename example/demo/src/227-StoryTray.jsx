import './8-example-logs.css'
export function StoryTray({stories}){
  const newStr = stories.slice();
  newStr.push({
    id: 'create',
    label:'Create Story'
  })
  return (
    <ul className="ul226">
      {newStr.map(ele =>
        <li className='li226' key={ele.id}>
          {ele.label}
        </li>
      )}
    </ul>
  )
}