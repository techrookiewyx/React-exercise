import React, { Fragment } from 'react'
import { people } from './37-people-data'
export default function ListFilter() {
  const newPerson = people.filter(ele => ele.profession === '化学家');
  const item = newPerson.map(ele =>
    <Fragment key={ele.id}>
      <p>
        <b>{ele.name}:</b>
        {` ${ele.profession} 因${ele.accomplishment}而闻名世界`}
      </p>
    </Fragment>
    )
  return (
      <ul>{item}</ul>
  )
}
