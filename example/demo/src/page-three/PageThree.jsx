import { Desription, FamousItem, FootCenterItem, FooterTopPart, FuList, Header, Main, MapInfo, ResItem, ResItemlst, SerswItem, SerswItem2, ServeItem, ServeItem1, ShowEvm, StItem, TipWapper, TipWapper2, WimgItem, WimgItem2, WtImgList } from "./style";
import p3 from "./css/pagethree.module.css";
export default function PageThree() {
  return (
    <Main>
      <Header>
        <div className="bgt">
          <h2>WELCOME</h2>
          <h2>TO MOGO</h2>
        </div>
        <div className="heng"></div>
        <div className="btn"><a onClick={e => { e.preventDefault() }} href="/#">LEARN MORE</a></div>
        <nav className={`top-nav ${p3.w}`}>
          <div><a onClick={e => { e.preventDefault() }} href="/#">MoGo</a></div>
          <ul>
            <li><a onClick={e => { e.preventDefault() }} href="/#">ABOUT</a></li>
            <li><a onClick={e => { e.preventDefault() }} href="/#">SERVICE</a></li>
            <li><a onClick={e => { e.preventDefault() }} href="/#">WORK</a></li>
            <li><a onClick={e => { e.preventDefault() }} href="/#">BLOG</a></li>
            <li><a onClick={e => { e.preventDefault() }} href="/#">CONTACT</a></li>
            <li>
              <a onClick={e => { e.preventDefault() }} href="/#"><img src={require('./images/shop.png')} width="14px" height='12px' alt="" /></a>
            </li>
            <li>
              <a onClick={e => { e.preventDefault() }} href="/#"><img src={require('./images/search.png')} width="14px" height='14px' alt="" /></a>
            </li>
          </ul>
        </nav>
        <section className={`serve ${p3.w}`}>
          <ServeItem1>
            <div><span></span></div>
            <h4>01 <span>INTRO</span></h4>
          </ServeItem1>
          <ServeItem>
            <div></div>
            <h4>02 <span>WORK</span></h4>
          </ServeItem>
          <ServeItem>
            <div></div>
            <h4>03 <span>ABOUT</span></h4>
          </ServeItem>
          <ServeItem>
            <div></div>
            <h4>04 <span>CONTACTS</span></h4>
          </ServeItem>
        </section>
      </Header>
      <section className={`about ${p3.clearfix} ${p3.w}`}>
        <Desription>
          <div><img src={require('./images/do.png')} width="86px" alt="" /></div>
          <h3>STORY ABOUT US</h3>
          <div className="line"></div>
        </Desription>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim</span>
        <span>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        <ShowEvm />
      </section>
      <section className='count-wapper'>
        <ul className={`counts ${p3.w}`}>
          <ResItem>
            <h3>42</h3>
            <span>WEB DESIGN PROJECTS</span>   
          </ResItem>
          <ResItem>
            <h3>123</h3>
            <span>HAPPY CLIENT</span>
          </ResItem>
          <ResItem>
            <h3>15</h3>
            <span>AWARD WINNER</span>
          </ResItem>
          <ResItem>
            <h3>99</h3>
            <span>CUP OF COFFEE</span>
          </ResItem>
          <ResItemlst>
            <h3>24</h3>
            <span>MEMBERS</span>
          </ResItemlst>
        </ul>
      </section>
      <section className={`work ${p3.clearfix} ${p3.w}`}>
        <Desription>
          <div><img src={require('./images/work.png')} width="86px"  alt="" /></div>
          <h3>STORY ABOUT US</h3>
          <div className="line"></div>
        </Desription>
        <FuList>
          <article>
            <div><img src={require('./images/clock.png')} alt="" /></div>
            <section>
              <h4>Photography</h4>
              <span>Lorem ipsum dolor sit amet, consectetur</span>
              <span>adipiscing elit, sed do eiusmod tempor.</span>
            </section>
          </article>
          <article>
            <div><img src={require("./images/LINEGRAPH.png")} alt=""/></div>
            <section>
              <h4>Web Design</h4>
              <span>Ipsum dolor sit amet, consectetur</span>
              <span>adipiscing elit, sed do eiusmod tempor.</span>
            </section>
          </article>
          <article>
            <div><img src={require("./images/COMPUTEROK.png")} alt=""/></div>
            <section>
              <h4>Creativity</h4>
              <span>Dolor sit amet, consectetur adipiscing elit,</span>
              <span>sed do eiusmod tempor.</span>
            </section>
          </article>
        </FuList>
        <div className="fenge"></div>
        <FuList>
          <article>
            <div><img src={require('./images/BOOK2.png')} alt="" /></div>
            <section>
              <h4>SEO</h4>
              <span>Ipsum dolor sit amet, consectetur</span>
              <span>adipiscing elit, sed do eiusmod.</span>
            </section>
          </article>
          <article>
            <div><img src={require("./images/HOME.png")} alt=""/></div>
            <section>
              <h4>CSS/HTML</h4>
              <span>Lorem dolor sit amet, consectetur</span>
              <span>adipiscing elit, sed do tempor.</span>
            </section>
          </article>
          <article style={{marginRight:5}}>
            <div><img src={require("./images/IMAGE.png")} alt=""/></div>
            <section>
              <h4>DIGITAL</h4>
              <span>Sit amet, consectetur adipiscing elit, sed</span>
              <span>do eiusmod tempor.</span>
            </section>
          </article>
        </FuList>
      </section>
      <section className="device-wapper">
        <div className={`${p3.clearfix} ${p3.w}`}>
          <Desription>
            <div><img src={require('./images/alldevices.png')} width="86px"  alt="" /></div>
            <h3>UNIQUE DESIGN</h3>
            <div className="line"></div>
          </Desription>
        </div>
        <img src={require("./images/White.png")} width="217px" alt="" />
      </section>
      <section className={`service ${p3.clearfix} ${p3.w}`}>
        <Desription>
          <div><img src={require('./images/Service.png')} width="86px" alt="" /></div>
          <h3>STORY ABOUT US</h3>
          <div className="line"></div>
        </Desription>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim</span>
        <span>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        <article className="sersw">
          <div><img src={require("./images/Layer43.jpg")} width="452px" alt="" /></div>
          <section>
            <SerswItem>
              <div><img src={require("./images/PICTURE.png")} width="24px" alt="" /><span>PHOTOGRAPHY</span></div>
            </SerswItem>
            <div className="c2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <div><span></span></div>
            </div>
            <SerswItem2>
              <div><img src={require("./images/EQUALIZER.png")} width="24px" alt="" /><span>CREATIVITY</span></div>
            </SerswItem2>
            <SerswItem2>
              <div><img src={require("./images/BULLSEYE.png")} width="24px" alt="" /><span>WEB DESIGN</span></div>
            </SerswItem2>
          </section>
        </article>
      </section>
      <TipWapper>
        <div className={`tip ${p3.w}`}>
          <section><img src={require("./images/SPEECH4.png")} width="50px" alt="" /></section>
          <div className="clearfix">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”
            </p>
            <span></span><img src={require("./images/JonDoe.png")} width="65px" alt="" />
          </div>
        </div>
      </TipWapper>
      <section className={`who ${p3.clearfix} ${p3.w}`}>
        <Desription>
          <div><img src={ require("./images/Whoweare.png") } width="86px" alt="" /></div>
          <h3>STORY ABOUT US</h3>
          <div className="line"></div>
        </Desription>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim</span>
        <span>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        <div className="wimglist">
          <WimgItem>
            <div><img src={require("./images/Layer16.jpg")} width="301px" alt="" /></div>
            <section className={`${p3.clearfix}`}>
              <a onClick={e => { e.preventDefault() }} className="active" href="/#"><img src={require("./images/facebook.png")} width="10px" alt="" /></a>
              <a onClick={e => { e.preventDefault() }} href="/#"><img src={require("./images/twitter.png")} width="20px" alt="" /></a>
              <a onClick={e => { e.preventDefault() }} href="/#"><img src={require("./images/pinterest.png")} width="16px" alt="" /></a>
              <a onClick={e => { e.preventDefault() }} href="/#"><img src={require("./images/instagram.png")} width="20px" alt="" /></a>
            </section>
            <h5>MATTHEW DIX</h5>
            <span>Graphic Design</span>
          </WimgItem>
          <WimgItem2>
            <img src={require("./images/Layer19.jpg")} width="301px" alt="" />
            <h5>CHRISTOPHER CAMPBELL</h5>
            <span>Branding/UX design</span>
          </WimgItem2>
          <WimgItem2>
            <img src={require("./images/Layer18.jpg")} width="301px" alt="" />
            <h5>MICHAEL FERTIG</h5>
            <span>Developer</span>
          </WimgItem2>
        </div>
      </section>
      <section className="brand-wapper">
        <div className={`brand ${p3.w}`}>
          <img src={require("./images/1.jpg")} width="90px" alt="" />
          <img src={require("./images/2.jpg")} width="75px" alt="" />
          <img src={require("./images/3.jpg")} width="100px" alt="" />
          <img src={require("./images/4.jpg")} width="95px" alt="" />
          <img src={require("./images/5.jpg")} width="95px" alt="" />
          <img src={require("./images/6.jpg")} width="90px" alt="" />
        </div>
      </section>
      <section className={`what ${p3.clearfix}`}>
        <Desription>
          <div><img src={require("./images/do.png")} width="86px" alt="" /></div>
          <h3>SOME OF OUR WORK</h3>
          <div className="line"></div>
        </Desription>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim</span>
        <span>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        <WtImgList>
          <div>
            <img src={require("./images/Layer26.jpg")} alt="" />
            <img src={require("./images/Layer33.jpg")} alt="" />
            <img src={require("./images/Layer35.jpg")} alt="" />
            <img src={require("./images/PICTURE.jpg")} alt="" />
          </div>
          <img src={require("./images/Layer34.jpg")} alt="" />
          <div>
            <img src={require("./images/Layer31.jpg")} alt="" />
            <img src={require("./images/Layer32.jpg")} alt="" />
          </div>
        </WtImgList>
        <TipWapper2>
          <div className={`tip ${p3.w}`}>
            <p><img src={require("./images/Layer36.png")} width="166px" alt="" /></p>
            <div className="clearfix">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”
              </p>
              <span></span><img src={require("./images/JoshuaEarle.png")} width="98px" alt="" />
            </div>
          </div>
        </TipWapper2>
      </section>
      <section className='happy-wapper'>
        <div className={`${p3.clearfix} ${p3.w}`}>
          <Desription>
            <div><img src={require("./images/HappyClients.png")} width="86px" alt="" /></div>
            <h3>WHAT PEOPLE SAY</h3>
            <div className="line"></div>
          </Desription>
          <div className="minglist">
            <FamousItem>
              <section><img src={require("./images/Layer47.png")} width="87px" alt="" /></section>
              <article>
                <h4>MATTHEW DIX</h4>
                <h5>GRAPHIC Design</h5>
                <span></span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim.
                </p>
              </article>
            </FamousItem>
            <FamousItem>
              <section><img src={require("./images/Layer49.png")} width="87px" alt="" /></section>
              <article>
                <h4>NICK KARVOUNIS</h4>
                <h5>Graphic Design</h5>
                <span></span>
                <p>
                  Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam
                </p>
              </article>
            </FamousItem>
          </div>
          <div className="minglist">
            <FamousItem>
              <section><img src={require("./images/Layer50.png")} width="87px" alt="" /></section>
              <article>
                <h4>JAELYNN CASTILLO</h4>
                <h5>GRAPHIC Design</h5>
                <span></span>
                <p>
                  Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam
                </p>
              </article>
            </FamousItem>
            <FamousItem>
              <section><img src={require("./images/Layer51.png")} width="87px" alt="" /></section>
              <article>
                <h4>MIKE PETRUCCI</h4>
                <h5>GRAPHIC Design</h5>
                <span></span>
                <p>
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim.
                </p>
              </article>
            </FamousItem>
          </div>
        </div>
      </section>
      <section className={`story ${p3.clearfix} ${p3.w}`}>
        <Desription>
          <div><img src={require("./images/Ourstories.png")} width="86px" alt="" /></div>
          <h3>LATEST BLOG</h3>
          <div className="line"></div>
        </Desription>
        <div className={`${p3.pailie}`}>
          <StItem>
            <section>
            <img src={require("./images/Layer54.jpg")} alt="" />
              <div>
                <div>15</div>
                <i>Jan</i>
              </div>
            </section>
            <h4>LOREM IPSUM DOLOR SIT AMET</h4>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span></span>
            <div>
              <img src={require("./images/VIEW.png")} width="15px" alt="" /><span>542</span>
              <img src={require("./images/SPEECHBUBBLE2.png")} width="13px" alt="" /><span>17</span>
            </div>
          </StItem>
          <StItem>
            <section>
            <img src={require("./images/Layer55.jpg")} alt="" />
              <div>
                <div>14</div>
                <i>Jan</i>
              </div>
            </section>
            <h4>SED DO EIUSMOD TEMPOR</h4>
            <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span></span>
            <div>
              <img src={require("./images/VIEW.png")} width="15px" alt="" /><span>992</span>
              <img src={require("./images/SPEECHBUBBLE2.png")} width="13px" alt="" /><span>42</span>
            </div>
          </StItem>
          <StItem>
            <section>
            <img src={require("./images/Layer57.jpg")} alt="" />
              <div>
                <div>12</div>
                <i>Jan</i>
              </div>
            </section>
            <h4>INCIDIDUNT UT LABORE ET DOLORE</h4>
            <p>Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <span></span>
            <div>
              <img src={require("./images/VIEW.png")} width="15px" alt="" /><span>1560</span>
              <img src={require("./images/SPEECHBUBBLE2.png")} width="13px" alt="" /><span>98</span>
            </div>
          </StItem>
        </div>
      </section>
      <section className={`map ${p3.clearfix}`}>
        <MapInfo/>
      </section>
      <footer>
        <div className={`${p3.w}`}>
          <FooterTopPart>
            <div className="left">
            <h2>MoGo</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <h4>15k <span>followers</span></h4>
              <span></span>
              <div>
                <i>Follow Us:</i>
                <a onClick={e => {e.preventDefault(e)}} href="/#"><img src={require("./images/facebook_22.png")} alt="" /></a>
                <a onClick={e => {e.preventDefault(e)}} href="/#"><img src={require("./images/twitter_14.png")} alt="" /></a>
                <a onClick={e => {e.preventDefault(e)}} href="/#"><img src={require("./images/instagram_49.png")} alt="" /></a>
                <a onClick={e => {e.preventDefault(e)}} href="/#"><img src={require("./images/pinterest_10.png")} alt="" /></a>
                <a onClick={e => {e.preventDefault(e)}} href="/#"><img src={require("./images/googleplus.png")} alt="" /></a>
                <a onClick={e => {e.preventDefault(e)}} href="/#"><img src={require("./images/youtube.png")} alt="" /></a>
                <a onClick={e => {e.preventDefault(e)}} href="/#"><img src={require("./images/dribbble.png")} alt="" /></a>
                <a onClick={e => {e.preventDefault(e)}} href="/#"><img src={require("./images/tumblr.png")} alt="" /></a>
              </div>
              <form className={`${p3.clearfix}`} action="">
                <input type="email" placeholder="Your Email" /><button>SUBSCRIBE</button>
              </form>
            </div>
            <div className="center">
              <h4>BLOGS</h4>
              <FootCenterItem>
                <div><img src={require("./images/photos-7884rHDsW8yqbsyN.jpg")} width="94px" alt="" /></div>
                <section>
                  <p>LOREM IPSUM DOLOR SIT AMET,</p>
                  <p>CONSECTETUR ADIPISCING</p>
                  <span>Jan 9, 2016</span>
                </section>
              </FootCenterItem>
              <FootCenterItem>
                <div><img src={require("./images/photos-7884lejLFH9MN8IC.jpg")} width="94px" alt="" /></div>
                <section>
                  <p>CONSECTETUR ADIPISCING ELIT,</p>
                  <p>SED DO EIUSMOD TEMPOR</p>
                  <span>Jan 9, 2016</span>
                </section>
              </FootCenterItem>
              <FootCenterItem>
                <div><img src={require("./images/photos-7884P2smgicsZFyn.jpg")} width="94px" alt="" /></div>
                <section>
                  <p>SED DO EIUSMOD TEMPOR</p>
                  <p>INCIDIDUNT UT LABORE</p>
                  <span>Jan 9, 2016</span>
                </section>
              </FootCenterItem>
            </div>
            <div className="right">
              <h4>INSTAGRAM</h4>
              <div className="rimg-list">
                <div><img src={require("./images/r1.jpg")} alt="" /></div>
                <div><img src={require("./images/r2.jpg")} alt="" /></div>
                <div><img src={require("./images/r3.jpg")} alt="" /></div>
                <div><img src={require("./images/r4.jpg")} alt="" /></div>
                <div><img src={require("./images/r5.jpg")} alt="" /></div>
                <div><img src={require("./images/r6.jpg")} alt="" /></div>
                <div><img src={require("./images/r7.jpg")} alt="" /></div>
                <div><img src={require("./images/r8.jpg")} alt="" /></div>
                <div><img src={require("./images/r9.jpg")} alt="" /></div>
              </div>
              <p>View more photos</p>
            </div>
          </FooterTopPart>
          <div className="bottom">© 2016 MoGo free PSD template by <span>Laaqiq</span></div>
        </div>
      </footer>
    </Main>
  );
}
