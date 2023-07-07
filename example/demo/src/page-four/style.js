import { styled } from "styled-components";
import "./css/font.css";
export const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 1200px;
  font-family: "Hind", Helvetica, Arial, "Microsoft YaHei", sans-serif;
  .container {
    width: 1200px;
    display: flex;
  }
`;

export const PartLeft = styled.section`
  flex-basis: 400px;
  flex-shrink: 0;
  background-color: #262932;
  padding-top: 49px;
  .myImg {
    margin: 0 auto;
    width: 250px;
    height: 251px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h2 {
    font-size: 24px;
    font-weight: 500;
    color: #f7f7f7;
  }
  .profile {
    padding-left: 56px;
    padding-right: 64px;
    margin-top: 55px;
    p {
      margin-top: 43px;
      font-size: 14px;
      font-weight: 500;
      color: #f7f7f7;
      line-height: 27px;
    }
  }
  .contact {
    padding-left: 55px;
    h2 {
      margin: 56px 0 43px 0;
    }
  }
  .interests {
    padding-left: 55px;
    padding-right: 53px;
    margin-top: 39px;
    margin-bottom: 63px;
    section {
      display: flex;
      justify-content: space-between;
    }
  }
  .social {
    padding-left: 55px;
    h2 {
      margin-bottom: 40px;
    }
  }
  .language {
    padding-left: 56px;
    margin-top: 65px;
    padding-bottom: 40px;
    .lag-list {
      display: flex;
    }
  }
`;

const ConactItemStyle = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  span {
    margin-left: 21px;
    font-size: 19px;
    font-weight: 400;
    color: #f7f7f7;
    display: inline-block;
    margin-top: 5px;
  }
`;
export const ContactItem2 = styled(ConactItemStyle)`
  text-indent: -3px;
  section {
    margin-top: 5px;
    margin-right: 2px;
  }
`;
export function ContactItem({ children }) {
  return <ConactItemStyle>{children}</ConactItemStyle>;
}
export const InsItem = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  div {
    margin-top: 40px;
    margin-bottom: 22px;
  }
  span {
    font-size: 12px;
    font-weight: 400;
    color: #f7f7f7;
  }
`;
export const SocItem = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  img {
    vertical-align: bottom;
  }
  span {
    font-size: 19px;
    font-weight: 400;
    color: #f7f7f7;
    margin-left: 14px;
    margin-top: 8px;
  }
`;
const LagItemStyle = styled.section`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 26px;
    font-weight: 600;
    color: #f7f7f7;
    margin-top: 50px;
    margin-bottom: 35px;
  }
  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #f7f7f7;
    opacity: 0.9;
    margin-bottom: 20px;
  }
  div {
    width: 106px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    padding: 4.5px 5px;
    span {
      display: block;
      width: 93px;
      height: 6px;
      background-color: #d37046;
    }
  }
`;
export const LagItem2 = styled(LagItemStyle)`
  margin-left: 29px;
`;
export function LagItem({ data }) {
  return (
    <LagItemStyle>
      <h3>{data.baifen}</h3>
      <h4>{data.sub}</h4>
      <div>
        <span></span>
      </div>
    </LagItemStyle>
  );
}

export const PartRight = styled.section`
  flex-basis: 800px;
  flex-shrink: 0;
  background-color: #ffffff;
  padding-left: 68px;
  padding-top: 28px;
  & > h2 {
    font-size: 80px;
    font-weight: 400;
    color: #252932;
    font-family: "Did";
  }
  & > h4 {
    font-size: 21px;
    font-weight: 550;
    color: #252932;
    margin-top: 30px;
    margin-bottom: 60px;
  }
  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #252932;
    font-family: "Hindsb";
  }
  .edu-skill {
    display: flex;
    & > div:first-child {
      margin-right: 74px;
      & > h3 {
        margin-bottom: 44px;
      }
    }
    & > div:last-child {
      & > h3 {
        margin-bottom: 40px;
      }
    }
    h4 {
      font-family: "Hindsb";
    }
  }
  .afft {
    margin-top: 58px;

    & > div {
      display: flex;
      padding-right: 78px;
      justify-content: space-between;
      margin-top: 41px;
    }
  }
`;
const EduItemStyle = styled.article`
  display: flex;
  margin-bottom: 40px;
  section {
    width: 217px;
    h4 {
      font-size: 17px;
      font-weight: 600;
      color: #252932;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: #313643;
      opacity: 0.6;
      margin-top: 15px;
    }
  }
  h5 {
    margin-right: 45px;
    font-size: 14px;
    font-weight: 600;
    color: #313643;
    opacity: 0.5;
  }
`;
export function EduItem({ data }) {
  return (
    <EduItemStyle>
      <h5>{data.data}</h5>
      <section>
        <h4>{data.work}</h4>
        <p>{data.school}</p>
      </section>
    </EduItemStyle>
  );
}
export const Skill = styled.section`
  margin-bottom: 15px;
  h4 {
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 15px;
    color: #252932;
  }
  div {
    width: 236px;
    height: 18px;
    border: 2px solid rgba(115, 115, 115, 0.15);
    padding: 4.5px 5px;
    span {
      display: block;
      height: 6px;
      background-color: #f5814e;
    }
  }
`;
export const ExpExt = styled.section`
  display: flex;
  margin-top: 45px;
  & > div:first-child {
    margin-right: 74px;
    & > h3 {
      margin-bottom: 40px;
    }
  }
  & > div:last-child {
    & > h3 {
      margin-bottom: 35px;
    }
  }
  h4 {
    font-family: "Hindsb";
  }
`;
export const AttmRefe = styled(ExpExt)`
  margin-top: 50px;
  & > div:last-child {
    & > h3 {
      margin-bottom: 40px;
    }
  }
`;
export const ExpenceItem = styled.section`
  display: flex;
  margin-bottom: 35px;
  h5 {
    margin-right: 45px;
    font-size: 14px;
    font-weight: 600;
    color: #313643;
    opacity: 0.5;
  }
  div {
    h4 {
      font-size: 17px;
      font-weight: 600;
      color: #252932;
    }
    h6 {
      font-size: 14px;
      font-weight: 600;
      color: #313643;
      opacity: 0.7;
      margin-top: 10px;
      margin-bottom: 13px;
    }
    p {
      width: 217px;
      font-size: 14px;
      font-weight: 400;
      color: #313643;
      line-height: 21px;
      opacity: 0.6;
    }
  }
`;
export const AttmentItem = styled(ExpenceItem)`
  margin-bottom: 0;
  div {
    width: 217px;
    margin-bottom: 40px;
    h4 {
      margin-bottom: 5px;
    }
  }
`;
export const ExptiseItem = styled.section`
  margin-bottom: 30px;
  h4 {
    margin-bottom: 15px;
    font-size: 17px;
    font-weight: 600;
    color: #252932;
  }
  p {
    width: 202px;
    font-size: 14px;
    font-weight: 400;
    color: #313643;
    line-height: 21px;
    opacity: 0.6;
  }
`;
export const RefenceItem = styled.section`
  margin-bottom: 42px;
  h4 {
    font-size: 17px;
    font-weight: 600;
    color: #252932;
    margin-bottom: 14px;
  }
  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: #313643;
    opacity: 0.6;
    margin-bottom: 6px;
  }
`;
