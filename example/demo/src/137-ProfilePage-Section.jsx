import { useContext } from "react"
import { Level } from "./136-create-context"
import './8-example-logs.css'
export default function ProfileSeciton({ children, isFancy }) {
  const level = useContext(Level);
  return (
    <div className={`box ${isFancy ?'fancy2':''}`}>
      <Level.Provider value={level+1}>
        {children}
      </Level.Provider>
     </div>
   )
}