import { useEffect } from "react"
import './css/fonts.css'
import { WholeWapper } from "./style";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import  { Outlet } from 'react-router-dom'
import PageList from "./components/PageList";
export default function DefaultPage() {
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
      <PageList/>
      <Header />
      <Outlet/>
      <Footer />
    </WholeWapper>
  )
}
