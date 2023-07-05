import { styled } from "styled-components";

export const RightSide = styled.section`
  background-color: #f2f2f2;
  .job {
    display: flex;
    justify-content: space-between;
    padding: 32px 28.8px 28px 11px;
    .job-icon {
      height: 48px;
      width: 54.4px;
      background-color: #ffffff;
      img {
        height: 40px;
        width: 39px;
        margin-top: 1px;
        margin-left: 8px;
      }
    }
    .job-search {
      position: relative;
      width: 837.6px;
      background-color: #ffffff;
      height: 48px;
      line-height: 48px;
      &::after {
        position: absolute;
        content: "";
        border-width: 11px;
        border-style: solid;
        top: 24px;
        right: 63.2px;
        border-color: #1c242f transparent transparent;
      }
      .purpose {
        display: block;
        float: left;
        padding-left: 16px;
        font-size: 31.2px;
      }
      .experience {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 43.2px;
        width: 504px;
        font-size: 24.8px;
      }
    }
  }
  .info {
    padding: 44px 77.7px 0 75px;
    background-color: #ffffff;
    .info-items3 {
      .itm3-content {
        margin-top: 42.4px;
        .i3-t1 {
          display: flex;
          font-size: 25.6px;
          font-weight: 500;
          margin-bottom: 25.5px;
          h3:first-child {
            margin-right: 168px;
          }
        }
        .i3-t2 {
          font-size: 25.6px;
          font-weight: 500;
          margin-bottom: 25.6px;
          overflow: hidden;
          .left {
            float: left;
          }
          .right {
            float: right;
            margin-right: 116px;
          }
        }
        .i3-c1 {
          padding-bottom: 35.2px;
          font-weight: 500;
          p {
            font-size: 21.5px;
            margin-bottom: 18.4px;
            span {
              font-size: 20px;
            }
          }
        }
        .i3-c2 {
          padding-bottom: 58.4px;
          p {
            margin-bottom: 18.4px;
            font-weight: 500;
            font-size: 21.6px;
            span {
              margin-left: 52.8px;
            }
          }
          &:last-child {
            padding-bottom: 83.2px;
          }
        }
      }
    }
  }
`;

export const EduInfoItem = styled.section`
  .contact {
    margin-top: 21.5px;
    padding-bottom: 70.5px;
  }
  .i4-c1 {
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    padding-left: 14.4px;
    padding-bottom: 30px;
    div {
      display: flex;
      justify-content: space-between;
      font-size: 25.6px;
      letter-spacing: 4px;
      margin-bottom: 16.8px;
      color: #1c242f;
      font-weight: 500;
    }
  }
`;

const EduContentStyle = styled.div`
  display: flex;
  h3 {
    font-size: 25.5px;
    font-weight: 500;
    line-height: 40px;
    &:nth-child(2) {
      margin-left: 40px;
    }
    &:nth-child(3) {
      margin-left: 68.8px;
      margin-right: 43.2px;
    }
  }
`;
const EduContentStyle2 = styled(EduContentStyle)`
  margin-bottom: 26.6px;
  h3 {
    &:nth-child(3) {
      margin-left: 176.8px;
    }
  }
`;
export function EduContent({ children }) {
  return <EduContentStyle>{children}</EduContentStyle>;
}
export function EduContent2({ children }) {
  return <EduContentStyle2>{children}</EduContentStyle2>;
}
export const EduInfoItem2 = styled(EduInfoItem)`
  .contact {
    padding-bottom: 24px;
    .intro {
      padding-left: 186.4px;
      font-size: 20px;
      p {
        margin-bottom: 18.4px;
        font-weight: 500;
      }
    }
  }
  .two {
    padding-bottom: 60px;
    margin-top: -8px;
  }
`;
