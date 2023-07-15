import { Link } from "react-router-dom";
import { styled } from "styled-components";
const UlWapp = styled.ul`
  width: 1000px;
  display: flex;
  margin : 10px auto;
  justify-content: space-around;
  li{
    a{
      color: #222222;
      &:hover{
        color: #00c8c8;
      }
    }
  }
`;
export default function PageList() { 
  return (
    <UlWapp>
      <li><Link to='/page-five'>主页面</Link></li>
      <li><Link to='six'>页面六</Link></li>
      <li><Link to='seven'>页面七</Link></li>
      <li><Link to='eight'>页面八</Link></li>
      <li><Link to='nine'>页面九</Link></li>
      <li><Link to='ten'>页面十</Link></li>
    </UlWapp>
  )
}