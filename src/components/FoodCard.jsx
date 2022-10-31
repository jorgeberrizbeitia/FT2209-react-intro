import imgTequeño from "../assets/tequeños.jpg"


function FoodCard(props) {

  console.log(props)
  const { foodName, foodImg } = props // si hacemos esto, no tendriamos que agregar "props." abajo por cada valor

  return (
    <div className="card">
      <p>{props.foodName}</p>
      <img src={props.foodImg} alt={props.foodName} />
    </div>
  )

}

export default FoodCard
