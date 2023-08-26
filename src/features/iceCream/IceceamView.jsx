import { useSelector } from 'react-redux'

const IceceamView = () => {
  const numOfIcecreams = useSelector((state) => state.iceCream.numOfIceCreams)
  return (
    <div>
      <h2>Num of Ice Creams - { numOfIcecreams }</h2>
      <button>Order Ice Cream</button>
      <button>Restock Ice Creams</button>
    </div>
  )
}

export default IceceamView
