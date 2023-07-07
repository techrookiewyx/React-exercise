import styled from "styled-components";

export const Main = styled.main`
  min-width: 1400px;
`;

export const HeaderTop = styled.section`
  height: 24px;
  background-color: #252833;
  line-height: 24px;
  .head {
    p {
      color: #ebecec;
      font-size: 13px;
    }
  }
`;
export const HeaderBody = styled.section`
  .web-info {
    box-sizing: border-box;
    display: flex;
    height: 90px;
    align-items: center;
    justify-content: space-between;
    padding-left: 35px;
    .logo {
      display: flex;
      align-items: center;
      img {
        width: 69px;
        height: 68px;
      }
      .logo-info {
        color: #02b687;
        margin-left: 16px;
        h2 {
          font-size: 25px;
          margin-top: -10px;
          margin-bottom: 10px;
        }
      }
    }
    .reputation {
      width: 244px;
      height: 68px;
      background-image: url("./images/info.png");
    }
  }
  .adress {
    margin-right: 5px;
    font-size: 17px;
    li {
      margin-bottom: 5px;
      .m1 {
        width: 25px;
        margin-bottom: 2px;
        vertical-align: middle;
        margin-right: 7px;
      }
      .m2 {
        width: 21px;
        vertical-align: middle;
        margin-right: 9px;
      }
    }
    li:nth-child(2) {
      padding-left: 2px;
    }
  }
`;

export const NavWapper = styled.nav`
  background-color: #02b687;
  nav .nav-list {
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    li a {
      font-size: 20px;
      color: #ffffff;
    }
    .m3 {
      width: 17px;
      height: 16px;
      margin-left: 22px;
    }
    .hid-nav {
      padding: 15px 0;
      display: inline-block;
      position: relative;
      .select {
        position: absolute;
        width: 150px;
        right: 0;
        top: 53px;
        background-color: #fff;
        height: 0;
        overflow: hidden;
        transition: 0.4s;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        text-align: center;
        span {
          display: block;
          padding: 10px 0;
          color: #000;
        }
      }
      &:hover .select {
        height: 280px;
        z-index: 555;
      }
    }
  }
`;

export const BackPart = styled.div`
  width: 1400px;
  height: 580px;
  margin: 0 auto;
  margin-top: 59px;
  .picture {
    height: 497px;
    img {
      width: 1400px;
      height: 497px;
    }
  }
  .bg-line {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    li {
      width: 94px;
      height: 9px;
      background-color: #aaaaaa;
      margin: 0 23px;
      &:first-child {
        background-color: #252833;
      }
    }
  }
`;

export const Service = styled.ul`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 152px;
  padding: 0 5px;
  width: 1136px;
  margin: 0 auto;
  & li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-size: 21px;
    color: #02b687;
    cursor: pointer;
    & > img {
      width: 113px;
      height: 113px;
    }
  }
`;

export const BrandItd = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 303px;
  padding: 24px 28px;
  border: 1px solid #e1e1e1;
  & img {
    width: 246px;
    height: 185px;
  }
  p {
    font-size: 18px;
    line-height: 1.2;
    span {
      color: #02b687;
      cursor: pointer;
    }
  }
`;
export const BrandTitle = styled.div`
  font-size: 20px;
  border-left: 6px solid #02b687;
  padding-left: 10px;
  i {
    margin-left: 10px;
    font-style: italic;
    font-size: 12px;
    color: #aaaaaa;
  }
`;
export const BrandTitle2 = styled(BrandTitle)`
  margin-left: 19px;
`;
export const BrandItd2 = styled(BrandItd)`
  width: 560px;
  img {
    margin-top: 28px;
    width: 497px;
    height: 280px;
  }
  .brand-line {
    display: flex;
    margin-left: 102px;
    margin-top: 9px;
    li {
      width: 53px;
      height: 5px;
      margin-right: 27px;
      background-color: #aaaaaa;
      &:first-child {
        background-color: #252833;
      }
    }
  }
`;

export const TechnologyWapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 532px;
  padding: 0 1px;
  width: 1195px;
  margin: 0 auto;
  margin-top: 57px;
  .tech-list {
    display: flex;
    justify-content: space-between;
    .tech-group {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .tech-item3 {
        position: relative;
        height: 240px;
        img {
          width: 387px;
          height: 238px;
        }
        .imgs-p3 {
          position: absolute;
          bottom: 0;
          width: 387px;
          background-color: rgba(5, 187, 139, 0.8);
          height: 78px;
          text-align: center;
          line-height: 78px;
          font-size: 30px;
          color: #fff;
        }
      }
      .imgs-w2 {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
export const TechItem = styled.section`
  position: relative;
  p {
    position: absolute;
    bottom: 0;
    width: 387px;
    background-color: rgba(5, 187, 139, 0.8);
    height: 78px;
    text-align: center;
    line-height: 78px;
    font-size: 30px;
    color: #fff;
  }
  img {
    width: 387px;
    height: 483px;
  }
`;

export const TechItem2 = styled(TechItem)`
  height: 234px;
  p {
    width: 187px;
  }
  img {
    width: 187px;
    height: 234px;
  }
`;
export const Cooperate = styled.section`
  height: 166px;
  width: 1195px;
  margin: 0 auto;
  margin-top: 35px;
  .team-item {
    display: flex;
    margin: 26px 59px 0 54px;
    li {
      float: left;
      margin-right: 23px;
      cursor: pointer;
      img {
        width: 115px;
        height: 68px;
        vertical-align: bottom;
      }
    }
  }
`;
export const Export = styled(Cooperate)`
  margin-top: 57px;
  height: auto;
  .imgs-container {
    width: 100%;
    height: 489px;
    margin-top: 26px;
  }
`;
export const FooterWapper = styled.section`
  height: 284px;
  background-color: #252833;
  .footer {
    display: flex;
    justify-content: center;
    margin-left: -170px;
    li {
      text-align: center;
      color: #fff;
      span {
        display: block;
      }
    }
    .footer-line {
      margin: 62px 58px 0 54px;
      height: 162px;
      width: 1px;
      background-color: #51535c;
    }
    .item-3 {
      margin-top: 58px;
      margin-left: 32px;
      font-size: 21px;
      text-align: left;
      span img {
        vertical-align: middle;
        padding-bottom: 5px;
      }
      .QQ {
        padding-left: 5px;
        margin-top: 14px;
        img {
          width: 37px;
          margin-right: 15px;
          height: 47px;
        }
      }
      .tel img {
        width: 47px;
        height: 39px;
        margin-right: 10px;
      }
      button {
        display: block;
        width: 174px;
        height: 54px;
        line-height: 45px;
        border: 2px solid #fff;
        margin-bottom: 20px;
        background-color: transparent;
        border-radius: 50px;
        color: #fff;
        font-size: 21px;
        cursor: pointer;
        img {
          width: 15px;
          height: 16px;
          margin-left: 15px;
        }
      }
    }
  }
`;
export const FooterItem = styled.li`
  margin-top: 34px;
  img {
    width: 156px;
    height: 150px;
  }
  h3 {
    padding: 15px 0 6px 0;
    font-size: 23.5px;
  }
`;
export const FooterItem2 = styled(FooterItem)`
  margin-top: 28px;
  h3 {
    font-size: 20px;
  }
  img {
    width: 138px;
    height: 138px;
  }
  span {
    line-height: 30px;
    font-size: 20px;
  }
`;
