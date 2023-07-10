import { styled } from "styled-components";
import { BgShare, PageSixTopNav } from "./PageSix";
const servdata = [
  {
    id: 0,
    h3: 'LONDON',
    h4: '80-182 REGENT STREET, LONDON, W1B 5BT',
    p: 'Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.'
  }, {
    id: 1,
    h3: 'NEW YORK',
    h4: '109 COLUMBUS CIRCLE, NWE YORK, NY 10023',
    p: 'Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliquam egestas, sem quis condimentum venenatis, erat leo fermentum dolor, non sollicitudin massa mi eu nibh. Nullam vitae aliquam dui, non sodales nisl.'
  }, {
    id: 2,
    h3: 'NEW YORK',
    h4: '109 COLUMBUS CIRCLE, NWE YORK, NY 10023',
    p: 'Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliquam egestas, sem quis condimentum venenatis, erat leo fermentum dolor, non sollicitudin massa mi eu nibh. Nullam vitae aliquam dui, non sodales nisl.'
  } 
]
const ServWapper = styled.section`
  background-color: #fff;
  height: 272px;
  .art-list {
  display: flex;
  justify-content: space-between;
  width: 870px;
  margin: 0 auto;
  }
`;
const ServItemSty = styled.article`
  margin-top: 45px;
  width: 273px;
  h3{
    font-size: 13px;
    font-weight: 400;
    color: #575153;
  }
  h4{
    margin-top: 21px;
    margin-bottom: 13px;
    font-size: 10px;
    font-weight: 400;
    color: #727272;
    word-break: break-all;
  }
  p{
    font-size: 11px;
    font-family: "RR";
    font-weight: 400;
    color: #8e8c8c;
    line-height: 16px;
    word-break: break-all;
  }
  div{
    margin-top: 20px;
    a{
      display: block;
      width: 161px;
      text-align: center;
      padding: 17px 0;
      font-size: 12px;
      font-weight: 400;
      color: #454647;
      border: 2px solid #737373;
      &:hover{
        color: #f8f8f8;
        background-color: #00c8c8;
        border-color: #00c8c8;
      }
    }
  }
  div.defse a{
    color: #f8f8f8;
    background-color: #00c8c8;
    border-color: #00c8c8;
  }
`;
const MapWapper = styled.section`
  display: flex;
  width: 100%;
  min-height: 393px;
  max-width: 1518.4px;
  margin: 0 auto;
  background-color: #f8f8f8;
  margin-bottom: 92px;
  & > section{
    width: 1027px;
    flex-grow: 1;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: bottom;
    }
  }
  & > article {
    box-sizing: border-box;
    width: 491px;
    padding: 31px 40px 0 30px;
    flex-grow: 1;
    h3{
      font-size: 13px;
      font-weight: 400;
      color: #575153;
    }
    h4{
      font-size: 10px;
      font-weight: 400;
      color: #727272;
      margin-top: 21px;
      margin-bottom: 8px;
    }
    p{
      font-size: 11px;
      font-family: "RR";
      font-weight: 400;
      color: #8e8c8c;
      line-height: 16px;
    }
    ul{
      margin-top: 18px;
      li{
        font-size: 10px;
        font-family: "ML";
        font-weight: 300;
        color: #8e8c8c;
        word-break: break-all;
        &:first-child img{
          margin-right: 11px;
        }
        img{
          vertical-align: middle;
          margin-right: 8px;
        }
        &:not(:last-child) {
          margin-bottom: 13px;
        }
      }
    }
    & > section{
      margin-top: 46px;
      a{
        margin-right: 7px;
        img{
          width: 22px;
        }
      }
    }
  }
`;
function ServItem({info,def}) { 
  return (
    <ServItemSty >
        <h3>{info.h3}</h3>
        <h4>{info.h4}</h4>
        <p>{info.p}</p>
      <div className={def ? 'defse' : ''}><a onClick={e => {e.preventDefault()}} href="/#">VIEW DEATAILS</a></div>
    </ServItemSty>
  )
}
function Serv() {
  return (
    <ServWapper>
      <section className="art-list">
        {servdata.map(ele =>
          <ServItem key={ele.id} info={ele} def={ele.id===0} />  
        )}
      </section>
    </ServWapper>
  )
}
function Map() { 
  return (
    <MapWapper>
      <section><img src={require("../images/map.jpg")} alt="" /></section>
      <article>
          <h3>LONDON</h3>
          <h4>180-182 REGENT STREET, LONDON, W1B 5BT</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare
            eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.
          </p>
          <ul>
            <li>
            <img src={require("../images/addr.png")} width="7px" alt=""/>
              180-182 Regent Street, London, W1B 5BT
            </li>
            <li>
              <img src={require("../images/tel.png")}  width="10px" alt=""/>
              0123-456-789
            </li>
            <li>
            <img src={require("../images/gls.png")} width="10px" alt=""/>
              www.yourwebsite.com
            </li>
            <li>
            <img src={require("../images/mail.png")} width="10px" alt=""/>
              support@yourwebsite.com
            </li>
            <li>
              <img src={require("../images/time.png")} width="10px" alt=""/>
              Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm
            </li>
          </ul>
          <section>
            <a href="/#"><img src={require("../images/facebook.png")} alt=""/></a>
          <a href="/#"><img src={require("../images/twitter.png")} alt=""/></a>
            <a href="/#"><img src={require("../images/instagram.png")} alt=""/></a>
            <a href="/#"><img src={require("../images/pinterest.png")} alt=""/></a>
          </section>
        </article>
    </MapWapper>
  )
}
export default function PageSeven() { 
  return (
    <>
      <PageSixTopNav page='seven'/>
      <BgShare span1='LOCAL' h2='STORES' p='FIND A STORE NEAR YOU' />
      <Serv />
      <Map />
    </>
  )
}