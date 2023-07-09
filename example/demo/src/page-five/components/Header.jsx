import { styled } from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  height: 33px;
  background-color: #333333;
  nav {
    width: 870px;
    margin: 0 auto;
    line-height: 33px;
    display: flex;
    justify-content: space-between;
    a {
      padding-right: 20px;
      font-size: 10px;
      font-weight: 400;
      color: #999999;
    }
    .head-nav-left {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        width: 4px;
        height: 4px;
        border-right: 1px solid #696969;
        border-bottom: 1px solid #696969;
        right: 8px;
        top: 15px;
        transform: rotate(45deg);
      }
    }
    .head-nav-right {
      ul {
        display: flex;
        float: left;
        li:not(:last-child) {
          margin-right: 30px;
        }
      }
      .head-nav-shop {
        margin-left: 60px;
        float: left;
        position: relative;
        a {
          color: #ffffff;
          display: block;
          background-color: #00c8c8;
          padding: 0 30px 0 16px;
          display: flex;
          span{
            margin-left: 16px;
          }
          img{
            margin-top: 10px;
            line-height: 33px;
          }
        }
        &::after {
          position: absolute;
          content: "";
          width: 4px;
          height: 4px;
          border-right: 1px solid #ffffff;
          border-bottom: 1px solid #ffffff;
          right: 15px;
          top: 13px;
          transform: rotate(45deg);
        }
      }
    }
  }
`;
export function Header() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <HeaderStyle>
      <nav>
        <section className="head-nav-left">
          <a onClick={handleClick} href="/#">
            Currency : GBP
          </a>
        </section>
        <section className="head-nav-right clearfix">
          <ul>
            <li><a href="/#">Register</a></li>
            <li><a href="../tenth-page/index.html">Sign In</a></li>
          </ul>
          <section className="head-nav-shop">
            <a href="/#">
              <img src={require("../images/shop.png")} width="15px" height="13px" alt="" />
              <span>empty</span>
            </a>
          </section>
        </section>
      </nav>
    </HeaderStyle>
  );
}
