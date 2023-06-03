import { useEffect, useState } from "react";
import { fetchBio } from "./226-api";
import React from "react";
export default function RepEffGetDate() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);
  useEffect(()=>{
    setBio(null);
    let ignore = false;
    fetchBio(person).then(res => {
      if (!ignore) {
        setBio(res);
      }
    });
    return () => ignore = true;
  },[person])
  return (
    <React.StrictMode>
      <h1>在下拉框中选择'Bob'后立即选择'Taylor'</h1>
      <select
        value={person}
        onChange={e => {setPerson(e.target.value)}}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <br />
      <br />
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </React.StrictMode>
  )
}