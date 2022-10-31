function Message(props) {

  console.log(props)

  let strRepeat = props.children.repeat(props.num)

  return (
    <div>
      <h4>{strRepeat}</h4>
    </div>
  )

}

export default Message