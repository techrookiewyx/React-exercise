import { styled } from "styled-components";
import bg from "../images/AVE.jpg";
import { WebNavStyle } from "../style";

// import { useState } from "react";
// const data = [
//   {
//     id: 0,
//     info:'MENS'
//   },
//   {
//     id: 1,
//     info:'WOMENS'
//   },
//   {
//     id: 2,
//     info:'THE BRAND'
//   },
//   {
//     id: 3,
//     info:'LOACAL STORES'
//   },
//   {
//     id: 4,
//     info:'LOOK BOOK'
//   },
// ]
const ContBackStyle = styled.section`
  min-height: 681px;
  background: #f8f8f8 url(${bg}) no-repeat center top;
  background-size: contain;
  position: relative;
  & > a {
    position: absolute;
    font-size: 12px;
    font-weight: 400;
    color: #454647;
    right: 50%;
    bottom: 50%;
    margin-bottom: -250px;
    padding: 17px 30px;
    border: 2px solid #737373;
    margin-right: -530px;
  }
`;

export function WebNav() {
  // const [selectedId, setSelectedId] = useState(0);
  function handleClick(e) {
    e.preventDefault();
  }
  // function handleClickItem(id) { 
  //   setSelectedId(id);
  // }
  return (
    <WebNavStyle>
    <h1>
      <a onClick={handleClick} href="/#"><em>AVENUE</em> FASHION</a>
    </h1>
    <section className="np2-right clearfix">
      <ul>
        <li className="active">
          <a onClick={handleClick} href="/#">MENS</a>
          <section className="sub-nav">
              <ul>
                  <h3>CASUALS</h3>
                  <li><a onClick={handleClick} href="/#">Jackets</a></li>
                  <li><a href="../ninth-page/index.html">Hoodies & Sweatshirts</a></li>
                  <li><a onClick={handleClick} href="/#">Polo Shirts</a></li>
                  <li><a onClick={handleClick} href="/#">Sportswear</a></li>
                  <li><a onClick={handleClick} href="/#">Trousers & Chinos</a></li>
                  <li><a onClick={handleClick} href="/#">T-Shirts</a></li>
              </ul>
              <ul>
                  <h3>FORMAL</h3>
                  <li><a onClick={handleClick} href="/#">Jackets</a></li>
                  <li><a onClick={handleClick} href="/#">Shirts</a></li>
                  <li><a onClick={handleClick} href="/#">Suits</a></li>
                  <li><a onClick={handleClick} href="/#">Trousers</a></li>
              </ul>
              <section>AUTUMN SALE! UP TO 50% OFF</section>
          </section>
        </li>
        <li><a onClick={handleClick} href="/#">WOMENS</a></li>
        <li><a href="../sixth-page/index.html">THE BRAND</a></li>
        <li><a href="../seventh/index.html">LOACAL STORES</a></li>
        <li><a href="../eighth-page/index.html">LOOK BOOK</a></li>
      </ul>
      <section className="search">
        <input type="text" placeholder="Search.." />
        <a onClick={handleClick} href="/#"><img src={require("../images/search.png")} width="10px" alt="" /></a>
      </section>
    </section>
    </WebNavStyle>
  )
}
// const WebItem = styled.li`

// `;
// function WebNavItem({info,select,onClick}) {
//   return (
//     <WebItem>
//       <a href="">MENS</a>
//     </WebItem>
//   )
// }
export function ContentBack() {
  function handleClick(e) {
    e.preventDefault();
}
  return (
    <ContBackStyle>
      <WebNav />
      <a onClick={handleClick} href="/#">SHOP MEN’S COLLECTION</a>
    </ContBackStyle>
  );
}




// import { WebNavStyleSix } from "./ContentBack";
// export function PageSixWebNav() {
//   return (
//     <WebNavStyleSix>
      //  <h1>
      //   <a onClick={handleClick} href="/#"><em>AVENUE</em> FASHION</a>
      // </h1>
      // <section className="np2-right clearfix">
      //   <ul>
      //     <li className="active">
      //       <a onClick={handleClick} href="/#">MENS</a>
      //       <section className="sub-nav">
      //           <ul>
      //               <h3>CASUALS</h3>
      //               <li><a onClick={handleClick} href="/#">Jackets</a></li>
      //               <li><a href="../ninth-page/index.html">Hoodies & Sweatshirts</a></li>
      //               <li><a onClick={handleClick} href="/#">Polo Shirts</a></li>
      //               <li><a onClick={handleClick} href="/#">Sportswear</a></li>
      //               <li><a onClick={handleClick} href="/#">Trousers & Chinos</a></li>
      //               <li><a onClick={handleClick} href="/#">T-Shirts</a></li>
      //           </ul>
      //           <ul>
      //               <h3>FORMAL</h3>
      //               <li><a onClick={handleClick} href="/#">Jackets</a></li>
      //               <li><a onClick={handleClick} href="/#">Shirts</a></li>
      //               <li><a onClick={handleClick} href="/#">Suits</a></li>
      //               <li><a onClick={handleClick} href="/#">Trousers</a></li>
      //           </ul>
      //           <section>AUTUMN SALE! UP TO 50% OFF</section>
      //       </section>
      //     </li>
      //     <li><a onClick={handleClick} href="/#">WOMENS</a></li>
      //     <li><a href="../sixth-page/index.html">THE BRAND</a></li>
      //     <li><a href="../seventh/index.html">LOACAL STORES</a></li>
      //     <li><a href="../eighth-page/index.html">LOOK BOOK</a></li>
      //   </ul>
      //   <section className="search">
      //     <input type="text" placeholder="Search.." />
      //     <a onClick={handleClick} href="/#"><img src={require("../images/search.png")} width="10px" alt="" /></a>
      //   </section>
      // </section>
//     </WebNavStyleSix>
//   )
// }