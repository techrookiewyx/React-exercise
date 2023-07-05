import { styled } from "styled-components";
export const Continer = styled.div`
  display: grid;
  grid-template-columns: 384.8px 936.8px;
  position: relative;
  width: 1321.6px;
  height: 1868.8px;
`;

export const LeftSide = styled.section`
  background-color: #2b3747;
  .myImg {
    padding-top: 92.8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & div {
      width: 276px;
      height: 276px;
      border-radius: 50%;
      background-color: #607c9f;
    }
    & h2 {
      margin-top: 36px;
      color: #f0fdfb;
      font-size: 52px;
      font-weight: 500;
      letter-spacing: 8px;
    }
  }
  .prsn-info {
    margin-top: 88.8px;
    color: white;
    text-align: center;
    font-size: 28px;
  }
  .skills {
    margin-top: 191.2px;
    h3{
      text-align: center;
      font-size: 42.4px;
      color: #ffffff;
      letter-spacing: 8px;
      margin-bottom: 63.2px;
    }
    ul{
      padding: 0 58.4px 0 50.4px;
    }
  }
`;

const StyleInfoItem = styled.li`
  /* Adapt the colors based on primary prop */
  position: relative;
  height: 93.6px;
  line-height: 93.6px;
  border-bottom: 2px solid #969ca4;
  cursor: pointer;
  background-color:${props => props.$hight ? '#ffdb63' : '#2b3747'};
  color: ${props => props.$hight ? '#010101' : '#fff'};
  text-indent: ${props => props.$hight ? '-56px' : '0'};
  &::before {
    position: absolute;
    content: "";
    top: 32.8px;
    left: 45.6px;
    width: ${props => props.$hight ? '0' : '29.6px'};
    height: 29.6px;
    background-color: #ffffff;
    border-radius: 50%;
  }
  img {
    position: absolute;
    top: 28px;
    right: 39.2px;
    height: 40px;
    width: 21px;
  }
`;

export function InfoItem({ children,hitghLightId,info,onHover }) {
  return (
    <div
      onPointerMove={() => { onHover(info.id) }}
    >
    <StyleInfoItem $hight={hitghLightId}>
      {children}
    </StyleInfoItem>
    </div>
  );
}

export const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 44.8px;
  margin-bottom: 12.8px;
  span{
    color: #ffffff;
    letter-spacing: 3.2px;
    font-size: 20px;
  }
  div{
    width: 100%;
    height: 17.6px;
    background-color: #fff;
    span {
      display: inline-block;
      height: 17.6px;
      background-color: #feda62;
    }
  }
`;