
function FoodCard(props) {

  console.log(props)
  const { foodName, foodImg } = props // si hacemos esto, no tendriamos que agregar "props." abajo por cada valor

  // estilos inline con objetos
  const cardStyles = {
    backgroundColor: props.cardColor,
    opacity: "0.7",
    marginBottom: "50px"
  }

  return (
    <div className="card" style={cardStyles}>
      {/* estilos inline */}
      <p style={{color: "black", fontSize: "50px"}}>{props.foodName}</p>
      <img src={props.foodImg} alt={props.foodName} />
    </div>
  )

}

export default FoodCard
