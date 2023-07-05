import { useState } from "react";
import p2 from "./css/pagetwo.module.css";
import { Continer, LeftSide, InfoItem, SkillItem } from "./style";
import { EduContent, EduContent2, EduInfoItem, EduInfoItem2, RightSide } from "./components/right-side/RightSide";
import { ItemTit, Parallelogram, Parallelogram2 } from "./components/right-side/ItemTit";
const data = [
  {
    id: 0,
    info: `23   /   浙江杭州`,
  },
  {
    id: 1,
    info: "生日:1996.01",
  },
  {
    id: 2,
    info: "学历:大专学位",
  },
  {
    id: 3,
    info: "籍贯:浙江杭州",
  },
  {
    id: 4,
    info: "政治面貌:团员",
  },
  {
    id: 5,
    info: "电话:9999699",
  },
  {
    id: 6,
    info: "123@qq.com",
  },
];
export default function PageTwo() {
  const [hitghLightId, setHightLightId] = useState(null);
  function handleHover(id) {
    setHightLightId(id);
  }
  return (
    <main className={p2.main}>
      <Continer>
        <LeftSide>
          <section className="myImg">
            <div className="img-box"></div>
            <h2>千小浩</h2>
          </section>
          <section className="prsn-info">
            <ul>
              {data.map((ele) => (
                <InfoItem key={ele.id} onHover={handleHover} hitghLightId={ele.id === hitghLightId} info={ele}>
                  {ele.info}
                  <img src={require("./images/next-white.png")} alt="" />
                </InfoItem>
              ))}
            </ul>
          </section>
          <section className="skills">
            <h3>技能评价</h3>
            <ul>
              <SkillItem>
                <span>学习能力</span>
                <div>
                  <span style={{ width: 218 }}></span>
                </div>
              </SkillItem>
              <SkillItem>
                <span>团队合作</span>
                <div>
                  <span style={{ width: 177.5 }}></span>
                </div>
              </SkillItem>
              <SkillItem>
                <span>软件操作</span>
                <div>
                  <span style={{ width: 215 }}></span>
                </div>
              </SkillItem>
              <SkillItem>
                <span>专业能力</span>
                <div>
                  <span style={{ width: 163 }}></span>
                </div>
              </SkillItem>
              <SkillItem>
                <span>项目管理</span>
                <div>
                  <span style={{ width: 229 }}></span>
                </div>
              </SkillItem>
            </ul>
          </section>
        </LeftSide>
        <RightSide>
          <div className="job">
            <div className="job-icon">
              <img src={require("./images/sear.png")} alt="" />
            </div>
            <div className="job-search">
              <span className="purpose">求职意向:</span>
              <div className="experience">
                <span>视觉设计师</span>
                <img src={require("./images/jiantou.jpg")} height="15px" alt="" />
                <span>两年平面设计相关经验</span>
              </div>
            </div>
          </div>
          <article className="info">
            <EduInfoItem>
              <ItemTit>
                <span className="txt">教育经历</span>
                <Parallelogram />
                <Parallelogram2 />
                <div className="square"></div>
              </ItemTit>
              <section className="contact">
                <EduContent>
                  <h3>2012-2015</h3>
                  <h3>杭州千图网中学</h3>
                  <h3>理科班</h3>
                </EduContent>
                <EduContent>
                  <h3>2015-2018</h3>
                  <h3>杭州千图网学院</h3>
                  <h3>计算机技术专业</h3>
                  <h3>专科学位</h3>
                </EduContent>
              </section>
            </EduInfoItem>
            <EduInfoItem2>
              <ItemTit>
                <span className="txt">学习实践</span>
                <Parallelogram />
                <Parallelogram2 />
                <div className="square"></div>
              </ItemTit>
              <section className="contact">
                <EduContent2>
                  <h3>2017-2018</h3>
                  <h3>杭州千图网公司</h3>
                  <h3>平面设计实习生</h3>
                </EduContent2>
                <div className="intro">
                  <p>负责公司网站的美化，协助经理完成网站改版</p>
                  <p>实习期间 约90天，成功完成网站改版1回</p>
                  <p>实习期间 约90天，成功完成网站改版1回</p>
                </div>
              </section>
              <section className="contact two">
                <EduContent2>
                  <h3>2018-至今</h3>
                  <h3 style={{textIndent:12}}>杭州千图网公司</h3>
                  <h3>平面设计</h3>
                </EduContent2>
                <div className="intro">
                  <p>实习期间 约90天，成功完成网站改版1回</p>
                  <p>实习期间 约90天，成功完成网站改版1回</p>
                </div>
              </section>
            </EduInfoItem2>
            <div className="info-items3">
              <ItemTit>
                <span className="txt">校内实践</span>
                <Parallelogram />
                <Parallelogram2 />
                <div className="square"></div>
              </ItemTit>
              <div className="itm3-content">
                <div className="i3-t1">
                  <h3>杭州市青年学生设计大赛</h3>
                  <h3>平面设计市级奖项</h3>
                </div>
                <div className="i3-c1">
                  <p>领导能力：<span>项目运行期间带领团队完成上级的任务</span></p>
                  <p>管理能力：<span>项目运行期间带领团队完成上级的任务</span></p>
                  <p>设计能力：<span>项目运行期间带领团队完成上级的任务</span></p>
                  <p>沟通能力：<span>项目运行期间带领团队完成上级的任务</span></p>
                </div>
                <div className="i3-t2">
                  <h3 className="left">杭州千图大学计算机学院</h3>
                  <h3 className="right">设计部部长</h3>
                </div>
                <div className="i3-c2">
                  <p>任期一年<span>部门12人</span></p>
                  <p>组织部门成员野外聚餐，设计比赛，学院运动等等</p>
                </div>
                <div className="i3-t2">
                  <h3 className="left">杭州千图学院</h3>
                  <h3 className="right">跆拳道教练</h3>
                </div>
                <div className="i3-c2">
                  <p>任期一年<span>部门200人</span></p>
                  <p>组织部门成员野外聚餐，设计比赛，学院运动等等</p>
                </div>
              </div> 
            </div>
            <EduInfoItem>
              <ItemTit>
                <span className="txt">获奖荣誉</span>
                <Parallelogram />
                <Parallelogram2 />
                <div className="square"></div>
              </ItemTit>
              <div className="i4-c1">
                <div>
                  <span>获得学院设计奖学金</span>
                  <li>荣誉金奖证书</li>
                </div>
                <div>
                  <span>获得学院设计奖学金</span>
                  <li>荣誉金奖证书</li>
                </div>
                <div>
                  <span>获得学院设计奖学金</span>
                  <li>荣誉金奖证书</li>
                </div>
                <div>
                  <span>获得学院设计奖学金</span>
                  <li>荣誉金奖证书</li>
                </div>
              </div>
            </EduInfoItem>
          </article>
        </RightSide>
      </Continer>
    </main>
  );
}
