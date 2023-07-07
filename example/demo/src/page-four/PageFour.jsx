import { useEffect } from "react";
import p4 from "./css/pagefour.module.css";
import {
  ContactItem,
  ContactItem2,
  EduItem,
  ExpenceItem,
  InsItem,
  LagItem,
  LagItem2,
  Main,
  PartLeft,
  PartRight,
  Skill,
  SocItem,
  ExptiseItem,
  ExpExt,
  AttmRefe,
  AttmentItem,
  RefenceItem,
} from "./style";
const lagData = [
  {
    sub: "English",
    baifen: "98%",
  },
  {
    sub: "Franch",
    baifen: "70%",
  },
];
const eduInfo = [
  {
    data: "2015-2017",
    work: "Masters in web design",
    school: "Charles Darwin University",
  },
  {
    data: "2011-2015",
    work: "Bachelor in CSE",
    school: "Leading University",
  },
  {
    data: "2015-2017",
    work: "Masters in web design",
    school: "Charles Darwin University",
  },
  {
    data: "2015-2017",
    work: "Masters in web design",
    school: "Charles Darwin University",
  },
];
export default function PageFour() {
  useEffect(() => {
    document.body.style.backgroundColor = "#b4b7bb";
    return () => {
      document.body.style.backgroundColor = ""; // 清除背景色
    };
  }, []);
  return (
    <Main>
      <div className="container">
        <PartLeft>
          <section className="myImg">
            <img src={require("./images/my.jpg")} alt="" />
          </section>
          <section className="profile">
            <h2>Profile</h2>
            <p>
              I’m a UX and graphic designer in Arizona specializes in helping individuals and companies increase market
              visibility by creating eye-catching artwork. He’s on committed to staying current with trending design.
              I’ve worked internationally, in-house and remotely on projects for leading brands, agencies, startups and
              charities. User experience and problem solving are central to everything I do.
            </p>
          </section>
          <section className={`contact ${p4.clearfix}`}>
            <h2>Contact</h2>
            <ContactItem>
              <section>
                <img src={require("./images/XMLID_50_.png")} width="14px" alt="" />
              </section>
              <span>+880123456789</span>
            </ContactItem>
            <ContactItem>
              <section>
                <img src={require("./images/Shape.png")} width="14px" alt="" />
              </section>
              <span>Darwin city-3300, Australia</span>
            </ContactItem>
            <ContactItem2>
              <section>
                <img src={require("./images/Shape_3.png")} width="18px" alt="" />
              </section>
              <span>randalljetkings@gmail.com</span>
            </ContactItem2>
          </section>
          <section className="interests">
            <h2>Interests</h2>
            <section>
              <InsItem>
                <div>
                  <img src={require("./images/Group3.png")} width="70px" alt="" />
                </div>
                <span>Sports</span>
              </InsItem>
              <InsItem>
                <div>
                  <img src={require("./images/travelling.png")} width="70px" alt="" />
                </div>
                <span>Travelling</span>
              </InsItem>
              <InsItem>
                <div>
                  <img src={require("./images/music.png")} width="70px" alt="" />
                </div>
                <span>Music</span>
              </InsItem>
            </section>
          </section>
          <section className="social">
            <h2>Social</h2>
            <SocItem>
              <div>
                <img src={require("./images/Group2.png")} width="37px" alt="" />
              </div>
              <span>facebook.com/francis</span>
            </SocItem>
            <SocItem>
              <div>
                <img src={require("./images/Group4.png")} width="37px" alt="" />
              </div>
              <span>dribbble.com/francis</span>
            </SocItem>
            <SocItem>
              <div>
                <img src={require("./images/Group5.png")} width="37px" alt="" />
              </div>
              <span>linkedin.com/francis</span>
            </SocItem>
          </section>
          <section className="language">
            <h2>Language</h2>
            <div className="lag-list">
              <LagItem data={lagData[0]} />
              <LagItem2>
                <h3>70%</h3>
                <h4>Franch</h4>
                <div>
                  <span style={{ width: 62 }}></span>
                </div>
              </LagItem2>
            </div>
          </section>
        </PartLeft>
        <PartRight>
          <h2>Randall Jenkins</h2>
          <h4>User Experience Designer</h4>
          <section className="edu-skill">
            <div>
              <h3>Education</h3>
              {eduInfo.map((ele, index) => (
                <EduItem key={index} data={ele} />
              ))}
            </div>
            <div>
              <h3>Skills</h3>
              <Skill>
                <h4>Photoshop</h4>
                <div>
                  <span style={{ width: 221 }}></span>
                </div>
              </Skill>
              <Skill>
                <h4>Illustrator</h4>
                <div>
                  <span style={{ width: 184 }}></span>
                </div>
              </Skill>
              <Skill>
                <h4>Gravit</h4>
                <div>
                  <span style={{ width: 155 }}></span>
                </div>
              </Skill>
              <Skill>
                <h4>Cinema 4d</h4>
                <div>
                  <span style={{ width: 182 }}></span>
                </div>
              </Skill>
              <Skill>
                <h4>Invision</h4>
                <div>
                  <span style={{ width: 208 }}></span>
                </div>
              </Skill>
            </div>
          </section>
          <ExpExt>
            <div>
              <h3>Experience</h3>
              <ExpenceItem>
                <h5>2015-2017</h5>
                <div>
                  <h4>Senior Designer</h4>
                  <h6>Luova Studio</h6>
                  <p>Worked for this web development company, I developed and maintain</p>
                </div>
              </ExpenceItem>
              <ExpenceItem>
                <h5>2015-2017</h5>
                <div>
                  <h4>Junior Designer</h4>
                  <h6>Balkan Brothers</h6>
                  <p>Worked for this web development company, I developed and maintain</p>
                </div>
              </ExpenceItem>
              <ExpenceItem>
                <h5>2015-2017</h5>
                <div>
                  <h4>Internship</h4>
                  <h6>Creative Mints</h6>
                  <p>Worked for this web development company, I developed and maintain</p>
                </div>
              </ExpenceItem>
            </div>
            <div>
              <h3>Expertise</h3>
              <ExptiseItem>
                <h4>UX writing</h4>
                <p>Writing is the unsung hero of UX. People speak highly of coding is which is a skill.</p>
              </ExptiseItem>
              <ExptiseItem>
                <h4>UX writing</h4>
                <p>Writing is the unsung hero of UX. People speak highly of coding is which is a skill.</p>
              </ExptiseItem>
              <ExptiseItem>
                <h4>User empathy</h4>
                <p>Writing is the unsung hero of UX. People speak highly of coding is which is a skill.</p>
              </ExptiseItem>
            </div>
          </ExpExt>
          <AttmRefe>
            <div>
              <h3>Attainment</h3>
              <AttmentItem>
                <h5>2017-2018</h5>
                <div>
                  <h4>Designer Of The Year</h4>
                  <p>Luova Studio</p>
                </div>
              </AttmentItem>
              <AttmentItem>
                <h5>2011-2015</h5>
                <div>
                  <h4>Hardworking Designer</h4>
                  <p>Balkan Brothers</p>
                </div>
              </AttmentItem>
              <AttmentItem>
                <h5>2015-2017</h5>
                <div>
                  <h4>HCompleted 20+ Project</h4>
                  <p>Fireart Studio</p>
                </div>
              </AttmentItem>
              <AttmentItem>
                <h5>2015-2017</h5>
                <div>
                  <h4>Received Designer award</h4>
                  <p>Charles Darwin University</p>
                </div>
              </AttmentItem>
            </div>
            <div>
              <h3>Referencce</h3>
              <RefenceItem>
                <h4>Backend developer , Luova Studio</h4>
                <span>Shekh Al Raihan</span>
                <span>Alrayhan@mailhere.com</span>
              </RefenceItem>
              <RefenceItem>
                <h4>UX Designer, Luova Studio</h4>
                <span>Shekh Al Raihan</span>
                <span>Shouravchy@mailhere.com</span>
              </RefenceItem>
              <RefenceItem>
                <h4>Graphic Designer, Fireart Studio</h4>
                <span>Wahab A Khan</span>
                <span>Shouravchy@mailhere.com</span>
              </RefenceItem>
            </div>
          </AttmRefe>
          <section className="afft">
            <h3>Affiliations</h3>
            <div>
              <div><img src={require("./images/Bitmap.png")} width="48px" alt="" /></div>
              <div><img src={require("./images/Bitmap_99.png")} width="48px" alt="" /></div>
              <div><img src={require("./images/Bitmap_14.png")} width="48px" alt="" /></div>
              <div><img src={require("./images/Bitmap_53.png")} width="48px" alt="" /></div>
              <div><img src={require("./images/Bitmap_78.png")} width="48px" alt="" /></div>
              <div><img src={require("./images/Bitmap_91.png")} width="48px" alt="" /></div>
            </div>
          </section>      
        </PartRight>
      </div>
    </Main>
  );
}
