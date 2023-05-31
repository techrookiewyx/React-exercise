import { useFromIpt } from "./206-useFromIpt";

export default function HoookForm() {
  const fstName = useFromIpt('Mary');
  const lstName = useFromIpt('Poppins');
  return (
    <>
        <label>
        First name:{" "}
        <input {...fstName}/>
      </label>
      <br/>
      <label>
        Last name::{" "}
        <input {...lstName}/>
      </label>
      <p><b>Good morning, {fstName.value} {lstName.value}.</b></p>
    </>
  )
}