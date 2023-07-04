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
//140  reducer和context结合使用
import TaskAppRedCon from "./140-context-reducer";
//141  reducer和context结合使用-逻辑迁移
import TaskAppRedConMove from "./141-logic-move";
//142  useRef
import RefUse from "./142-useRef";
//143  state秒表案例
import StateStopwatch from "./143-state-stopwatch";
//144  ref-state秒表案例
import RefStopwatch from "./144-ref-stopwatch";
//145  state计数器
import StateCount from "./145-state-count";
//146  ref计数器
import RefCount from "./146-ref-count";
//147  ref-修复坏掉的聊天输入框
import RefRepeatInput from "./147-ref-repeat-input";
//148  ref-修复无法重新渲染的组件
import Toggle from "./148-ref-repeat-render";
//149  ref-修复防抖
import RefRepeatDebounce from "./149-ref-repeat-debounce";
//150  ref-读取最新的state
import RefGetNewState from "./150-ref-read-state";
//151  ref操作dom-使文本输入框获得焦点
import RefGetDom from "./151-useRef-dom";
//152  ref操作dom-滚动至一个元素
import RefOpaDomScroll from "./152-ref-scroll-ele";
//153  ref回调管理ref列表
import RefCallBack from "./153-ref-callback";
//154  ref访问另一个组件的 DOM 节点 -错误情况
import GetOtherUnitDomErr from "./154-ref-error";
//155  forwardRef访问另一个组件的 DOM 节点
import GetOtherUnitDom from "./155-ref-unit";
//156  useImperativeHandle暴露一部分API
import RefHandleExpose from "./156-ref-useImperative";
//157  异步更新的state
import TodoList from "./157-update-state";
//158  用 flushSync 强制同步更新 state/DOM
import TodoListImdUpdate from "./158-immediate-update-dom";
//159  ref修改DOM
import RefModifDom from "./159-ref-modify-dom";
//160  ref操作dom案例-播放和暂停视频 
import VideoPlayer from "./160-ref-play-pause-video";
//161  ref操作dom案例-使搜索域获得焦点
import RefGetFocus from "./161-ref-get-focus";
//162  ref操作dom案例- 滚动图像轮播
import CatFriends from "./162-ref-lunbo-img";
//163  ref操作dom案例-使分开的组件中的搜索域获得焦点
import PageFocus from "./163-focus-case";
//164  事件处理之外的副作用
import EventOutsideEffect from "./164-no-effect-case";
//165  effect控制视频状态同步
import UseEffectVideo from "./165-use-effect";
//166  effect重新运行
import EffectRun from "./166-effect-run";
//167  effect依赖项-跳过不必要的effect运行
import EffectDependency from "./167-effect-dependencies";
//168  effect挂载-聊天案例链接
import ChateRoom from "./168-effect-addup";
//169  effect清理函数-关闭链接
import ChateRoomClear from "./169-effect-clear";
//170  effect工作
import EfffectTime from "./170-put-it-togteger";
//171  effect案例-自动获取输入框焦点
import EffectFocus from "./171-effect-focus";
//172  effect案例-条件聚焦输入框
import Counter from "./172-effect-repeat-interval";
//173  无effect-转换数据
import NoEffectTodoList from "./173-noEffect-transform-data";
//174  useMemo缓存没有效果的计算
import UseMemoTodoList from "./174-usememo";
//175  无effect-重置状态
import NoEffectReState from "./175-no-effect-reset-state";
//176  无effect-表单的提交
import NoEffectForm from "./176-noEffect-submit";
//177  effect-重新同步
import EffectResync from "./177-effect-resync";
//178  effect-对反应值响应
import EffectReactiveVle from "./178-effect-reactive-value";
//179  effect-空依赖
import EffecEmptyDeps from "./179-effect-empty-deps";
//180  linter检查依赖项
import LinterCheckDeps from "./180-linter-check-deps";
//181  effect案例-修复输入框变化重新同步
import RepeateIptResync from "./181-repeat-effect-resync";
//182  effect案例-通过反应值打开和关闭同步
import EffectChangeSync from "./182-effect-open-close-sync";
//183  effect案例-空依赖导致不能同步
import RepeatEmpetDeps from "./183-repeat-old-value";
//184  effect案例-修复聊天室加密开关
import RepeatSwitchRoom from "./184-repeat-switch-connect";
//185  effect案例-填充一系列选择框
import EffectAlone from "./185-block-form";
//186  事件处理程序和effect
import EvenetAndEffect from "./186-event-effect";
//187  effect中多余的反应逻辑
import EffectOverLogic from "./187-effect-reaction-logic";
//188  effect事件提取非反应逻辑
import EffectGetNotLogic from "./188-get-not-reaction-logic";
//189  抑制依赖性linter-陈旧值
import CubLinterOldV from "./189-curb-lint";
//190  effect事件案例-修复一个不更新的变量
import UpdateTimer from "./190-effect-event-state";
//191  effect事件案例-修复冻结计数器
import RepeatFreezeTimer from "./191-repeat-freezn-timer";
//192  effect事件案例-修复不可调整的延迟
import RepeatDelay from "./192-repeat-delay";
//193  effect事件案例-修复延迟通知
import RepeatDelayInfo from "./193-repeat-delay-info";
//194  linter检查依赖项是否与代码匹配
import DepsWithCode from "./194-linter";
//195  删除依赖项-移除组件中反应值
import RemoveDeps from "./195-remove-reaction-value";
//196  忽略linter导致难以发现的错误
import IgnoreLinterFault from "./196-linter-fault";
//197  对象作为反应值时的问题
import ObjAsReactionValue from "./197-obj-as-reaction-value";
//198  将对象移动到effect中
import MoveOjbToEffect from "./198-move-objTo-effect";
//199  effect依赖去除-修复重置间隔
import RepeatResetGap from "./199-repeat-reset-timer";
//200  effect依赖去除-修复重新触发的动画
import RepeatAnimation from "./200-repeat-retouch-animate";
//201  effecty依赖去除-修复重新连接的聊天
import RepeatRelink from "./201-repeat-reLink";
//202  使网络连接与state保持同步
import StatusBar from "./202-net-state";
//203  连接逻辑转移
import SaveButton from "./203-logic-move";
//204  自定义useOnline逻辑复用
import HookOnline from "./204-customize-hook-online";
//205  state独立性
import IndependentStateForm from "./205-independent-state";
//206  自定义useFormIpt
import HoookForm from "./206-customize-hook-formipt";
//207  在自定义HOOK中传递反应值
import HookChatRoom from "./207-customize-hook-chatroom";
//208  useOnline的重写
import HookOnlineRe from "./208-useOnline-rewrite";
//209  自定义HookuseFadeIn-动画
import HookFadeIn from "./209-customize-hook-fadein";
//210  自定义HOOK案例-提取一个useCounter钩子
import HookCount from "./210-case-useCount";
//211  自定义HOOK案例-使计数器延迟可配置
import HookCountDelay from "./211-case-useCountDelay";
//211-2  从useCounter中提取useInerval
import DrawInterval from "./211-2-gethook-interval";
//212  自定义HOOK案例-小球延迟运动
import HookDelayValue from "./212-case-useDelayValue";
//213  根据UI拆分组件并构建静态版本
import StaticVer from "./213-static-version";
//214  根据静态版本创建合适位置的state
import CreateState from "./214-add-state";
//215  添加反向数据处理
import AddDateFlow from "./215-add-date-flow";
//216  订阅外部store
import OrderOutStore from "./216-order-out-store";
//217  订阅浏览器API
import OrderBapi from "./217-order-bowser-api";
//218  井字棋游戏
import TicGame from "./218-TicTacToe-game";
//219  案例补充-关联事件切换背景
import ColorSwitch from "./219-case-event-rela";
//220  案例补充-添加和删除一个 CSS class
import AddRemCssClass from "./220-case-add-remove-css";
//221  案例补充-修复一个未更新的组件
import RepeatNotUpdate from "./221-case-repeat-notupdate";
//222  案例补充-清除正在加载的图片
import ClearLoadingPic from "./222-LoadPic";
//223  案例补充-修复坏掉的时钟
import RepBrokenClock from "./223-broken-clock";
//224  案例补充-修复损坏的资料
import RepeatDataCard from "./224-repeate-datacard";
//225  案例补充-修复触发两次的间隔
import RepTwiceTrigger from "./225-repeat-twice-trigger";
//226  案例补充-修复在Effect中获取
import RepEffGetDate from "./226-repeat-effet-getdata";
//227  案例补充-修复损坏的故事集
import RepeatStoryList  from "./227-repeat-storylist";
//228  案例补充-修复事件处理函数
import LightSwitch from "./228-add-case-event";
//229  案例补充-children prop
import ChildrenTransCode from "./229-case-chindren-props";
//230  案例补充-聊天室加密链接
import SecretChat from "./230-case-sercet-char";
//231  案例补充-跳过重新计算
import JumpRecal from "./231-jump-over-recal";
//232  案例补充-hook修复重置间隔
import RepJiange from "./232-rep-jiange";
//页面一
import PageOne from "./page-one/PageOne";
//页面二
// import PageTwo from "./page-two/PageTwo";
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
          <Route path="/case-140" element={<TaskAppRedCon/>} />
          <Route path="/case-141" element={<TaskAppRedConMove/>} />
          <Route path="/case-142" element={<RefUse/>} />
          <Route path="/case-143" element={<StateStopwatch/>} />
          <Route path="/case-144" element={<RefStopwatch/>} />
          <Route path="/case-145" element={<StateCount/>} />
          <Route path="/case-146" element={<RefCount/>} />
          <Route path="/case-147" element={<RefRepeatInput/>} />
          <Route path="/case-148" element={<Toggle/>} />
          <Route path="/case-149" element={<RefRepeatDebounce/>} />
          <Route path="/case-150" element={<RefGetNewState/>} />
          <Route path="/case-151" element={<RefGetDom/>} />
          <Route path="/case-152" element={<RefOpaDomScroll/>} />
          <Route path="/case-153" element={<RefCallBack/>} />
          <Route path="/case-154" element={<GetOtherUnitDomErr/>} />
          <Route path="/case-155" element={<GetOtherUnitDom/>} />
          <Route path="/case-156" element={<RefHandleExpose/>} />
          <Route path="/case-157" element={<TodoList/>} />
          <Route path="/case-158" element={<TodoListImdUpdate/>} />
          <Route path="/case-159" element={<RefModifDom/>} />
          <Route path="/case-160" element={<VideoPlayer/>} />
          <Route path="/case-161" element={<RefGetFocus/>} />
          <Route path="/case-162" element={<CatFriends/>} />
          <Route path="/case-163" element={<PageFocus/>} />
          <Route path="/case-164" element={<EventOutsideEffect/>} />
          <Route path="/case-165" element={<UseEffectVideo/>} />
          <Route path="/case-166" element={<EffectRun/>} />
          <Route path="/case-167" element={<EffectDependency/>} />
          <Route path="/case-168" element={<ChateRoom/>} />
          <Route path="/case-169" element={<ChateRoomClear/>} />
          <Route path="/case-170" element={<EfffectTime/>} />
          <Route path="/case-171" element={<EffectFocus/>} />
          <Route path="/case-172" element={<Counter/>} />
          <Route path="/case-173" element={<NoEffectTodoList/>} />
          <Route path="/case-174" element={<UseMemoTodoList/>} />
          <Route path="/case-175" element={<NoEffectReState/>} />
          <Route path="/case-176" element={<NoEffectForm/>} />
          <Route path="/case-177" element={<EffectResync/>} />
          <Route path="/case-178" element={<EffectReactiveVle/>} />
          <Route path="/case-179" element={<EffecEmptyDeps/>} />
          <Route path="/case-180" element={<LinterCheckDeps/>} />
          <Route path="/case-181" element={<RepeateIptResync/>} />
          <Route path="/case-182" element={<EffectChangeSync/>} />
          <Route path="/case-183" element={<RepeatEmpetDeps/>} />
          <Route path="/case-184" element={<RepeatSwitchRoom/>} />
          <Route path="/case-185" element={<EffectAlone/>} />
          <Route path="/case-186" element={<EvenetAndEffect/>} />
          <Route path="/case-187" element={<EffectOverLogic/>} />
          <Route path="/case-188" element={<EffectGetNotLogic/>} />
          <Route path="/case-189" element={<CubLinterOldV/>} />
          <Route path="/case-190" element={<UpdateTimer/>} />
          <Route path="/case-191" element={<RepeatFreezeTimer/>} />
          <Route path="/case-192" element={<RepeatDelay/>} />
          <Route path="/case-193" element={<RepeatDelayInfo/>} />
          <Route path="/case-194" element={<DepsWithCode/>} />
          <Route path="/case-195" element={<RemoveDeps/>} />
          <Route path="/case-196" element={<IgnoreLinterFault/>} />
          <Route path="/case-197" element={<ObjAsReactionValue/>} />
          <Route path="/case-198" element={<MoveOjbToEffect/>} />
          <Route path="/case-199" element={<RepeatResetGap/>} />
          <Route path="/case-200" element={<RepeatAnimation/>} />
          <Route path="/case-201" element={<RepeatRelink/>} />
          <Route path="/case-202" element={<StatusBar/>} />
          <Route path="/case-203" element={<SaveButton/>} />
          <Route path="/case-204" element={<HookOnline/>} />
          <Route path="/case-205" element={<IndependentStateForm/>} />
          <Route path="/case-206" element={<HoookForm/>} />
          <Route path="/case-207" element={<HookChatRoom/>} />
          <Route path="/case-208" element={<HookOnlineRe/>} />
          <Route path="/case-209" element={<HookFadeIn/>} />
          <Route path="/case-210" element={<HookCount/>} />
          <Route path="/case-211" element={<HookCountDelay/>} />
          <Route path="/case-211-2" element={<DrawInterval/>} />  
          <Route path="/case-212" element={<HookDelayValue />} />
          <Route path="/case-213" element={<StaticVer/>} />
          <Route path="/case-214" element={<CreateState/>} />
          <Route path="/case-215" element={<AddDateFlow/>} />
          <Route path="/case-216" element={<OrderOutStore/>} />
          <Route path="/case-217" element={<OrderBapi/>} />
          <Route path="/case-218" element={<TicGame/>} />
          <Route path="/case-219" element={<ColorSwitch/>} />
          <Route path="/case-220" element={<AddRemCssClass/>} />
          <Route path="/case-221" element={<RepeatNotUpdate/>} />
          <Route path="/case-222" element={<ClearLoadingPic/>} />
          <Route path="/case-223" element={<RepBrokenClock/>} />
          <Route path="/case-224" element={<RepeatDataCard/>} />
          <Route path="/case-225" element={<RepTwiceTrigger/>} />
          <Route path="/case-226" element={<RepEffGetDate/>} />
          <Route path="/case-227" element={<RepeatStoryList/>} />
          <Route path="/case-228" element={<LightSwitch/>} />
          <Route path="/case-229" element={<ChildrenTransCode/>} />
          <Route path="/case-230" element={<SecretChat/>} />
          <Route path="/case-231" element={<JumpRecal/>} />
          <Route path="/case-232" element={<RepJiange/>} />
          <Route path="/case-233" element={<PageOne/>} />
          {/* <Route path="/case-234" element={<PageTwo/>} /> */}
        {/*</Route>*/}
      </Routes>
    </>
  );
}
