import { styled } from "styled-components";
import { BgShare, PageSixTopNav } from "../page-five/components/PageSix";
import styles from "./styles.module.css";
import '../page-five/css/fonts.css'
import { WholeWapper } from "../page-five/style";
import { Header } from "../page-five/components/Header";
import { Footer } from "../page-five/components/Footer";
import { useEffect } from "react";
const ShopDet = styled.div`
  width: 870px;
  margin: 0 auto;
  &::after,
  &::before {
    display: table;
    content: "";
    clear: both;
  }
`;
const DetailStyle = styled.section`
  display: flex;
  margin-top: 47px;
  margin-bottom: 28px;
`;
const DelLeft = styled.section`
  flex-shrink: 0;
  position: relative;
  width: 422px;
  img {
    width: 100%;
    vertical-align: bottom;
  }
  a {
    display: block;
    width: 33px;
    height: 41px;
    line-height: 41px;
    text-align: center;
    &:hover {
      background-color: #00c8c8;
      i {
        color: #ffffff;
      }
    }
    i {
      font-size: 20px;
      font-weight: bold;
      color: #575153;
    }
  }
`;
const InfoList = styled.ul`
  display: flex;
  & > li {
    margin-right: 8px;
  }
  li {
    a {
      font-size: 10px;
      color: rgba(152, 152, 152, 1);
      strong {
        color: rgba(100, 100, 100, 1);
      }
      &:hover strong {
        color: #00c8c8;
      }
    }
    &:not(:first-child) a:hover {
      color: #00c8c8;
    }
    &:first-child {
      a {
        letter-spacing: -4px;
        font-size: 12px;
        &:last-child {
          color: RGB(223, 223, 222);
        }
      }
    }
    &:last-child a:not(:first-child) {
      margin-left: 8px;
    }
  }
`;
const Reg = styled.section`
  display: flex;
  margin-top: 27px;
  & > div {
    position: relative;
    margin-right: 22px;
    h6 {
      font-size: 10px;
      font-weight: 400;
      color: #575153;
      margin-bottom: 10px;
    }
    select {
      box-sizing: border-box;
      padding-left: 5px;
      width: 126px;
      height: 26px;
      font-size: 10px;
      font-family: "ML";
      font-weight: 300;
      outline: none;
      color: #989898;
      background: transparent;
      border: 1px solid #e7e7e7;
      appearance: none;
    }
    & > i {
      position: absolute;
      bottom: 6px;
      right: 7px;
      z-index: 5;
      display: block;
      font-size: 8px;
      color: #989898;
      font-weight: 400;
      transform: rotate(90deg);
      cursor: pointer;
    }
  }
  & > div:last-child > section {
    display: grid;
    width: 52px;
    height: 26px;
    grid-template-columns: 26px 26px;
    grid-template-rows: 13px 13px;
    text-align: center;
    font-size: 10px;
    font-family: "ML";
    font-weight: 300;
    color: #989898;
    section {
      border: 1px solid #e7e7e7;
      i {
        font-size: 8px;
        display: block;
        line-height: 10px;
        cursor: pointer;
      }
    }
    .i1 {
      grid-row: 1 / 3;
      border-right: none;
      line-height: 24px;
    }
    .i2 {
      border-bottom: none;
    }
    .i2,
    .i3 {
      cursor: pointer;
      button {
        box-sizing: border-box;
        padding: 0;
        outline: none;
        border: none;
        background-color: #fff;
      }
      i {
        color: #989898;
        transform: rotate(-90deg);
      }
    }
  }
`;
const Opa = styled.section`
  display: flex;
  margin-top: 35px;
  a {
    display: block;
    font-size: 12px;
    font-weight: 400;
    padding: 13px 27px;
    margin-right: 25px;
    transition: all 0.3s;
    &:first-child {
      color: #ffffff;
      background-color: #00c8c8;
      padding-top: 14px;
      i {
        color: #fff;
      }
      &:hover {
        background-color: #333333;
      }
    }
    i {
      margin-right: 9px;
      font-size: 13px;
    }
    &:last-child {
      color: #454647;
      border: 2px solid #737373;
      &:hover {
        background-color: #00c8c8;
        border-color: #00c8c8;
        color: #fff;
      }
    }
  }
`;
const DelRight = styled.section`
  margin-left: 22px;
  h3 {
    font-size: 13px;
    font-weight: 400;
    color: #575153;
    margin-bottom: 15px;
  }
  h4 {
    font-family: "ML";
    font-size: 22px;
    font-weight: 300;
    color: #9a9a9a;
    margin-top: 15px;
    margin-bottom: 25px;
  }
  & > h4 {
    sup {
      font-size: 11px;
      vertical-align: super;
    }
    span {
      text-decoration: line-through;
      margin-right: 8px;
    }
  }
  & > h5 {
    font-size: 10px;
    font-weight: 400;
    color: rgba(140, 140, 140, 1);
    line-height: 22px;
    strong {
      color: #575153;
    }
    span {
      color: #00c8c8;
    }
  }
  & > p {
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 11px;
    font-family: "RR";
    font-weight: 400;
    color: #8e8c8c;
    line-height: 16px;
  }
  & > div {
    font-size: 10px;
    font-weight: 400;
    color: #454647;
    margin-top: 20px;
    a {
      display: inline-block;
      width: 22px;
      height: 22px;
      background-color: #727272;
      border-radius: 50%;
      text-align: center;
      margin-right: 10px;
      transition: all 0.3s;
      i {
        color: #fff;
        font-size: 13px;
        line-height: 22px;
      }
      &:hover {
        background-color: #00c8c8;
      }
    }
  }
`;
const DesbStyle = styled.section`
  margin-bottom: 93px;
  nav {
    height: 37px;
    line-height: 37px;
    background: #f8f8f8;
    ul {
      display: flex;
      li {
        font-size: 12px;
        font-weight: 400;
        margin-right: 45px;
        a {
          transition: all 0.3s;
          display: block;
          padding: 0 11px;
          color: RGBA(98, 92, 94, 1);
        }
        &:hover a {
          background-color: #333333;
          color: #ffffff;
        }
        &:first-child {
          background-color: #333333;
          a {
            color: #ffffff;
          }
        }
      }
    }
  }
  & > article {
    padding-left: 12px;
    h3 {
      font-size: 10px;
      font-weight: 400;
      color: #727272;
      margin-top: 19px;
    }
    p {
      margin-top: 8px;
      margin-bottom: 20px;
    }
  }
  & > article p,
  & > article article {
    font-size: 11px;
    font-family: "RR";
    font-weight: 400;
    color: #8e8c8c;
    line-height: 16px;
  }
`;
function Detail() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <DetailStyle>
      <DelLeft>
        <img src={require("./images/image.jpg")} alt="" />
        <a onClick={handleClick} className={styles.prev} href="/#">
          <i className="iconfont icon-prev1"></i>
        </a>
        <a onClick={handleClick} className={styles.next} href="/#">
          <i className="iconfont icon-next1"></i>
        </a>
      </DelLeft>
      <DelRight>
        <h3>AVE CLASSIC SWEATSHIRT</h3>
        <InfoList>
          <li>
            <a onClick={handleClick} id={styles.yel} href="/#">
              <i className="iconfont icon-cc-star"></i>
            </a>
            <a onClick={handleClick} id={styles.yel} href="/#">
              <i className="iconfont icon-cc-star"></i>
            </a>
            <a onClick={handleClick} id={styles.yel} href="/#">
              <i className="iconfont icon-cc-star"></i>
            </a>
            <a onClick={handleClick} id={styles.yel} href="/#">
              <i className="iconfont icon-cc-star"></i>
            </a>
            <a onClick={handleClick} href="/#">
              {" "}
              <i className="iconfont icon-cc-star"></i>{" "}
            </a>
          </li>
          <li>
            <a onClick={handleClick} href="/#">
              <strong>3 Revivew(s)</strong>
            </a>
          </li>
          <li className={styles.uln}></li>
          <li>
            <a href="/#">Add a Review</a>
          </li>
          <li className={styles.uln}></li>
          <li>
            <a onClick={handleClick} href="/#">
              Share:{" "}
            </a>
            <a onClick={handleClick} href="/#">
              <img src={require("./images/11.png")} height="11px" alt="" />
            </a>
            <a onClick={handleClick} href="/#">
              <img src={require("./images/22.png")} height="9px" alt="" />
            </a>
            <a onClick={handleClick} href="/#">
              <img src={require("./images/33.png")} height="10px" alt="" />
            </a>
            <a onClick={handleClick} href="/#">
              <img src={require("./images/44.png")} height="11px" alt="" />
            </a>
            <a onClick={handleClick} href="/#">
              <img src={require("./images/55.png")} height="10px" alt="" />
            </a>
            <a onClick={handleClick} href="mailto:exaple@xxx.com">
              <img src={require("./images/66.png")} height="10px" alt="" />
            </a>
          </li>
        </InfoList>
        <h4>
          <sup>£</sup>
          <span>107</span> <sup>£</sup>89.99
        </h4>
        <h5>
          <strong>AVAILABILITY:</strong> In stock
        </h5>
        <h5>
          <strong>PRODUCT CODE:</strong> #499577
        </h5>
        <h5>
          <strong>TAGS:</strong> <span>Classics,Casual,V-neck,Loose</span>
        </h5>
        <p>
          Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id
          viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
        </p>
        <h5>• Elasticated cuffs</h5>
        <h5>• Casual fit</h5>
        <h5>• 100% Cotton</h5>
        <h5>• Free shipping with 4 days delivery</h5>
        <Reg>
          <div>
            <h6>COLOR</h6>
            <select name="" id="">
              <option>Select Colour</option>
            </select>
            <i className="iconfont icon-next1"></i>
          </div>
          <div>
            <h6>SIZE</h6>
            <select name="" id="">
              <option>Select Size</option>
            </select>
            <i className="iconfont icon-next1"></i>
          </div>
          <div>
            <h6>QTY</h6>
            <section>
              <section className={styles.i1}>1</section>
              <section className={styles.i2}>
                <button>
                  <i className="iconfont icon-next1"></i>
                </button>
              </section>
              <section className={styles.i3}>
                <button>
                  <i className="iconfont icon-prev1"></i>
                </button>
              </section>
            </section>
          </div>
        </Reg>
        <Opa>
          <a onClick={handleClick} href="/#">
            <i className="iconfont icon-31gouwuchexuanzhong"></i>ADD TO CART
          </a>
          <a onClick={handleClick} href="/#">
            <i className="iconfont icon-aixin"></i>ADD TO LOOKBOOK
          </a>
        </Opa>
        <div>
          <a onClick={handleClick} href="/#">
            <i className="iconfont icon-suoxiao"></i>
          </a>{" "}
          ADD TO COMPARE
        </div>
      </DelRight>
    </DetailStyle>
  );
}
function Desb() {
  return (
    <DesbStyle>
      <nav>
        <ul>
          <li>
            <a href="/#">DESCRIPTION</a>
          </li>
          <li>
            <a href="/#">VIDEO</a>
          </li>
          <li>
            <a href="/#">Size & Specs</a>
          </li>
          <li>
            <a href="/#">Delivery & Returns</a>
          </li>
          <li>
            <a href="/#">Reviews</a>
          </li>
        </ul>
      </nav>
      <article className={styles.clearfix}>
        <h3>NUNC EGESTAS POSUERE ENIM, EU MAXIMUS ERAT POSUERE EGET</h3>
        <p>
          Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec,
          pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed
          imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit.
          Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed
          quis aliquet risus, ut cursus lectus. In eget lorem tellus.
        </p>
        <article>
          Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut.
          Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam
          neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit
          orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor.
          Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam
          varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida
          lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque
          a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim
          dui posuere mauris, in aliquet lorem eros eget neque.
        </article>
      </article>
    </DesbStyle>
  );
}
export default function PageNine() {
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
      <PageSixTopNav page="nine" />
      <BgShare span1="PRODUCT" h2="VIEW" p="MENS - CASUALS - HOODIES & SWEATSHIRTS -" pspan="AVE CLASSIC SWEATSHIRT" />
      <ShopDet>
        <Detail />
        <Desb />
      </ShopDet>
      <Footer />
    </WholeWapper>
  );
}
