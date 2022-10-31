function Details(props) {

  return (
    <div>
      <h3>Detalles de usuario</h3>
      <p>Nombre: {props.person.name}</p>
      <p>Mascota: {props.person.preferredPet}</p>
    </div>
  )

}

export default Details