import { WebNavStyle } from "../style";
import { styled } from "styled-components";
import back from '../images/intro.jpg'
const SixTopNavWapper = styled.div`
  background-color: #f8f8f8;
`;
const WebNavStyleSix = styled(WebNavStyle)`
  min-height: 83px;
  /* .np2-right{
     & > ul {
      & > li {
         &:first-child::after {
        content: "";
        border-color: #989898;
        }
        &:hover::after {
        border-color: #00c8c8;
        }   
      }
    }
  } */
`;

// const BackContentStyle = styled.section`
//   min-height: 416px;
// `;

const BgShareStyle = styled.section`
  min-height: 343px;
  max-height: 450px;
  max-width: 2050px;
  margin: 0 auto;
  background: url(${back}) no-repeat center top;
  background-size: cover;
  section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: inherit;
    h2{
      font-family: "ML";
      font-size: 36px;
      color: #ffffff;
      margin-bottom: 39px;
      span{
        font-family: "MB";
        font-weight: bold;
      }
    }
    p{
      font-size: 22px;
      font-weight: 400;
      color: #ffffff;
      span{
        color: #00c8c8;
      }
    }
  }
`;
const ArtWapper = styled.section`
  min-height: 930px;
  background-color: #fff;
  &::after,&::before{
    content: "";
    display: table;
    clear: both;
  }
  & > article {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 870px;
    margin: 0 auto;
    margin-top: 47px;
    & > .p-l{
    display: flex;
    flex-direction: column;
      section:nth-child(2){
      margin-top: 46px;
      margin-bottom: 21px;
      }
        .at2{
          h4 {
            font-size: 13px;
            font-weight: 400;
            color: #575153;
          }
          h5{
            font-size: 9.5px;
            font-weight: 400;
            color: #727272;
            margin-top: 21px;
            margin-bottom: 14px;
          }
          p{
            font-size: 11px;
            font-family: "RR";
            font-weight: 400;
            color: #8e8c8c;
            line-height: 16px;
            span{
              color: #00c8c8;
            }
          }
        } 
    }
    & > .p-r{
      display: flex;
      flex-direction: column;
      .bil{
        display: flex;
        justify-content: space-between;
      }
      .at1 {
        margin-top: 45px;
        margin-bottom: 46px;
      }
      & > article{
        h4{
          font-size: 13px;
          font-weight: 400;
          color: #575153;
        }
        h5{
          font-size: 9.5px;
          font-weight: 400;
          color: #727272;
          margin-top: 21px;
          margin-bottom: 14px;
        }
        p{
            font-size: 11px;
            font-family: "RR";
            font-weight: 400;
            color: #8e8c8c;
            line-height: 16px;
        }
      }
      .at3{
        margin-top: 21px;
        margin-bottom: 53px;
        p a {
          color: #00c8c8;
        }
      }
    }
    & > section > img{
      vertical-align: bottom;
    }
    & > section, & > article {
      width: 422px;
    }
  }
`; 
export function PageSixTopNav({page}) {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <SixTopNavWapper>
      <WebNavStyleSix>
      <h1>
        <a onClick={handleClick} href="/#"><em>AVENUE</em> FASHION</a>
      </h1>
      <section className="np2-right clearfix">
        <ul>
          <li className={page==='nine' ? 'active' : ''}>
            <a onClick={handleClick} href="/#">MENS</a>
            <section className="sub-nav">
                <ul>
                    <h3>CASUALS</h3>
                    <li><a onClick={handleClick} href="/#">Jackets</a></li>
                    <li className={page === 'nine' ? 'seeight' : ''}><a href="../ninth-page/index.html">Hoodies & Sweatshirts</a></li>
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
          <li ><a onClick={handleClick} href="/#">WOMENS</a></li>
          <li className={page==='six' ? 'active' : ''}><a href="../sixth-page/index.html">THE BRAND</a></li>
          <li className={page==='seven' ? 'active' : ''}><a href="../seventh/index.html">LOACAL STORES</a></li>
          <li className={page === 'eight' ? 'active' : ''}>
            <a href="../eighth-page/index.html">LOOK BOOK</a>
            <section className="sub-nav">
                    <ul>
                      <h3>OUR LOOKBOOK</h3>
                      <li className={page === 'eight' ? 'seeight' : ''}><a href="/#">Latest Posts (mixed)</a></li>
                      <li><a href="/#">Men’s Lookbook</a></li>
                      <li><a href="/#">Women’s Lookbook</a></li>
                    </ul>
                    <ul>
                      <h3>YOUR LOOKBOOK</h3>
                      <li><a href="/#">View and Edit</a></li>
                      <li><a href="/#">Share</a></li>
                      <li><a href="/#">Delete</a></li>
                    </ul>
                    <section>AUTUMN SALE! UP TO 50% OFF</section>
                  </section>
          </li>
        </ul>
        <section className="search">
          <input type="text" placeholder="Search.." />
          <a onClick={handleClick} href="/#"><img src={require("../images/search.png")} width="10px" alt="" /></a>
        </section>
      </section>
      </WebNavStyleSix>
    </SixTopNavWapper>
  )
}
export function BgShare({h2,span1,p,pspan}) {
  return (
    <BgShareStyle>
      <section>
        <h2><span>{span1}</span> {h2}</h2>
        <p>{p}  {pspan && <span>{pspan}</span>}</p>
      </section>
    </BgShareStyle>
  )
}
// export function BkContent({children}) { 
//   return (
//     <BackContentStyle>
//       {children}
//     </BackContentStyle>
//   )
// }
function Art() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <ArtWapper>
      <article>
          <section className="p-l">
            <section><img src={require("../images/at1.jpg")} width="422px" alt="" /></section>
            <section><img src={require("../images/at2.jpg")} width="422px" alt="" /></section>
            <article className="at2">
              <h4>OUR VALUES, VISION AND STRATEGY</h4>
              <h5>THE ABOVE IMAGE WOULD BE A GREAT PLACE FOR AN ADVERTISING VIDEO</h5>
              <p>
                Cras maximus venenatis malesuada. Nulla sagittis elit felis, ac facilisis quam ornare aliquam. Etiam
                cursus odio vitae dui dignissim, sed tempus lacus tincidunt et donec sapien velit, rhoncus eu nulla a,
                molestie tempus mi maecenas sagittis ornare. Pellentesque sapien mi,
                <span>tincidunt nec magna vitae</span>, volutpat elementum odioni lorem Aliquam tempor massa vitae augue
                mattis tempor id in ante ut augue erat, luctus eil.
              </p>
            </article>
          </section>
          <section className="p-r">
            <article className="at1">
              <h4>HAND DESIGNED CLOTHING</h4>
              <h5>ESTABLISHED IN 2013, EVEMUE FASHION SED DICTUM ELIT VEL SAPIEN LUCTUS ERAS</h5>
              <p>
                Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam vestibulim consectetur, id
                condimentum leo porttitor. Cum sociis natoque penatibus eta magnis disut parturient montes, nascetur
                ridiculus mus. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse congue
                metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium
                justo interdum.
              </p>
            </article>
            <section><img src={require("../images/at3.jpg")} width="422px" alt="" /></section>
            <article className="at3">
              <h4>ETHICAL TRADING</h4>
              <h5>WE OVERSEE THE WORKING CONDITIONS OF THE PEOPLE IN THE SUPPLY CHAIN</h5>
              <p>
                Nullam dapibus consectetur neque, faucibus porttitor purus iaculis sed. Aenean eras dapibus augue, eget
                dignissim dui maecenas et rhoncus mim, vel semper arcu lorem Pellentesque congue justo esteir
                pellentesque aliquet massa eget posuere tincidunt. Cras viverra ullamcorper nunc accumsan hendrerit. <a onClick={handleClick} href="/#">A link ➞</a>
              </p>
            </article>
            <section className="bil">
              <img src={require("../images/REPLACEcopy3.png")} width="107px" alt="" />
              <img src={require("../images/REPLACEcopy4.png")} width="132px" alt="" />
              <img src={require("../images/REPLACEcopy5.png")} width="101px" alt="" />
            </section>
          </section>
      </article>
    </ArtWapper>
  )
}
export function PageSix(){
  return (
    <>
      <PageSixTopNav  page='six'/>
      <BgShare h2='BRAND' span1='THE' p='COMPANY SLOGAN GOES HERE' />
      <Art />  
    </>
  )
}