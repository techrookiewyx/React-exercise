import { 
  Main,
  HeaderTop,
  HeaderBody, 
  NavWapper,
  BackPart,
  Service,
  BrandItd,
  BrandTitle, 
  BrandItd2,
  TechnologyWapper,
  BrandTitle2,
  TechItem,
  TechItem2,
  Cooperate,
  FooterWapper,
  FooterItem,
  FooterItem2,
  Export
} from "./style";
import './css/reset.css'
import Info from "./images/info.png";
import p1 from './css/page.module.css';
import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
const infoStyle = {
  width: "244px",
  height: "68px",
  backgroundImage: `url(${Info})`,
};
export default function PageOne() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <Main>
      <header>
        <HeaderTop>
          <section className={`head ${p1.w}`}>
            <p>您好，欢迎访问北京友爱口腔专科官方网站！我院已开设网上挂号通道，请您提前预约！</p>
          </section>
        </HeaderTop>
        <HeaderBody>
          <div className={`web-info ${p1.w1}`}>
            <div className="logo">
              <img src={require("./images/logo.png")} alt="" />
              <div className="logo-info">
                <h2>北京友爱口腔医院</h2>
                <span>Beijing Youai Mouth Hospital</span>
              </div>
            </div>
            <div className="reputation" style={infoStyle}></div>
            <ul className="adress">
              <li>
                <img className="m1" src={require("./images/tel.png")} alt="" />
                4006-897-120
              </li>
              <li>
                <img className="m2" src={require("./images/QQ.png")} alt="" />
                800107722
              </li>
              <li>门诊时间：09:00-18:00</li>
            </ul>
          </div>
        </HeaderBody>
      </header>
      <NavWapper>
        <nav className={p1.w}>
          <ul className="nav-list">
            <li className="items">
              <a className="hid-nav" href="/#">
                病种导航
                <img className="m3" src={require('./images/jian.png')} alt="" />
                <div className="select">
                  <span>病种导航</span>
                  <span>病种导航</span>
                  <span>病种导航</span>
                  <span>病种导航</span>
                  <span>病种导航</span>
                  <span>病种导航</span>
                  <span>病种导航</span>
                </div>
              </a>
            </li>
            <li className="items">
              <a href="/#">友爱主页</a>
            </li>
            <li className="items">
              <a href="/#">友爱品牌</a>
            </li>
            <li className="items">
              <a href="/#">特色技术</a>
            </li>
            <li className="items">
              <a href="/#">专家团队</a>
            </li>
            <li className="items">
              <a href="/#">真实案例</a>
            </li>
            <li className="items">
              <a href="/#">联系我们</a>
            </li>
          </ul>
        </nav>
      </NavWapper>
      <section>
        <BackPart>    
          <Slider {...settings}>
          <div className="picture">
            <img src={require('./images/back.png')} alt="" />
          </div>
          <div className="picture">
            <img src={require('./images/back.png')} alt="" />
          </div>
          <div className="picture">
            <img src={require('./images/back.png')} alt="" />
          </div>
          <div className="picture">
            <img src={require('./images/back.png')} alt="" />
          </div>
        </Slider>  
        </BackPart>
      </section>
      <article>
        <Service>
          <li><img src={require('./images/s1.jpg')} alt="" />美容冠</li>
          <li><img src={require('./images/s2.jpg')} alt="" />烤瓷牙</li>
          <li><img src={require('./images/s3.jpg')} alt="" />牙齿贴面</li>
          <li><img src={require('./images/s4.jpg')} alt="" />牙齿美白</li>
          <li><img src={require('./images/s5.jpg')} alt="" />牙齿种植</li>
          <li><img src={require('./images/s6.jpg')} alt="" />牙齿修复</li>
          <li><img src={require('./images/s7.jpg')} alt="" />隐形矫正</li>
          <li><img src={require('./images/s8.jpg')} alt="" />更多项目</li>
        </Service>
      </article>
      <section>
        <div className={`${p1.brand} ${p1.w1}`}>
          <BrandItd>
            <BrandTitle>
              品牌友爱<i>BRAND LOVE</i>
            </BrandTitle>
            <img src={require('./images/brand-love.jpg')}  alt="" />
            <p>
              友爱齿科（北京总部），坐落于北京大兴区黄村海子角海北路38号。是经北京市卫生局批准<span>...[详细]</span>
            </p>
          </BrandItd>
          <BrandItd2>
            <BrandTitle>
              活动专题<i>ACTIVITY TOPIC</i>
            </BrandTitle>
            <Slider {...settings}>
             <div >
              <img src={require('./images/brand-activity.jpg')} alt="" />
             </div>
             <div >
              <img src={require('./images/brand-activity.jpg')} alt="" />
             </div>
             <div >
              <img src={require('./images/brand-activity.jpg')} alt="" />
             </div>
             <div>
              <img src={require('./images/brand-activity.jpg')} alt="" />
             </div>
           </Slider>  
          </BrandItd2>
          <section>
            <img src={require('./images/qr-code.jpg')}  width='307px' alt=''/>
          </section>
        </div>
      </section>
      <TechnologyWapper>
        <BrandTitle2>特色技术<i>Characteristic technology</i></BrandTitle2>
        <div className="tech-list">
          <TechItem>
            <img src={require('./images/tecnology-1.jpg')} alt="" />
            <p>德国3D种植牙</p>  
          </TechItem>
          <TechItem>
            <img src={require('./images/technology-2.jpg')} alt="" />
            <p>隐形矫正</p>  
          </TechItem>
          <section className='tech-group'>
            <div className="tech-item3">
              <img src={require('./images/technology-3.jpg')} alt="" />
              <p className="imgs-p3">生态烤瓷牙</p>
            </div>
            <div className="imgs-w2">
              <TechItem2>
                <img src={require('./images/technology-4.jpg')} alt="" />
                <p>牙齿贴面</p>
              </TechItem2>
              <TechItem2>
                <img src={require('./images/technology-5.jpg')} alt="" />
                <p>牙齿美白</p>
              </TechItem2>
            </div>
          </section>
        </div>
      </TechnologyWapper>
      <section className={`${p1.w1}`} style={{marginTop:'57px'}}>
        <BrandTitle2>
          真实案例<i>REAL CASE</i>
        </BrandTitle2>
        <div className={`${p1.real_case}`}>
          <ul className={`${p1.left_nav}`}>
            <li>隐形矫正</li>
            <li>牙齿突出</li>
            <li>牙齿种植</li>
            <li>贴面美白</li>
            <li>活动义齿</li>
            <li>缺损修复</li>
          </ul>
          <img src={require('./images/right-nav.jpg')} alt=""/>
        </div>
      </section>
      <Export>
        <BrandTitle2>
        专家团队<i>Expert team</i>
        </BrandTitle2>
        <div className="imgs-container">
        <Slider {...settings}>
             <div >
              <img src={require('./images/export_03.jpg')} alt="" />
             </div>
             <div >
              <img src={require('./images/export-4_03.jpg')} alt="" />
             </div>
             <div >
              <img src={require('./images/export-5_03.jpg')} alt="" />
             </div>
           </Slider>  
        </div>
      </Export>
      <Cooperate>
        <BrandTitle2>
          医疗合作机构<i>Medical Cooperation</i>
        </BrandTitle2>
        <ul className="team-item">
          <li><img src={require('./images/team_03.jpg')} alt=""/></li>
          <li><img src={require('./images/team_05.jpg')} alt=""/></li>
          <li><img src={require('./images/team_07.jpg')} alt=""/></li>
          <li><img src={require('./images/team_09.jpg')} alt="" /></li>
          <li><img src={require('./images/team_11.jpg')} alt=""/></li>
          <li><img src={require('./images/team_13.jpg')} alt=""/></li>
          <li><img src={require('./images/team_15.jpg')} alt=""/></li>
          <li><img src={require('./images/team_17.jpg')} alt=""/></li>
        </ul>
      </Cooperate>
      <FooterWapper>
        <ul className='footer'>
          <FooterItem>
            <img src={require('./images/logo2.png')} alt="" />
            <h3>北京友爱口腔医院</h3>
            <span>Beijing Youai Mouth Hospital</span>
          </FooterItem>
          <li className="footer-line"></li>
          <FooterItem2>
            <img src={require('./images/qr-code2.png')} width="138px" alt="" />
            <h3>公众号：bjyakq</h3>
            <span>北京友爱口腔专科官方微信</span>
            <span>医院地址：北京市大兴区黄村海子角海北路38号</span>
          </FooterItem2>
          <li className="footer-line"></li>
          <li className="item-3">
            <button>点击咨询<img src={require('./images/footer-jian.png')} width="15px" alt="" /></button>
            <span className="tel"><img src={require('./images/tel2.png')} alt="" />4006-897-120</span>
            <span className="QQ"><img src={require('./images/QQ2.png')} alt="" />800107722</span>
          </li>
        </ul>
      </FooterWapper>
    </Main>
  );
}
