import { styled } from "styled-components";
import { ShopListStyle } from "../style";
const fivedata = [
  {
    id: 0,
    cont:'POPULAR'
  },
  {
    id: 1,
    cont:'NEW ARRIVALS'
  },
  {
    id: 2,
    cont:'BEST SELLERS'
  },
  {
    id: 3,
    cont:'SPECIAL OFFERS'
  },
  {
    id: 4,
    cont:'COMING SOON'
  },
];

const ShopNavStyle = styled.nav`
  & > ul{
    display: flex;
    margin-bottom: 45px;
    li{
      margin-right: 37px;
      a{
        font-size: 10px;
        font-weight: 400;
        color: rgb(114, 114, 114);
      }
      &:hover a{
        color: #00c8c8;
      }
      &:first-child a {
      color: #00c8c8;
      }
    }
  }
`;
function ShopNav({data,onClick}) { 
  return (
    <ShopNavStyle>
      <ul>
        {data.map(ele =>
          <li key={ele.id}><a onClick={onClick} href="/#">{ele.cont}</a></li>
        )}
      </ul>
    </ShopNavStyle>
  )
}
export function ShopList() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <ShopListStyle>
    <ShopNav data={fivedata} onClick={handleClick} />
    <section className="item1">
        <div className="it1">
        <a onClick={handleClick} href="/#"><img src={require("../images/item1.jpg")} alt="" /></a>
          <p><sup>£</sup>89.99</p>
          <section className="clearfix">
            <h4>WOMENS BURNT ORANCE CASUAL TEE <sup>£</sup>29.95</h4>
            <h5>Classic casual t-shirt for women on the move.</h5>
            <h5>100% cotton.</h5>
            <div>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-31gouwuchexuanzhong"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-aixin"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-suoxiao"></i></a>
            </div>
          </section>
        </div>
        <div className="it2">
          <a onClick={handleClick} href="/#"><img src={require("../images/item2.jpg")} alt="" /></a>
          <p><sup>£</sup>47.50</p>
          <section className="clearfix">
            <h4>WOMENS BURNT ORANCE CASUAL TEE <sup>£</sup>29.95</h4>
            <h5>Classic casual t-shirt for women on the move.</h5>
            <h5>100% cotton.</h5>
            <div>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-31gouwuchexuanzhong"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-aixin"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-suoxiao"></i></a>
            </div>
          </section>
        </div>
        <div className="it3">
          <a onClick={handleClick} href="/#"><img src={require("../images/item3.jpg")} alt="" /></a>
          <p><sup>£</sup>69.95</p>
          <section className="clearfix">
            <h4>WOMENS BURNT ORANCE CASUAL TEE <sup>£</sup>29.95</h4>
            <h5>Classic casual t-shirt for women on the move.</h5>
            <h5>100% cotton.</h5>
            <div>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-31gouwuchexuanzhong"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-aixin"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-suoxiao"></i></a>
            </div>
          </section>
        </div>
    </section>
    <section className="item2">
        <div className="it1">
          <a onClick={handleClick} href="/#"><img src={require("../images/item4.jpg")} alt="" /></a>
          <p><sup>£</sup><span>107</span> <sup>£</sup>89.99</p>
          <section className="clearfix">
            <h4>WOMENS BURNT ORANCE CASUAL TEE <sup>£</sup>29.95</h4>
            <h5>Classic casual t-shirt for women on the move.</h5>
            <h5>100% cotton.</h5>
            <div>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-31gouwuchexuanzhong"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-aixin"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-suoxiao"></i></a>
            </div>
          </section>
        </div>
        <div className="it2">
          <a onClick={handleClick} href="/#"><img src={require("../images/photo.jpg")} alt="" /></a>
          <img className="ip1" src="./images/i.png" alt="" />
          <div className="ipg">
          <div className="ip2"><img src={require("../images/thumb-front.jpg")} alt="" /></div>
          <div className="ip3"><img src={require("../images/thumb-back.jpg")} alt="" /></div>
          </div>
          <p><sup>£</sup>29.95</p>
          <section className="clearfix">
            <h4>WOMENS BURNT ORANCE CASUAL TEE <sup>£</sup>29.95</h4>
            <h5>Classic casual t-shirt for women on the move.</h5>
            <h5>100% cotton.</h5>
            <div>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-31gouwuchexuanzhong"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-aixin"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-suoxiao"></i></a>
            </div>
          </section>
        </div>
        <div className="it3">
          <a onClick={handleClick} href="/#"><img src={require("../images/item6.jpg")} alt="" /></a>
          <p><sup>£</sup>34.79</p>
          <section className="clearfix">
            <h4>WOMENS BURNT ORANCE CASUAL TEE <sup>£</sup>29.95</h4>
            <h5>Classic casual t-shirt for women on the move.</h5>
            <h5>100% cotton.</h5>
            <div>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-31gouwuchexuanzhong"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-aixin"></i></a>
              <a onClick={handleClick} href="/#"><i className="iconfont icon-suoxiao"></i></a>
            </div>
          </section>
        </div>
    </section>
  </ShopListStyle>
  )
}