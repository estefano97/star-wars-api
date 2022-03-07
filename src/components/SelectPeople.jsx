import React from 'react'

const SelectPeople = (props) => {

  let Selected = props.searcher;
  console.log(props.searcher);

  return (
    <div>
      <p><b>Name:</b> {Selected.name}</p>
      <p><b>Height:</b> {Selected.height} cm</p>
      <p><b>Gender:</b> {Selected.gender}</p>
      <p><b>Eye Color:</b> {Selected.eye_color}</p>
    </div>
  )
}

export default SelectPeople;