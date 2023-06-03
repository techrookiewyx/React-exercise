
export function ColorChange({onChangeColor}) { 
   return (
     <button
       onClick={e => { onChangeColor(); }}
     >
       改变颜色
    </button>
   )
}