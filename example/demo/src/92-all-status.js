import Form from "./92-form"

let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error',
];
export default function AllStatus() {
  return (
    <>
      {statuses.map(ele =>
       <> 
        <div key={ele}>
          <h4>Form ({ele}):</h4>
          <Form status={ele} />
        </div>
          <hr />
        </>
      )}
    </>
  )
}
