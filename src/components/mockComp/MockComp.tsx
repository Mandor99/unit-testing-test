import { useEffect } from "react"
import Comp2 from "./Comp2"

type Props = {
    propFunc: () => void
}

const MockComp = ({propFunc}: Props) => {

  return (
    <div>
        <Comp2 />
        <button onClick={propFunc}>click prop func</button>
    </div>
  )
}

export default MockComp