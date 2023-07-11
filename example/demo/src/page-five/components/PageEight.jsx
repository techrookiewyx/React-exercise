import { BgShare, PageSixTopNav } from "./PageSix";
import { styled } from "styled-components";
import { ShopNav } from "./ShopList";
const eightdata = [
  {
    id: 0,
    cont:'LATEST'
  },
  {
    id: 1,
    cont:'MOST LIKED'
  },
  {
    id: 2,
    cont:'BEST SELLERS'
  },
  {
    id: 3,
    cont:'PRICE TO HIGH'
  },
  {
    id: 4,
    cont:'PRICE HIGH TO LOW'
  },
];
const ShopListEightStyle = styled.section`
  width: 1311px;
  margin: 0 auto;
  .clearfix::after,
  .clearfix::before {
  content: "";
  display: table;
  clear: both;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(4, 311px);
    grid-template-rows: repeat(3, 370px);
    grid-gap: 22px;
    grid-template-areas: "a b c c" "d e f g" "h h h i";
    & > section {
      position: relative;
      transition: all .4s;
      &:hover {
        box-shadow: 0px 13px 18px 0px rgba(0, 0, 0, 0.14);
        .ic-g a img{
          width: 31px;
          height: 31px;
        }
      }
      & > a:first-child img {
        width: 100%;
      }
      & > .ic-g{
        position: absolute;
        top: 60%;
        left: 36%;
        z-index: 99;
      }
      .ic-g{
        a{
          img{
            vertical-align: middle;
            width: 31px;
            height: 0px;
            transition: all .4s;
          }
        }
      }
      & > p{
        position: absolute;
        top: 3%;
        left: 4%;
        font-size: 16px;
        font-family: "MR";
        font-weight: 300;
        color: #9a9a9a;
        sup{
          font-size: 8px;
          vertical-align: super;
        }
      }
      article a{
        display: block;
        box-sizing: border-box;
        padding: 15px 28px;
        width: 133px;
        height: 44px;
        border: 2px solid #737373;
        font-size: 12px;
        font-weight: 400;
        color: #454647;
        transition: all .4s;
        &:hover{
          border-color: #00c8c8;
          color: #fff;
          background-color: #00c8c8;
        }
      }
    }
    & > .item8 {
      .ic-g {
        left: 48%;
      }
    }
    & > .item3,
    & > .item8{
      article {
        position: absolute;
        top: 46px;
        left: 12px;
        h3{
          font-size: 36px;
          font-family: "ML";
          color: #575153;
          strong{
            font-family: "MB";
            font-weight: bold;
          }
        }
        h4{
          margin-top: 15px;
          margin-bottom: 8px;
          font-size: 10px;
          font-weight: 400;
          color: #727272;
        }
        P{
          font-family: "RR";
          font-size: 11px;
          font-weight: 400;
          color: #8e8c8c;
          line-height: 16px;
          margin-bottom: 21px;
        }
      }
    }
    .item3{
      grid-area: c;
    }
    .item8{
      grid-area: h;
    }
    .item8 > article {
      position: absolute;
      top: 46px;
      left: 12px;
    }
  }
`;
function ShopListEight() { 
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="line"></div>
      <ShopListEightStyle>
        <ShopNav data={eightdata} onClick={handleClick} />
        <section className="items">
          <section className="item1">
            <a onClick={handleClick} href="/#"><img src={require("../images/item1.jpg")} alt="" /></a>
            <section className="ic-g">
              <a onClick={handleClick} href="/#"><img src={require("../images/i.png")}   alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/ai.png")}  alt="" /></a>
            </section>
            <p><sup>REF</sup>M1</p>
          </section>
          <section className="item2">
            <a onClick={handleClick} href="/#"><img src={require("../images/item2.jpg")} alt="" /></a>
            <section className="ic-g">
              <a onClick={handleClick} href="/#"><img src={require("../images/i.png")} width="31px" height="31px" alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/ai.png")} width="31px" height="31px" alt="" /></a>
            </section>
            <p><sup>REF</sup>W1</p>
          </section>
          <section className="item3">
            <a onClick={handleClick} href="/#"><img src={require("../images/item3_45.jpg")} alt="" /></a>
            <section className="ic-g">
              <a onClick={handleClick} href="/#"><img src={require("../images/i.png")} width="31px" height="31px" alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/ai.png")} width="31px" height="31px" alt="" /></a>
            </section>
            <article>
              <h3><strong>JANE’S</strong> LOOKBOOK</h3>
              <h4>GET THE LOOK FOR UNDER £200!</h4>
              <p>
                We invited actress Jane Marshall to join us<br />for the day and choose her perfect outfit from<br />our
                vast range of womens fashion.
              </p>
              <p>
                This is of course not true as this is just a design<br />for a website and this is simply filler text.
              </p>
              <a onClick={handleClick} href="/#">SHOP NOW</a>
            </article>
          </section>
          <section className="item4">
            <a onClick={handleClick} href="/#"><img src={require("../images/item4_18.jpg")} alt="" /></a>
            <section className="ic-g">
              <a onClick={handleClick} href="/#"><img src={require("../images/i.png")} width="31px" height="31px" alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/ai.png")} width="31px" height="31px" alt="" /></a>
            </section>
            <p><sup>REF</sup>MJ1</p>
          </section>
          <section className="item5">
            <a onClick={handleClick} href="/#"><img src={require("../images/item5.jpg")} alt="" /></a>
            <section className="ic-g">
              <a onClick={handleClick} href="/#"><img src={require("../images/i.png")} width="31px" height="31px" alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/ai.png")} width="31px" height="31px" alt="" /></a>
            </section>
            <p><sup>REF</sup>M2</p>
          </section>
          <section className="item6">
            <a onClick={handleClick} href="/#"><img src={require("../images/item6_47.jpg")} alt="" /></a>
            <section className="ic-g">
              <a onClick={handleClick} href="/#"><img src={require("../images/i.png")} width="31px" height="31px" alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/ai.png")} width="31px" height="31px" alt="" /></a>
            </section>
            <p><sup>REF</sup>W2</p>
          </section>
          <section className="item7">
            <a onClick={handleClick} href="/#"><img src={require("../images/item7.jpg")} alt="" /></a>
            <section className="ic-g">
              <a onClick={handleClick} href="/#"><img src={require("../images/i.png")} width="31px" height="31px" alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/ai.png")} width="31px" height="31px" alt="" /></a>
            </section>
            <p><sup>REF</sup>W3</p>
          </section>
          <section className="item8">
            <a href="/#"><img src={require("../images/item8.jpg")} alt="" /></a>
            <article>
              <h3><strong>WIN</strong> A NEW LOOK!</h3>
              <h4>ADD LOOKS OR ITEMS TO YOUR LOOKBOOK FOR A CHANCE OF WINNING</h4>
              <p>
                See an item or a complete look you like, click the ♡ button to add it to your<br />lookbook and you’ll
                be automatically entered to our monthly draw where<br />one winner gets a £200 gift voucher to spend on
                our website!
              </p>
              <p>
                Terms: No purchase necessary. Vouchers are non-transferable and no<br />cash alternative is ofered.
                Competition is for members only.
              </p>
              <a onClick={handleClick} href="/#">SHOP NOW</a>
            </article>
            <section className="ic-g">
              <a onClick={handleClick} href="/#"><img src={require("../images/i.png")} width="31px" height="31px" alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/ai.png")} width="31px" height="31px" alt="" /></a>
            </section>
          </section>
          <section className="item9">
            <a onClick={handleClick} href="/#"><img src={require("../images/item9.jpg")} alt="" /></a>
            <section className="ic-g">
              <a onClick={handleClick} href="/#"><img src={require("../images/i.png")} width="31px" height="31px" alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/ai.png")} width="31px" height="31px" alt="" /></a>
            </section>
            <p><sup>REF</sup>W4</p>
          </section>
        </section>
      </ShopListEightStyle>
      <div className="line"></div>
    </>
  )
}
export default function PageEight() {
  return (
    <>
      <PageSixTopNav page="eight" />
      <BgShare span1='OUR' h2='LOOKBOOK' p='LATEST POSTS - MENS & WOMENS' />
      <ShopListEight />
    </>
  )
}