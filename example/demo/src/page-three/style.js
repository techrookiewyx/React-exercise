import { styled } from "styled-components";
import Bg from "./images/bg.jpg";
import Lay44 from "./images/Layer44.jpg";
import disbg from "./images/displaybg.jpg";
import Lay53 from "./images/Layer53.jpg";
import Lay59 from "./images/Layer59.jpg";
export const Main = styled.main`
  width: 100%;
  min-width: 960px;
  .about {
    height: 595px;
    text-align: center;
    & > span {
      display: block;
      font-size: 12px;
      font-weight: 400;
      color: #999999;
      line-height: 19px;
    }
    .ab-imglist {
      display: flex;
      justify-content: space-between;
      margin-top: 80px;
    }
  }
  .count-wapper {
    height: 214px;
    background: #95e1d3;
    .counts {
      display: flex;
    }
  }
  .work {
    height: 516px;
  }
  .who {
    height: 832px;
    & > span {
      display: block;
      font-size: 12px;
      font-weight: 400;
      color: #999999;
      line-height: 19px;
      text-align: center;
    }
    .wimglist {
      display: flex;
      justify-content: space-between;
      margin-top: 73px;
    }
  }
  .device-wapper {
    position: relative;
    height: 674px;
    background: url(${disbg}) no-repeat center top;
    background-size: 100% 100%;
    & > img {
      position: absolute;
      vertical-align: bottom;
      top: 369px;
      left: 55%;
      margin-left: 7px;
    }
  }
  .service {
    height: 714px;
    & > span {
      display: block;
      font-size: 12px;
      font-weight: 400;
      color: #999999;
      line-height: 19px;
      text-align: center;
    }
    .sersw {
      display: flex;
      justify-content: space-between;
      margin-top: 70px;
      section {
        width: 476px;
        height: 301px;
        .c2 {
          position: relative;
          box-sizing: border-box;
          height: 142px;
          padding: 12px 44px 22px 16px;
          border: 1px solid #e5e5e5;
          border-top: none;
          p {
            font-size: 12px;
            color: #999999;
            line-height: 17px;
          }
          div {
            position: absolute;
            width: 4px;
            height: 111px;
            background: #f5f5f5;
            border-radius: 2px;
            top: 17px;
            right: 20px;
            span {
              position: absolute;
              top: 0px;
              right: 0px;
              width: 4px;
              height: 71px;
              background: #95e1d3;
              border-radius: 2px;
            }
          }
        }
      }
    }
  }
  .brand-wapper {
    height: 198px;
    background-color: #f8f8f8;
    .brand {
      height: 198px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 6px;
    }
  }
  .what {
    min-height: 1290px;
    margin: 0 auto;
    & > span {
      display: block;
      font-size: 12px;
      font-weight: 400;
      color: #999999;
      line-height: 19px;
      text-align: center;
    }
  }
  .happy-wapper {
    height: 656px;
    background: url(${Lay53}) no-repeat;
    background-size: 100% 100%;
    .minglist {
      display: flex;
      padding-left: 32px;
      justify-content: space-between;
    }
  }
  .story {
    height: 609px;
  }
  .map {
    height: 158px;
    background: url(${Lay59}) no-repeat;
    background-size: 100% 100%;
  }
  footer {
    background: #f8f8f8;
    height: 443px;
    .bottom {
      line-height: 47px;
      text-align: center;
      font-size: 11px;
      font-weight: 600;
      color: #333333;
      span {
        color: #f38181;
      }
    }
  }
  .fenge {
    width: 952px;
    height: 1px;
    background: #e5e5e5;
    margin: 40px 0;
  }
`;
export const Header = styled.header`
  position: relative;
  min-height: 793px;
  background: url(${Bg}) no-repeat center top;
  background-size: 100% 100%;
  .bgt {
    position: absolute;
    width: 636px;
    left: 50%;
    top: 284px;
    margin-left: -318px;
    h2 {
      margin: 0;
      padding: 0;
      text-align: center;
      color: #ffffff;
      font-size: 119px;
      font-weight: bold;
      &:last-child {
        text-indent: 20px;
      }
    }
  }
  .heng {
    position: absolute;
    left: 50%;
    margin-left: -25px;
    top: 537px;
    width: 48px;
    height: 2px;
    background: #ffffff;
  }
  .btn {
    position: absolute;
    left: 50%;
    margin-left: -65px;
    top: 579px;
    a {
      display: block;
      padding: 12px 26px;
      border: 2px solid #ffffff;
      color: #ffffff;
      font-size: 11px;
      font-weight: bold;
    }
  }
  .top-nav {
    display: flex;
    justify-content: space-between;
    & > div {
      margin-top: 22px;
      a {
        color: #ffffff;
        font-size: 24px;
        font-weight: bold;
      }
    }
    ul {
      display: flex;
      height: 60px;
      line-height: 73px;
    }
    & > ul {
      li {
        margin-left: 44px;
        &:first-child {
          a {
            color: #fce38a;
            border-bottom: 2px solid #fce38a;
            padding-bottom: 10px;
          }
        }
        &:last-child {
          margin-top: 1px;
          margin-left: 33px;
        }
        a {
          color: #ffffff;
          font-size: 11px;
          img {
            vertical-align: baseline;
          }
        }
      }
    }
  }
  .serve {
    position: absolute;
    display: flex;
    justify-content: space-between;
    height: 58px;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 0;
  }
`;
const ServeItemStyle = styled.div`
  & > div {
    position: relative;
    width: 222px;
    height: 2px;
    background: #ffffff;
    opacity: 0.5;
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 56px;
      height: 2px;
      background: #f38181;
    }
  }
  & h4 {
    margin-top: 20px;
    color: #ffffff;
    font-size: 19px;
    font-weight: Bold;
    span {
      font-size: 14px;
      font-weight: normal;
    }
  }
`;
export const ServeItem1 = styled(ServeItemStyle)`
  & > div {
    opacity: 1;
  }
`;
export function ServeItem({ children }) {
  return <ServeItemStyle>{children}</ServeItemStyle>;
}
const DescStyle = styled.div`
  text-align: center;
  div {
    margin-top: 72px;
  }
  h3 {
    margin-top: 18px;
    font-size: 24px;
    font-weight: bold;
    color: #333333;
  }
  .line {
    width: 48px;
    height: 2px;
    background: #f38181;
    margin: 32px auto 37px;
  }
`;
export function Desription({ children }) {
  return <DescStyle>{children}</DescStyle>;
}

const EvmStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  div:first-child {
    position: relative;
    width: 301px;
    height: 198px;
    background: #95e1d3;
    img {
      position: absolute;
      top: 75px;
      left: 130px;
      z-index: 5;
    }
    span {
      position: absolute;
      top: 101px;
      left: 95px;
      z-index: 5;
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
    }
    div {
      position: absolute;
      width: 301px;
      height: 198px;
      background: url(${Lay44}) no-repeat top;
      background-size: 100% 100%;
      top: -8px;
      left: -8px;
      z-index: 3;
    }
  }
`;
export function ShowEvm() {
  return (
    <EvmStyle>
      <div>
        <div></div>
        <img src={require("./images/USERS.png")} width="25px" alt="" />
        <span>SUPER TEAM</span>
      </div>
      <div>
        <img src={require("./images/ab2.jpg")} width="301px" alt="" />
      </div>
      <div>
        <img src={require("./images/ab1.jpg")} width="301px" alt="" />
      </div>
    </EvmStyle>
  );
}

const ResItemStyle = styled.li`
  width: 190px;
  text-align: center;
  color: #ffffff;
  height: 214px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  h3 {
    font-size: 57px;
    font-weight: bold;
    margin: 60px 0 13px 0;
  }
  span {
    font-size: 11px;
    font-weight: 400;
  }
`;
export const ResItemlst = styled(ResItemStyle)`
  border-right: 1px solid rgba(255, 255, 255, 0.3);
`;
export function ResItem({ children }) {
  return <ResItemStyle>{children}</ResItemStyle>;
}

export const FuList = styled.div`
  padding: 0 22px 0 24px;
  display: flex;
  justify-content: space-between;
  img {
    width: 25px;
  }
  article {
    display: flex;
    section {
      margin-left: 23px;
      h4 {
        font-size: 11px;
        font-weight: 400;
        color: #333333;
        margin-bottom: 7px;
      }
      span {
        display: block;
        font-size: 12px;
        font-weight: 400;
        color: #999999;
        line-height: 19px;
      }
    }
  }
`;

const SerswItemStyle = styled.div`
  position: relative;
  height: 46px;
  line-height: 46px;
  padding: 0 0 0 13px;
  border: 1px solid #e5e5e5;
  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-top: 3px solid #cccccc;
    border-right: 3px solid #cccccc;
    transform: rotate(-45deg);
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  div {
    img {
      display: block;
      float: left;
      margin-top: 12px;
      margin-right: 12px;
    }
    span {
      font-size: 11px;
      font-weight: 400;
      color: #333333;
    }
  }
`;
export const SerswItem2 = styled(SerswItemStyle)`
  margin-top: 10.5px;
  &::after {
    transform: rotate(135deg);
    top: 14px;
  }
`;
export function SerswItem({ children }) {
  return <SerswItemStyle>{children}</SerswItemStyle>;
}

export const TipWapper = styled.section`
  height: 230px;
  background: #f8f8f8;
  .tip {
    position: relative;
    display: flex;
    section {
      border: 2px solid #95e1d3;
      margin: 56px 48px 56px 87px;
      img {
        margin: 36px 34px 35px 35px;
      }
    }
    div {
      & > p {
        width: 608px;
        height: 76px;
        font-size: 19px;
        font-weight: normal;
        color: #999999;
        line-height: 29px;
        margin: 63px 0 35px 0;
      }
      & > span {
        display: block;
        float: left;
        width: 48px;
        height: 2px;
        background: #f38181;
        margin-right: 8px;
      }
      img {
        display: block;
        margin-top: -8px;
      }
    }
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      border-top: 3px solid #cccccc;
      border-right: 3px solid #cccccc;
      transform: rotate(45deg);
      top: 107px;
      right: 18px;
      cursor: pointer;
    }
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      border-top: 3px solid #cccccc;
      border-right: 3px solid #cccccc;
      transform: rotate(-135deg);
      top: 107px;
      left: 18px;
      cursor: pointer;
    }
  }
`;
export const TipWapper2 = styled(TipWapper)`
  height: auto;
  background-color: #fff;
  .tip {
    & > p {
      margin: 79px 25px 100px 63px;
    }
    div {
      & > p {
        margin: 111px 0 35px 0;
      }
      img {
        margin-top: -11px;
      }
    }
    &::before,
    &::after {
      top: 154px;
    }
  }
`;
const WingItemStyle = styled.section`
  position: relative;
  text-align: center;
  div {
    position: relative;
    width: 301px;
    height: 373px;
    background: #95e1d3;
    img {
      position: absolute;
      top: -8;
      left: -8px;
    }
  }
  section {
    position: absolute;
    top: 164px;
    left: 54px;
    a {
      display: block;
      float: left;
      width: 44px;
      height: 44px;
      background: #fce38a;
      z-index: 10;
      &:not(.active) {
        margin-right: 1px;
      }
      img {
        margin-top: 14px;
      }
    }
    .active {
      background-color: #f38181;
    }
  }
  h5 {
    font-size: 11px;
    font-weight: 400;
    color: #333333;
    margin-top: 25px;
    margin-bottom: 3px;
  }
  span {
    font-size: 12px;
    font-weight: normal;
    color: #999999;
  }
`;

export const WimgItem2 = styled(WingItemStyle)`
  cursor: pointer;
`;
export function WimgItem({ children }) {
  return <WingItemStyle>{children}</WingItemStyle>;
}
export const WtImgList = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 76px;
  & > img {
    width: 25%;
  }
  & > div {
    &:first-child {
      display: flex;
      flex-wrap: wrap;
      width: 50%;
      img {
        width: 50%;
      }
    }
    &:last-child {
      width: 25%;
      display: flex;
      flex-direction: column;
      img {
        width: 100%;
      }
    }
  }
`;
export const FamousItem = styled.div`
  display: flex;
  margin-bottom: 55px;
  section {
    margin-right: 24px;
  }
  article {
    h4 {
      margin-top: 9px;
      font-size: 14px;
      font-weight: 600;
      color: #333333;
    }
    h5 {
      font-size: 12px;
      font-weight: normal;
      color: #333333;
      margin-top: 12px;
      margin-bottom: 13px;
    }
    span {
      display: block;
      width: 47px;
      height: 2px;
      background: #f38181;
      margin-bottom: 15px;
    }
    p {
      width: 295px;
      font-size: 12px;
      font-weight: 400;
      color: #999999;
      line-height: 19px;
    }
  }
`;
export const StItem = styled.section`
  position: relative;
  width: 301px;
  & > span {
    display: block;
    width: 301px;
    height: 1px;
    background: #e5e5e5;
    margin-bottom: 10px;
  }
  img {
    vertical-align: middle;
  }
  section {
    img {
      width: 100%;
    }
    & > div {
      position: absolute;
      top: 120px;
      left: -8px;
      text-align: center;
      padding: 12px;
      background: #95e1d3;
      div {
        font-size: 24px;
        font-weight: bold;
        color: #ffffff;
      }
      i {
        font-size: 15px;
        font-style: italic;
        color: #ffffff;
      }
    }
  }
  div {
    span {
      font-size: 12px;
      font-weight: normal;
      color: #999999;
      line-height: 19px;
      margin: 0 15px 0 6px;
    }
    img {
      cursor: pointer;
    }
  }
  h4 {
    font-size: 12px;
    font-weight: bold;
    color: #333333;
    margin-top: 16px;
  }
  p {
    width: 302px;
    font-size: 12px;
    font-weight: 400;
    color: #999999;
    line-height: 19px;
    margin: 16px 0;
    word-break: break-all;
  }
`;
const MapInfoStyle = styled.div`
  text-align: center;
  margin-top: 45px;
  h4 {
    font-size: 19px;
    font-weight: bold;
    color: #f38181;
    margin: 14px 0 17px 0;
  }
  span {
    display: block;
    width: 47px;
    height: 2px;
    background: #f38181;
    margin: 0 auto;
  }
`;
export function MapInfo() {
  return (
    <MapInfoStyle>
      <img src={require("./images/PIN2.png")} width="15px" alt="" />
      <h4>POEN MAP</h4>
      <span></span>
    </MapInfoStyle>
  );
}
export const FooterTopPart = styled.section`
  height: 395px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  .left {
    padding-top: 50px;
    h2 {
      font-size: 36px;
      font-weight: bold;
      color: #cccccc;
    }
    p {
      width: 365px;
      font-size: 12px;
      font-weight: 400;
      color: #999999;
      line-height: 19px;
      margin: 20px 0 29px 0;
    }
    & > span {
      display: block;
      width: 380px;
      height: 1px;
      background: #e5e5e5;
      margin: 10px 0;
    }
    h4 {
      font-size: 18px;
      font-weight: bold;
      color: #333333;
      & > span {
        font-size: 14px;
      }
    }
    div {
      i {
        font-size: 12px;
        font-style: italic;
        font-weight: normal;
        color: #999999;
        margin-right: 10px;
      }
      a {
        img {
          height: 12px;
          vertical-align: middle;
          margin-right: 8px;
        }
      }
    }
    form {
      margin-top: 30px;
      input {
        float: left;
        outline: none;
        background: #ffffff;
        border: 1px solid #e7e7e7;
        width: 172px;
        height: 32px;
        padding-left: 10px;
        &::placeholder {
          font-size: 12px;
          font-weight: normal;
          color: #cccccc;
          line-height: 19px;
        }
      }
      button {
        width: 119px;
        height: 32px;
        font-size: 11px;
        font-weight: bold;
        color: #ffffff;
        border: none;
        outline: none;
        float: left;
        background: #95e1d3;
        cursor: pointer;
      }
    }
  }
  .center,
  .right {
    padding-top: 60px;
    h4 {
      font-size: 11px;
      font-weight: 500;
      color: #333333;
      margin-bottom: 35px;
    }
  }
  .right {
    .rimg-list {
      display: grid;
      grid-template-columns: repeat(3, 70px);
      grid-template-rows: repeat(3, 70px);
      grid-gap: 2px 2px;
      img {
        width: 70px;
        vertical-align: bottom;
      }
    }
    p {
      font-size: 10px;
      font-weight: normal;
      color: #333333;
      font-style: italic;
      margin-top: 16px;
    }
  }
`;
export const FootCenterItem = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  div img {
    cursor: pointer;
  }
  section {
    margin-left: 16px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #333333;
    line-height: 15px;
  }
  span {
    font-size: 13px;
    color: #999999;
    line-height: 25px;
  }
`;
