import { styled } from "styled-components"


export const WholeWapper = styled.div`
  width: 100%;
  min-width: 1311px;
  .line{
    width: 1311px;
    height: 1px;
    background: #eeeeee;
    margin: 46px auto;
  }
`;

export const WebNavStyle = styled.nav`
  width: 1311px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  h1{
    margin-top: 27px;
    a{
      font-size: 18px;
      color: #222222;
      em{
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .np2-right{
    & > ul {
      float: left;
      display: flex;
      margin-top: 25px;
      .active a{
        color: #00c8c8;
      }
      & > li:not(:last-child) {
        margin-right: 40px;
      }
      & > li {
        position: relative;
        &:not(:nth-child(3))::after {
          position: absolute;
          content: "";
          width: 5px;
          height: 5px;
          border-right: 2px solid #989898;
          border-bottom: 2px solid #989898;
          top: 20px;
          left: 2px;
          transform: rotate(45deg);
        }
        &:hover::after {
        border-color: #00c8c8;
        }
        & > a{
          font-size: 10px;
          font-weight: 400;
          color: #222222;
          padding: 10px 0 30px 0;
        }
        &:hover > a{
          color: #00c8c8;
        }
        & > .sub-nav{
          & > ul{
            margin-right: 55px;
            h3{
              font-size: 9px;
              font-weight: 400;
              color: #575153;
              margin-bottom: 20px;
            }
            & > li{
              margin-bottom: 10px;
              a{
                font-family: "ML";
                font-size: 10px;
                font-weight: 300;
                color: #727272;
              }
            }
          }
        }
      }
      li:first-child::after {
        content: "";
        border-color: #00c8c8;
      }
      li > .sub-nav {
        flex-wrap: wrap;
        position: absolute;
        box-sizing: border-box;
        width: 346px;
        height: 415px;
        padding: 20px;
        display: none;
        background: #f8f8f8;
        box-shadow: 0px 13px 18px 0px rgba(0, 0, 0, 0.14);
        top: 30px;
        transition: height 0.4s;
        & > section{
          box-sizing: border-box;
          padding: 40px 39px;
          margin-top: 35px;
          width: 301px;
          height: 148px;
          background: #333333;
          font-family: "MB";
          font-size: 27px;
          font-weight: bold;
          color: #ffffff;
          line-height: 36px;
        }
      }
      li:hover > .sub-nav {
        display: flex;
        z-index: 999;
      }
    }
    .search {
      position: relative;
      float: left;
      margin-left: 80px;
      margin-top: 23px;
      input{
        box-sizing: border-box;
        width: 141px;
        height: 22px;
        background: rgba(248, 248, 248, 0);
        border: 1px solid #e7e7e7;
        outline: none;
        padding: 7px 0 7px 8px;
        &::placeholder {
          font-size: 10px;
          font-weight: 300;
          color: #989898;
        }
      }
      a {
        position: absolute;
        right: 8px;
        top: 4px;
      }
    }
  }
`;

export const ShopListStyle = styled.section`
  width: 1311px;
  margin: 0 auto;
  &::after,
  &::before {
  content: "";
  display: table;
  clear: both;
  }
  & section  div  div i {
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
  }
  & section {
    & > div {
    p{
      position: absolute;
      top: 2%;
      left: 2%;
      font-family: "ML";
      font-size: 16px;
      font-weight: 300;
      color: #9a9a9a;
      sup{
        font-size: 8px;
        vertical-align: super;
      }
    }
    img{
      width: 100%;
    }
    }
  }
  .item1,.item2{
    & > div:hover{
      box-shadow: 0px 13px 18px 0px rgba(0, 0, 0, 0.14);
    }
  }
  .item1{
    width: 644px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 370px 521px;
    display: grid;
    grid-gap: 22px;
    float: left;
    & > div{
      position: relative;
    }
    & > .it1{
      &:hover section {
        display: block;
        box-shadow: 0px 13px 18px 0px rgba(0, 0, 0, 0.14);
        z-index: 99;
      }
      section{
        position: absolute;
        height: 111px;
        width: 311px;
        display: none;
        background-color: #ffffff;
        border-top: 1px solid #eeeeee;
        top: 370px;
        text-align: center;
        h4{
          font-size: 10px;
          font-weight: 400;
          color: #727272;
          margin-bottom: 5px;
          margin-top: 16px;
          sup{
            font-size: 6px;
            vertical-align: super;
          }
        }
        h5{
          font-size: 11px;
          font-family: "RR";
          font-weight: 400;
          color: #8e8c8c;
          line-height: 16px;
        }
        & > div{
          display: flex;
          justify-content: center;
          margin-top: 10px;
          a{
            display: block;
            width: 22px;
            height: 22px;
            margin-right: 15px;
            background-color: #727272;
            color: #fff;
            border-radius: 50%;
            text-align: center;
            &:hover{
              background-color: #00c8c8;
            }
          }
        }
      }
    }
    & > .it2{
      &:hover section{
        display: block;
        box-shadow: 0px 13px 18px 0px rgba(0, 0, 0, 0.14);
        z-index: 99;
      }
      section{
        position: absolute;
        height: 111px;
        width: 311px;
        display: none;
        background-color: #ffffff;
        border-top: 1px solid #eeeeee;
        top: 370px;
        text-align: center;
        h4{
          font-size: 10px;
          font-weight: 400;
          color: #727272;
          margin-bottom: 5px;
          margin-top: 16px;
          sup{
            font-size: 6px;
            vertical-align: super;
          }
        }
        h5{
          font-size: 11px;
          font-family: "RR";
          font-weight: 400;
          color: #8e8c8c;
          line-height: 16px;
        }
        & > div{
          display: flex;
          justify-content: center;
          margin-top: 10px;
          a{
            display: block;
            width: 22px;
            height: 22px;
            margin-right: 15px;
            background-color: #727272;
            color: #fff;
            border-radius: 50%;
            text-align: center;
            &:hover{
              background-color: #00c8c8;
            }
          }
        }
      }
    }
    & > .it3{
      &:hover section{
        display: block;
        box-shadow: 0px 13px 18px 0px rgba(0, 0, 0, 0.14);
        z-index: 99;
      }
      section{
        position: absolute;
        height: 111px;
        width: 644px;
        display: none;
        background-color: #ffffff;
        border-top: 1px solid #eeeeee;
        top: 521px;
        text-align: center;
        h4{
          font-size: 10px;
          font-weight: 400;
          color: #727272;
          margin-bottom: 5px;
          margin-top: 16px;
          sup{
            font-size: 6px;
            vertical-align: super;
          }
        }
        h5{
          font-size: 11px;
          font-family: "RR";
          font-weight: 400;
          color: #8e8c8c;
          line-height: 16px;
        }
        & > div{
          display: flex;
          justify-content: center;
          margin-top: 10px;
          a{
            display: block;
            width: 22px;
            height: 22px;
            margin-right: 15px;
            background-color: #727272;
            color: #fff;
            border-radius: 50%;
            text-align: center;
            &:hover{
              background-color: #00c8c8;
            }
          }
        }
      }
    }
    .it3{
      grid-column: 1 / 3;
    }
  }
  .item2 {
    width: 644px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 521px 370px;
    display: grid;
    grid-gap: 22px;
    float: right;
    & > div{
      position: relative;
    }
    & > div:hover section{
      display: block;
      box-shadow: 0px 13px 18px 0px rgba(0, 0, 0, 0.14);
      z-index: 99;
    }
    .it1 {
      grid-column: 1 / 3;
      p span{
        text-decoration: line-through;
        margin-right: 5px;
      }
    }
    & > .it1{
        section {
          position: absolute;
          height: 111px;
          width: 644px;
          display: none;
          background-color: #ffffff;
          border-top: 1px solid #eeeeee;
          top: 521px;
          text-align: center;
          h4{
            font-size: 10px;
            font-weight: 400;
            color: #727272;
            margin-bottom: 5px;
            margin-top: 16px;
            sup{
              font-size: 6px;
              vertical-align: super;
            }
          }
          h5{
            font-size: 11px;
            font-family: "RR";
            font-weight: 400;
            color: #8e8c8c;
            line-height: 16px;
          }
          & > div{
            display: flex;
            justify-content: center;
            margin-top: 10px;
            a{
              display: block;
              width: 22px;
              height: 22px;
              margin-right: 15px;
              background-color: #727272;
              color: #fff;
              border-radius: 50%;
              text-align: center;
              &:hover{
                background-color: #00c8c8;
              }
            }
          }
        }
      }
    .it2,.it3{
      &:hover .ipg{
        display: block;
        z-index: 99;
      }
      & > a > img:first-child {
        height: 100%;
        object-fit: cover;
        vertical-align: bottom;
      }
      .ip1 {
        position: absolute;
        width: 31px;
        left: 50%;
        margin-left: -15px;
        bottom: 30%;
      }
      .ipg {
        display: none;
        position: absolute;
        right: 5%;
        top: 5%;
        & > div{
          box-sizing: border-box;
          width: 59px;
          height: 74px;
          margin-bottom: 10px;
          &:hover{
            border: 1px solid black;
          }
        }
      }
      section {
        position: absolute;
        height: 111px;
        width: 311px;
        display: none;
        background-color: #ffffff;
        border-top: 1px solid #eeeeee;
        top: 370px;
        text-align: center;
        h4 {
        font-size: 10px;
        font-weight: 400;
        color: #727272;
        margin-bottom: 5px;
        margin-top: 16px;
          sup{
            font-size: 6px;
            vertical-align: super;
          }
        }
        h5{
          font-size: 11px;
          font-family: "RR";
          font-weight: 400;
          color: #8e8c8c;
          line-height: 16px;
        }
        & > div{
          display: flex;
          justify-content: center;
          margin-top: 10px;
          a{
            display: block;
            width: 22px;
            height: 22px;
            margin-right: 15px;
            background-color: #727272;
            color: #fff;
            border-radius: 50%;
            text-align: center;
            &:hover{
              background-color: #00c8c8;
            }
          }
        }
      }
    }
  }
`;