import './8-example-logs.css'
import { contextLevel } from './135-contextLevel'
export default function ContextSection({level,children }) { 
  return (
    <div className='box'>
      <contextLevel.Provider value={level}>
      {children}
      </contextLevel.Provider>
    </div>
  )
}