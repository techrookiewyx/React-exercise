import React, { Fragment } from 'react'

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};
export default function ListSeparator() {
  return (
    <div>
      {poem.lines.map((ele,index)=>
        <Fragment key={index}>
          {index > 0 ? <hr /> : null}
          <p>{ele}</p>
        </Fragment>
      )}
    </div>
  )
}
