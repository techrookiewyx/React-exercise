import { BgShare, PageSixTopNav } from "../page-five/components/PageSix";
import { styled } from "styled-components";
import { Login } from "./children/Login";
import { Register } from "./children/Register";
import { Header } from "../page-five/components/Header";
import { Footer } from "../page-five/components/Footer";
import { WholeWapper } from "../page-five/style";
import { useEffect } from "react";
const SignIn = styled.section`
  background-color: #fff;
  padding-bottom: 92px;
  padding-top: 45px;
  & > section{
    display: flex;
    justify-content: space-between;
    width: 870px;
    margin: 0 auto;
    height: 293px;
    & > div{
    width: 1px;
    height: inherit;
    background-color: #eee;
    }
    h3{
      font-size: 13px;
      font-weight: 400;
      color: #575153;
      margin-bottom: 13px;
    }
  }
`;
export default function PageTen() {
  useEffect(() => { 
    const body = document.body;
    body.style.backgroundColor = '#fff';
    body.style.width = '100%';
    body.style.fontFamily='MR';
    return ()=>{
      body.style.backgroundColor = '';
      body.style.width = '';
      body.style.fontFamily='';
    }
  },[])
  return (
    <WholeWapper>
      <Header/>
      <PageSixTopNav page='ten'/>
      <BgShare span1='WELCOME' h2='TO AVE' p='SIGN IN OR REGISTER' />
      <SignIn>
        <section>
          <Login>
            <h3>SIGN IN</h3>
          </Login>
          <div></div>
          <Register>
            <h3>REGISTER</h3>
          </Register>
        </section>
      </SignIn>
      <Footer/>
    </WholeWapper>
  )
}