import { Level } from "./136-create-context"
import { useContext } from "react"
import './8-example-logs.css'
export default function SectionUP({ children }) {
  const level = useContext(Level);
  return (
    <div className="box">
      <Level.Provider value={level+1}>
        {children}
      </Level.Provider>
    </div>
  )
}