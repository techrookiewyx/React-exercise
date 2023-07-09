import { styled } from "styled-components";
import book1 from '../images/look1.jpg';
import book2 from '../images/look2.jpg';
import book3 from '../images/look3.jpg';
const LookBookStyle = styled.section`
  display: flex;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  margin-bottom: 92px;
  article {
    box-sizing: border-box;
    padding-right: 42px;
    width: 491px;
    min-height: 393px;
    background-color: #f8f8f8;
    position: relative;
    text-align: right;
    &:not(:last-child) {
      margin-right: 15px;
    }
    section {
      h3 {
        margin-top: 73px;
        margin-bottom: 5px;
        font-family: "MB";
        font-size: 36px;
        font-weight: bold;
        color: #575153;
      }
      h4 {
        margin-bottom: 15px;
        font-family: "ML";
        font-size: 36px;
        color: #575153;
      }
      p {
        font-size: 10px;
        font-weight: 400;
        color: #727272;
        line-height: 16px;
        span {
          font-size: 20px;
          vertical-align: middle;
        }
      }
    }
    a {
      margin-top: 23px;
      float: right;
      display: block;
      padding: 13px 0;
      width: 133px;
      text-align: center;
      border: 2px solid #737373;
      font-size: 12px;
      font-weight: 400;
      color: #454647;
      &:hover {
        color: #f8f8f8;
        background-color: #00c8c8;
        border-color: #00c8c8;
      }
    }
    &:first-child {
      background: url(${book1}) no-repeat center;
      background-size: contain;
    }
    &:nth-child(2) {
      background: url(${book2}) no-repeat center;
      background-size: contain;
    }
    &:nth-child(3) {
      background: url(${book3}) no-repeat center;
      background-size: contain;
    }
  }
`;
export function LookBook() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <LookBookStyle>
      <article>
        <section className="clearfix">
          <h3>MEN’S</h3>
          <h4>LOOK BOOK</h4>
          <p>Lorem ipsum dolor sit amet eras facilisis</p>
          <p>consectetur adipiscing elit lor, integer lorem</p>
          <p>consecteur dignissim laciniqui.</p>
          <p>Elementum metus facilisis ut phasellu.</p>
          <a onClick={handleClick} href="/#">
            VIEW NOW
          </a>
        </section>
      </article>
      <article>
        <section className="clearfix">
          <h3>WOMEN’S</h3>
          <h4>LOOK BOOK</h4>
          <p>Pellentesque habitant morbi tristique senec-</p>
          <p>tus et netus et malesuada fames .</p>
          <p>Pellentesque laoreet quis enim et mattis.</p>
          <p>Quisque interdum felis tellus.</p>
          <a onClick={handleClick} href="/#">
            VIEW NOW
          </a>
        </section>
      </article>
      <article>
        <section className="clearfix">
          <h3>YOUR</h3>
          <h4>LOOK BOOK</h4>
          <p>
            See an item you like and click the<span>♡</span> button
          </p>
          <p>to add it to your lookbook where you can</p>
          <p>create your own perfect look.</p>
          <p>It’s like your own boutique!</p>
          <a onClick={handleClick} href="/#">
            VIEW NOW
          </a>
        </section>
      </article>
    </LookBookStyle>
  );
}
