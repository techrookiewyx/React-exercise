import { useImmer } from "use-immer";

const chushi = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];
function ItemList({artwork,onToggle}){
  return (
    <ul>
      {artwork.map(ele =>
        <li key={ele.id}>
          <label>
            <input
              type="checkbox"
              checked={ele.seen}
              onChange={e => {
                onToggle(ele.id,e.target.checked)
              }}
            />
            {ele.title}
          </label>
        </li>
      )}
    </ul>
  )
}
export default function ArrayOjbImmer() { 
  const [myList, setMyList] = useImmer(chushi);
  const [yourList, setYourList] = useImmer(chushi);
  function handleMyToggle(id,next) { 
    setMyList(draft => { 
      const list = draft.find(a => a.id === id);
      list.seen = next;
    })
  }
  function handleYourToggle(id,next) {
    setYourList(draft => { 
      const list = draft.find(a => a.id === id);
      list.seen = next;
    })
  }
  return (
    <div>
      <h1>艺术愿望清单</h1>
      <h2>我想看的艺术清单：</h2>
      <ItemList
        artwork={myList}
        onToggle={handleMyToggle}
      />
      <h2>你想看的艺术清单：</h2>
      <ItemList
        artwork={yourList}
        onToggle={handleYourToggle}
      />
    </div>
  )
}