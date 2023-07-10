import { useEffect } from "react"
import './css/fonts.css'
import { WholeWapper } from "./style";
import { Header } from "./components/Header";
import { ContentBack } from "./components/ContentBack";
import { Footer } from "./components/Footer";
import { LookBook } from "./components/LookBook";
import { ShopList } from "./components/ShopList";
import { PageSix } from "./components/PageSix";
import PageSeven from "./components/PageSeven";
export default function PageFive() {
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
      <Header />
      <ContentBack />
      <ShopList/>
      <LookBook />
      <PageSix/>
      <PageSeven />
      <Footer />
    </WholeWapper>
  )
}