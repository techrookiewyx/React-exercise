import React from "react";
import { Route, Routes } from "react-router-dom";
import UlList from "./UlList";
//1
import FirstProgram from "./0-first";
//2
import Fn2 from "./JSX1";
//JSX 3 4
import { div2, div3 } from "./JSX2-brace";
//JSX5
import Profile from "./JSX3-data";
//JSX6
import { jsx4 } from "./JSX4-condition-render";
//JSX7 8
import { jsx5_1 } from "./JSX5-list-render";
import { jsx5_2 } from "./JSX5-list-render";
//JSX9
import FuritList from "./JSX6-list-render";
//10-响应事件
import ButtonEvent from "./7-resp-event";
// Log早版
//import Log from './8-example-logs';
//11 更新数据
import MyButtonNine from './9-update-useState';
//案例12
import MyButtonTen from "./10-update-useState";
// 13
import StateEleven from "./11-state";
// 14
import DataShare from "./12-props-date";
//15
import ProfileF from "./13-assembly";
//16
import ProfileUse from "./14-user-assembly";
//17 Logs
import Logs from "./Logs/Logs";
//import Card from './Logs/Card';


// 18  improt和exprot
import DefExprot from "./16-defalut-exprot";
//import { Test } from "./16-defalut-exprot";
//import { SpecificExprot } from "./15-exprot";
// 19
import HtmlToJSX from "./17-HtmlToJSX";
// 20
import Bio from "./18-JSX-case/18-JSX-repair-case";
// 21
import Bracket from "./19-JSX-bracket";
// 22
import JsxObj from "./20-JSX-obj";
// 23
import JsxMore from "./21-JSX-obj-use";
// 24
import Commun from "./22-props-case";
//25
import FatherProps from "./23-props-father";
//26
import PropsChall from "./24-props-challengee";
//27 类组件
import CreateClass from "./25-class-assembly";
//28 条件渲染
import Judge from "./28-condition-JSX";
//29 条件渲染 返回null
import JudgeNull from "./29-condition-null";
//30 条件渲染 三木运算符
import JudgeSanmu from "./30-condition-sanmu";
//31  条件渲染 三木运算符
import JudgeDel from "./31-condition-case";
//32  体检渲染 与运算符
import JudgeAnd from "./32-condition-and";
//33  条件渲染 if和变量配合使用
import JudgeBian from "./33-contidion-bian";
//34  条件渲染  if案例2
import JudgeBian2 from "./34-condition-bian2";
//35  条件渲染  挑战
import DrinkList from "./35-condition-totalcase";
//36  列表渲染 map
import ListMap from "./36-list-map";
//37  列表渲染 filter
import ListFilter from "./37-list-filter";
//38  列表嵌套案例
import RecipeList from "./38-list-totalcase";
//39  列表嵌套拆分组件
import RecipeList2 from "./39-list-chaifen";
//40   带有分隔符的列表
import ListSeparator from "./40-list-Separator";
//41 纯函数
import PureFn from "./41-pure-funciton";
//42 修复
import TeaSet from "./42-pure-repair";
//43
import TeaGathering from "./43-pure-funciton2";
//44 purecase
import PureCase from "./44-pure-case";
//45 事件响应
import CkBtn from "./45-onClick-event";
//46 事件响应获取props
import EventGetProps from "./46-event-getprops";
//47 事件响应传递props
import EventTransProps from "./47-event-transferprops";
//48  命名事件处理props
import EventNameProps from "./48-event-nameprops";
//49  多事件命名传递
import EventMoreProps from "./49-event-moreprops";
//50  事件传播
import EventSpread from "./50-event-spread";
//51 阻止事件传播
import EventStopSpread from "./51-event-stop-spread";
//52 阻止默认行为
import EventStopDef from "./52-event-stop-default";
//53 useState nextPage
import StateExp from "./53-useState-create";
//54 多个state
import MoreState from "./54-any-state";
//55 state时私有且隔离的
import PrivateState from "./55-private-state";
//56 修复
import RepairState from "./56-repair-state";
//57 form state
import FormState from "./57-form-state";
//58 state声明错误修改
import FeedbackForm from "./58-state-exp";
//59 初次渲染
import FirtstRender from "./59-first-redner";
//60 state render
import StateRender from "./60-state-render";
//61
import StateFeature from "./61-state-feature";
//62 随时间变化的state
import StateAtTime from "./62-state-attime";
//63
import StateTimetwo from "./63-state-time2";
//64
import Form from "./64-state-kuai";
//65
import TrafficLight from "./65-state-case";
//66  state更新
import UpdateState from "./66-state-update";
//67  替换state后更新
import UpdateStateRep from "./67-replacte-update";
//68  更新state后替换
import ReplaceStateUpd from "./68-update-replact";
//69  state计数器
import UpdateFunciton from "./69-update-function-case";
//70 自己实现状态队列
import UpdateQueue from "./70-update-funcation-case2";
//71 state中的对象
import MoveDot from "./71-state-obj";
//72  71修改
import ChangeMoveDot from "./72-change-71";
//73  展开运算符的使用
import SpreadStateObj from "./73-spread-state-obj";
//74  多字段使用单个事件处理
import SingalHandle from "./74-singal-handle";
//75  嵌套对象
import NestObj from "./75-update-nest-obj";
//76 Immer使用
import ImmerUse from "./76-immer-use";
//77 更新state中对象-修复案例
import Scoreboard from "./77-state-repair-case1";
//78 修复案例2
import Canvas from "./78-state-repair-case2";
//79 state中数组的添加-错误案例
import ArrayAddFault from "./79-array-add-fault";
//80 state更新-向数组添加元素
import ArrayAdd from "./80-array-add";
//81 state更新-删除数组元素
import ArrayDel from "./81-array-del-ele";
//82 数组转换
import ArrayChange from "./82-array-change";
//83 元素替换
import ArrayReplace from "./83-array-replace-ele";
//84 元素插入
import ArrayInsert from "./84-array-insert-ele";
//85 数组反转
import ArrayRev from "./85-array-reserve";
//86 数组内部对象更改
import ArrayOjb from "./86-obj-in-array";
//87 immer写法 86
import ArrayOjbImmer from "./87-immer-array";
//88  挑战 购物车
import ShoppingCart from "./88-array-case-shop";
//89  购物车2 减
import ShoppingCart2 from "./89-array-case2";
//90  声明式UI-状态模拟-empty
import StateImitateEmp from "./90-state-imitate-emp";
//91  声明式UI-状态模拟-success
import StateImitateSuc from "./91-state-imitate-ss";
//92  声明式UI-状态模拟-全状态展示
import AllStatus from "./92-all-status";
//93  链接事件处理函数设置state
import StateRespInput from "./93-state-resp-input";
//94  声明式组件案例
import ImitsateCase from "./94-chanllage-case";
//95  state合并
import StateMerge from "./95-state-merge";
//96  矛盾的state
import Contradiction from "./96-contradiction-state";
//97  避免矛盾的state
import AvoidContrd from "./97-contradicaiton-avoid";
//98  冗余的state
import Redundance from "./98-redundance-state";
//99  避免冗余的state
import AvoidRedundance from "./99-avoid-aedundance";
//100 重复的state
import RepeatState from "./100-repeat-state";
//101 避免重复的state
import AvoidRepeatState from "./101-avoid-repeat-state";
//102 深度嵌套的state
import DeepNestState from "./102-deep-nest-state";
//103 数据扁平化避免深度嵌套
import AvoidDeepState from "./103-avoid-deep-state";
//104 深度嵌套更新state
import TravelPlan from "./104-update-nest-state";
//105 Immer更细深度嵌套state并从“表”对象中删除已删除的项目以改善内存使用
import ImmerTravelPlan from "./105-immer-update-nest";
//106 state结构 挑战3
import MailClient from "./106-state-structure-case";
//107 state结构 挑战4 设计state实现多选功能
import MailClientTwo from "./107-state-structure-case2";
//108 组件的独立状态
import StateIndependence from "./108-state-independence";
//109 状态提升
import StateImprove from "./109-state-improve";
//110 状态提升-同步输入框
import InputStateSync from "./110-state-improve-input";
//111 状态提升-列表过滤
import StateImproveListFilter from "./111-state-improve-ListFilter";
//112 组件中state在树中的位置  （state的保留和重置）
import StateTree from "./112-state-tree-position";
//113 state销毁
import StateDestroy from "./113-state-destroy";
//114 state保留
import StateReserve from "./114-state-reserve";
//115 注意 
import StateTreeNotice from "./115-state-tree-notice";
//116 state重置（位置相同的不同组件-切换）
import StateResetSwitch from "./116-state-reset";
//117  state重置（位置相同的不同组件-结构改变）
import StateResetTwo from "./117-state-reste-two";
//118  state保留（不希望发生的情况）
import StateKeepNohope from "./118-state-keep";
//119  相同位置state重置-改变渲染位置
import StateResetDiffPos from "./119-diffposi-reste";
//120  相同位置state重置-通过key属性
import StateResetUsekey from "./120-state-rest-useKey";
//121  使用key重置表单state
import Messenger from "./121-reset-from-key";
//122  修复丢失的输入框文本
import RepairLostInput from "./122-repair-lost-input";
//123  交换两个表单字段 
import ChangeFormField from "./123-change-form-field";
//124  重置详情表单
import ResetFormField from "./124-reset-form-field";
//125  修复列表中错位的 state 
import RepaetListDislocation from "./125-repaet-list-state";
//126  state 表单操作
import FormOperate from "./126-form-operate";
//127  reducer 表单操作
import RedcuerFormOp from "./127-state-to-redcuer"; 
//128  immerReducer简化更新逻辑
import ImmerRedcuerFormOp from "./128-immer-reducer";
//129  reducer使用案例-聊天表单
import ReducerChat from "./129-reducer-chat";
//130  reducer使用案例-聊天表单发送清空输入框
import ReducerChatResetInput from "./130-reset-input";
//131  reducer使用案例-切换时保留输入框内容
import ReducerChatChangeKeep from "./131-reducer-char-keep-mgs";
//132  实现useReducer
import ComeTureReducer from "./132-cometure-useReducer";
//133  props的传递
import PropsLevel from "./133-props-level";
//134  props的传递2
import PropsLevelTwo from "./134-props-level2";
//135  context案例
import ContextLevel from "./135-context-Level";
//136  相同的组件中使用并提供 context
import Page from "./136-use-and-provider";
//137  Context 会穿过中间层级的组件
import ProfilePage from "./137-ProfilePage";
//138  context挑战-用context替代逐层 props
import ContextChallange from "./138-context-replace-props";
//139  reducer-任务列表案例
import TaskApp from "./139-reducer-case";
export default function App() {
  return (
    <>   
      <Routes>
        <Route path="/" element={<UlList />}/>
          <Route path="/case-1" element={<FirstProgram />} />
          <Route path="/case-2" element={<Fn2 />} />
          <Route path="/case-3" element={div2} />
          <Route path="/case-4" element={div3} />
          <Route path="/case-5" element={<Profile />} />
          <Route path="/case-jsx4" element={jsx4} />
          <Route path="/case-jsx5_1" element={jsx5_1} />
          <Route path="/case-jsx5_2" element={jsx5_2} />
          <Route path="/case-9" element={<FuritList/>} />
          <Route path="/case-10" element={<ButtonEvent/>} />
          <Route path="/case-11" element={<MyButtonNine/>} />
          <Route path="/case-12" element={<MyButtonTen/>} />
          <Route path="/case-13" element={<StateEleven/>} />
          <Route path="/case-14" element={<DataShare/>} />
          <Route path="/case-15" element={<ProfileF/>} />
          <Route path="/case-16" element={<ProfileUse/>} />
          <Route path="/case-17" element={<Logs/>} />
          <Route path="/case-18" element={<DefExprot/>} />
          <Route path="/case-19" element={<HtmlToJSX/>} />
          <Route path="/case-20" element={<Bio/>} />
          <Route path="/case-21" element={<Bracket/>} />
          <Route path="/case-22" element={<JsxObj/>} />
          <Route path="/case-23" element={<JsxMore/>} />
          <Route path="/case-24" element={<Commun/>} />
          <Route path="/case-25" element={<FatherProps/>} />
          <Route path="/case-26" element={<PropsChall/>} />
          <Route path="/case-27" element={<CreateClass/>} />
          <Route path="/case-28" element={<Judge/>} />
          <Route path="/case-29" element={<JudgeNull/>} />
          <Route path="/case-30" element={<JudgeSanmu/>} />
          <Route path="/case-31" element={<JudgeDel/>} />
          <Route path="/case-32" element={<JudgeAnd/>} />
          <Route path="/case-33" element={<JudgeBian/>} />
          <Route path="/case-34" element={<JudgeBian2/>} />
          <Route path="/case-35" element={<DrinkList/>} />
          <Route path="/case-36" element={<ListMap/>} />
          <Route path="/case-37" element={<ListFilter/>} />
          <Route path="/case-38" element={<RecipeList/>} />
          <Route path="/case-39" element={<RecipeList2/>} />
          <Route path="/case-40" element={<ListSeparator/>} />
          <Route path="/case-41" element={<PureFn/>} />
          <Route path="/case-42" element={<TeaSet/>} />
          <Route path="/case-43" element={<TeaGathering/>} />
          <Route path="/case-44" element={<PureCase/>} />
          <Route path="/case-45" element={<CkBtn/>} />
          <Route path="/case-46" element={<EventGetProps/>} />
          <Route path="/case-47" element={<EventTransProps/>} />
          <Route path="/case-48" element={<EventNameProps/>} />
          <Route path="/case-49" element={<EventMoreProps/>} />
          <Route path="/case-50" element={<EventSpread/>} />
          <Route path="/case-51" element={<EventStopSpread/>} />
          <Route path="/case-52" element={<EventStopDef/>} />
          <Route path="/case-53" element={<StateExp/>} />
          <Route path="/case-54" element={<MoreState/>} />
          <Route path="/case-55" element={<PrivateState/>} />
          <Route path="/case-56" element={<RepairState/>} />
          <Route path="/case-57" element={<FormState/>} />
          <Route path="/case-58" element={<FeedbackForm/>} />
          <Route path="/case-59" element={<FirtstRender/>} />
          <Route path="/case-60" element={<StateRender/>} />
          <Route path="/case-61" element={<StateFeature/>} />
          <Route path="/case-62" element={<StateAtTime/>} />
          <Route path="/case-63" element={<StateTimetwo/>} />
          <Route path="/case-64" element={<Form/>} />
          <Route path="/case-65" element={<TrafficLight/>} />
          <Route path="/case-66" element={<UpdateState/>} />
          <Route path="/case-67" element={<UpdateStateRep/>} />
          <Route path="/case-68" element={<ReplaceStateUpd/>} />
          <Route path="/case-69" element={<UpdateFunciton/>} />
          <Route path="/case-70" element={<UpdateQueue/>} />
          <Route path="/case-71" element={<MoveDot/>} />
          <Route path="/case-72" element={<ChangeMoveDot/>} />
          <Route path="/case-73" element={<SpreadStateObj/>} />
          <Route path="/case-74" element={<SingalHandle/>} />
          <Route path="/case-75" element={<NestObj/>} />
          <Route path="/case-76" element={<ImmerUse/>} />
          <Route path="/case-77" element={<Scoreboard/>} />
          <Route path="/case-78" element={<Canvas/>} />
          <Route path="/case-79" element={<ArrayAddFault/>} />
          <Route path="/case-80" element={<ArrayAdd/>} />
          <Route path="/case-81" element={<ArrayDel/>} />
          <Route path="/case-82" element={<ArrayChange/>} />
          <Route path="/case-83" element={<ArrayReplace/>} />
          <Route path="/case-84" element={<ArrayInsert/>} />
          <Route path="/case-85" element={<ArrayRev/>} />
          <Route path="/case-86" element={<ArrayOjb/>} />
          <Route path="/case-87" element={<ArrayOjbImmer/>} />
          <Route path="/case-88" element={<ShoppingCart/>} />
          <Route path="/case-89" element={<ShoppingCart2/>} />
          <Route path="/case-90" element={<StateImitateEmp/>} />
          <Route path="/case-91" element={<StateImitateSuc/>} />
          <Route path="/case-92" element={<AllStatus/>} />
          <Route path="/case-93" element={<StateRespInput/>} />
          <Route path="/case-94" element={<ImitsateCase />} />
          <Route path="/case-95" element={<StateMerge />} />
          <Route path="/case-96" element={<Contradiction />} />
          <Route path="/case-97" element={<AvoidContrd />} />
          <Route path="/case-98" element={<Redundance />} />
          <Route path="/case-99" element={<AvoidRedundance />} />
          <Route path="/case-100" element={<RepeatState />} />
          <Route path="/case-101" element={<AvoidRepeatState />} />
          <Route path="/case-102" element={<DeepNestState />} />
          <Route path="/case-103" element={<AvoidDeepState />} />
          <Route path="/case-104" element={<TravelPlan />} />
          <Route path="/case-105" element={<ImmerTravelPlan />} />
          <Route path="/case-106" element={<MailClient />} />
          <Route path="/case-107" element={<MailClientTwo />} />
          <Route path="/case-108" element={<StateIndependence />} />
          <Route path="/case-109" element={<StateImprove />} />
          <Route path="/case-110" element={<InputStateSync />} />
          <Route path="/case-111" element={<StateImproveListFilter />} />
          <Route path="/case-112" element={<StateTree />} />
          <Route path="/case-113" element={<StateDestroy />} />
          <Route path="/case-114" element={<StateReserve />} />
          <Route path="/case-115" element={<StateTreeNotice />} />
          <Route path="/case-116" element={<StateResetSwitch />} />
          <Route path="/case-117" element={<StateResetTwo />} />
          <Route path="/case-118" element={<StateKeepNohope />} />
          <Route path="/case-119" element={<StateResetDiffPos />} />
          <Route path="/case-120" element={<StateResetUsekey />} />
          <Route path="/case-121" element={<Messenger />} />
          <Route path="/case-122" element={<RepairLostInput />} />
          <Route path="/case-123" element={<ChangeFormField />} />
          <Route path="/case-124" element={<ResetFormField />} />
          <Route path="/case-125" element={<RepaetListDislocation />} />
          <Route path="/case-126" element={<FormOperate />} />
          <Route path="/case-127" element={<RedcuerFormOp />} />
          <Route path="/case-128" element={<ImmerRedcuerFormOp />} />
          <Route path="/case-129" element={<ReducerChat />} />
          <Route path="/case-130" element={<ReducerChatResetInput />} />
          <Route path="/case-131" element={<ReducerChatChangeKeep />} />
          <Route path="/case-132" element={<ComeTureReducer />} />
          <Route path="/case-133" element={<PropsLevel />} />
          <Route path="/case-134" element={<PropsLevelTwo />} />
          <Route path="/case-135" element={<ContextLevel />} />
          <Route path="/case-136" element={<Page/>} />
          <Route path="/case-137" element={<ProfilePage/>} />
          <Route path="/case-138" element={<ContextChallange/>} />
          <Route path="/case-139" element={<TaskApp/>} />
        {/*</Route>*/}
      </Routes>
    </>
  );
}
