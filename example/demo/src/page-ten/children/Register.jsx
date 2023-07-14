import { styled } from "styled-components";
import { Input } from "./Login";
import { useState } from "react";
const Wapper = styled.section`
  display: flex;
  width: 407px;
  flex-direction: column;
  section{
    display: flex;
    justify-content: space-between;
    div{
      a{
        display: block;
        box-sizing: border-box;
        padding: 17px 25px;
        border: 2px solid #737373;
        font-size: 12px;
        font-weight: 400;
        color: #454647;
      }
      &:hover a{
        color: #fff;
        background-color: #00c8c8;
        border-color: #00c8c8;
      }
    }
    p{
      font-size: 11px;
      font-family: "RR";
      font-weight: 400;
      color: #8e8c8c;
      line-height: 16px;
      text-align: right;
      margin-top: 8px;
      a{
        color: #00c8c8;
      }
    }
  }
`;
const CheckForm = styled.form`
  margin-top: 7px;
  margin-bottom: 27px;
  span{
    font-size: 11px;
    font-family: "RR";
    font-weight: 400;
    color: #8e8c8c;
    vertical-align: baseline;
    word-break: break-all;
    margin-left: 10px;
    word-spacing: -2px;
  }
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    appearance: none;
    border: 1px solid #e7e7e7;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 18px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      background: ${props=>props.$ischeck ? 'rgb(130, 245, 130)' :'#fff'};
      width: 100%;
      height: 100%;
      border: 1px solid #e7e7e7;
    }
  }
`;
export function Register({ children }) {
  const [checked, setChecked] = useState(false);
  return (
    <Wapper>
      {children}
      <Input type='email' placeholder='Your Email..'/>
      <Input type='password' placeholder='Your Password..'/>
      <Input type='password' placeholder='Confirm Password..' />
      <CheckForm $ischeck={checked}>
        <input onChange={e => { setChecked(e.target.checked) }} checked={checked} type="checkbox"/><span>Sign up for exclusive updates, discounts, new arrivals, contests, and more!</span>
      </CheckForm>
      <section>
        <div><a href="/#">CREATE ACCOUNT</a></div>
        <p>By clicking ‘Create Account’, you<br/>agree to our <a href="/#">Privacy Policy➞</a></p>
      </section>
    </Wapper>
  )
}