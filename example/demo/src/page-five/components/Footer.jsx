import { styled } from "styled-components";
const FooterStyle = styled.footer`
  height: 474px;
  .f-bottom {
  height: 33px;
  line-height: 33px;
  background-color: #333333;
    & > footer{
      display: flex;
      justify-content: space-between;
      width: 870px;
      margin: 0 auto;
      height: 33px;
      font-size: 10px;
      font-weight: 400;
      color: #999999;
      & > article:last-child > section {
        float: left;
        margin-left: 30px;
      }
    }
  }
`;
const FooterTopSty = styled.section`
  height: 441px;
  background-color: #f8f8f8;
  & > article{
    display: flex;
    justify-content: space-between;
    width: 870px;
    margin: 0 auto;
    & > section{
      margin-top: 47px;
      h3{
        font-size: 10px;
        font-weight: 400;
        color: #575153;
        margin-bottom: 17px;
      }
      & > p {
        margin-bottom: 10px;
      }
      & > a{
        line-height: 15px;
        &:nth-child(2) {
          margin-top: -4px;
        }
        &:nth-child(3) {
          margin-bottom: 17px;
        }
      }
      &  a{
        display: block;
        font-family: "ML";
        font-size: 10px;
        font-weight: 300;
        color: #727272;
      }
    }
  }
  .tuiguang {
  display: flex;
  justify-content: space-between;
  width: 870px;
  margin: 0 auto;
  margin-top: 35px;
    & > section{
      width: 422px;
      height: 148px;
      & > h3{
        margin-bottom: 10px;
        font-family: "MB";
        font-size: 27px;
      }
      p{
        font-family: "ML";
        font-size: 27px;
        font-weight: 300;
        opacity: 0.9;
      }
      &:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #333333;
        text-align: center;
        color: #ffffff;
      }
      &:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #00c8c8;
        & > a{
          margin-right: 35px;
          img{
            height: 25px;
            vertical-align: middle;
          }
        }
      }
    }
  }
`;
function FooterTop() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <FooterTopSty>
      <article>
            <section>
              <h3>INFORMATION</h3>
              <p><a onClick={handleClick} href="/#">The brand</a></p>
              <p><a onClick={handleClick} href="/#">Local stores</a></p>
              <p><a onClick={handleClick} href="/#">Customer service</a></p>
              <p><a onClick={handleClick} href="/#">Privacy & cookies</a></p>
              <p><a onClick={handleClick} href="/#">Site map</a></p>
            </section>
            <section>
              <h3>WHY BUY FROM US</h3>
              <p><a onClick={handleClick} href="/#">Shipping & returns</a></p>
              <p><a onClick={handleClick} href="/#">Secure shopping</a></p>
              <p><a onClick={handleClick} href="/#">Testimonials</a></p>
              <p><a onClick={handleClick} href="/#">Award winning</a></p>
              <p><a onClick={handleClick} href="/#">Ethical trading</a></p>
            </section>
            <section>
              <h3>YOUR ACCOUNT</h3>
              <p><a href="../tenth-page/index.html">Sign in</a></p>
              <p><a onClick={handleClick} href="/#">Register</a></p>
              <p><a onClick={handleClick} href="/#">View cart</a></p>
              <p><a onClick={handleClick} href="/#">View your lookbook</a></p>
              <p><a onClick={handleClick} href="/#">Track an order</a></p>
              <p><a onClick={handleClick} href="/#">Update information</a></p>
            </section>
            <section>
              <h3>LOOKBOOK</h3>
              <p><a onClick={handleClick} href="/#">Latest posts</a></p>
              <p><a onClick={handleClick} href="/#">Men’s lookbook</a></p>
              <p><a onClick={handleClick} href="/#">Women’s lookbook</a></p>
              <p><a onClick={handleClick} href="/#">Lookbooks RSS feed</a></p>
              <p><a onClick={handleClick} href="/#">View your lookbook</a></p>
              <p><a onClick={handleClick} href="/#">Delete your lookbook</a></p>
            </section>
            <section>
              <h3>COUNT DETAILS</h3>
              <a onClick={handleClick} href="/#">Head Office: Avenue Fashion,</a>
              <a onClick={handleClick} href="/#">180-182 Regent Street, London.</a>
              <p><a href="tel:0123-456-789">Telephone: 0123-456-789</a></p>
              <p><a href="mailto:support@yourwebsite.com">Email: support@yourwebsite.com</a></p>
            </section>
    </article>
          <div className="tuiguang">
            <section>
              <h3>AWARD WINNER</h3>
              <p>FASHION AWARDS 2016</p>
            </section>
            <section>
              <a onClick={handleClick} href="/#"><img src={require("../images/1.png")} alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/2.png")} alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/3.png")} alt="" /></a>
              <a onClick={handleClick} href="/#"><img src={require("../images/4.png")} alt="" /></a>
            </section>
          </div>
    </FooterTopSty>
  )
}
export function Footer() { 
  return (
    <FooterStyle>
      <FooterTop />
      <section className="f-bottom">
          <footer>
            <article>
              <section>© 2016 Avenue Fashion™</section>
            </article>
            <article>
              <section>Design by RobbyDesigns.com</section>
              <section>Dev by Loremipsum.com</section>
            </article>
          </footer>
      </section>
    </FooterStyle>
  )
}