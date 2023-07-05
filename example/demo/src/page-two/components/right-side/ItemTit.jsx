import { styled } from "styled-components";
export const ItemTit = styled.section`
  position: relative;
  height: 45.5px;
  .txt {
    position: absolute;
    line-height: 45.5px;
    letter-spacing: 3.2px;
    font-size: 38px;
    z-index: 5;
    color: #ffffff;
    left: 20px;
  }
  .square {
  position: absolute;
  width: 584px;
  height: 11px;
  left: 197.5px;
  z-index: 3;
  top:1px;
  background-image: linear-gradient(#8a8a8a, #343434);
}
`;

export const Parallelogram = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  transform: skewX(-30deg);
  width: 200px;
  height: 45.5px;
  text-align: center;
  background-color: #2b3747;
`;
export const Parallelogram2 = styled(Parallelogram)`
  left: 52px;
  background-color: #feda62;
  z-index: 0;
`;
