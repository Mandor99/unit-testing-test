import Comp2 from "./Comp2"

type Props = {
    propFunc: () => void
}

const MockComp = ({propFunc}: Props) => {
    propFunc()
  return (
    <div>
        <Comp2 />
    </div>
  )
}

export default MockComp