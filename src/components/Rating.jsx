function Rating() {
  let checkboxes = [];
  for(let i = 0; i < 5; i++) {
    checkboxes.push(<input type="checkbox" />)
  }

  return checkboxes
}

export default Rating 