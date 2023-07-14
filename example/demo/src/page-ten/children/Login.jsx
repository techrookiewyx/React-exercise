import { styled } from "styled-components"
export const Input = styled.input.attrs(props => ({
  type: props.type,
  placeholder: props.placeholder
}))`
  box-sizing: border-box;
  padding-left: 7px;
  outline: none;
  border: 1px solid #e7e7e7;
  height: 30px;
  margin-bottom: 25px;
  &:invalid{
    background-color: rgba(187, 84, 101, 0.05);
    border: 1px solid #bb5465;
  }
  &:hover{
    border: 1px solid green;
  }
`;
const LoginWapper = styled.section`
  display: flex;
  width: 407px;
  flex-direction: column;
  section{
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    div{
      a{
        display: block;
        box-sizing: border-box;
        font-size: 12px;
        font-weight: 400;
        color: #454647;
        padding: 15px 25px;
        border: 2px solid #737373;
        transition: all .4s;
      }
      &:hover a{
        color: #fff;
        background-color: #00c8c8;
        border-color: #00c8c8;
      }
    }
    p a {
        font-size: 11px;
        font-family: "RR";
        font-weight: 400;
        color: #00c8c8;
        line-height: 40px;
    }
  }
`;
export function Login({children}) {
  return (
    <LoginWapper>
      {children}
      <Input type='email' placeholder='Your Email..'/>
      <Input type='password' placeholder='Your Password..'/>
      <section>
        <div><a href="/#">SIGN IN</a></div>
        <p><a href="/#">Forgot your Password➞</a></p>
      </section>
    </LoginWapper>
  )
}