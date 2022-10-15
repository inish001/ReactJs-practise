// import logo from './logo.svg';
import React from "react";
import "./App.css";
// import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
// import Greet from './components/Greet';
// import mycomponent from './components/Greet';  this would be show error,as it follows pascal case and first letter should be capital always
// import Mycomponent from './components/Greet';  // changed the name of the component from Greet to Mycomponent (defalut export)
// import { Greet } from './components/Greet';  // named export exact name should be at the importing time
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';    // for understanding jsx or without jsx
// import Greet1 from './components/Greet1'  // for using props in functional components
// import Welcome1 from './components/Welcome1' // for using props in class components
// import Message from './components/Message'   //  for using state
// import Count from './components/Count';   // for set state
// import Click from './components/Click';  // for event handling in class components
// import ClassClick from './components/ClassClick';  // for event handling in class
// import EventBind from './components/EventBind'; // for binding event handlers
// import Parents from './components/Parents' // for transferring child to parents
// import Conditions from './components/Conditions'; // for conditional rendering
// import Home from './components/Home' // for useState Hook    and implementing route
// import List from './components/List';      // for useEffect Hook, use effect dependencies, fetchdata with use effect, conditional loading msg
// import Home1 from './components/Home1';  //creating a custom hook
// import Fetch from './components/Fetch';  // for normal fetching
// import Create from './components/Create';   // for form creation
// import PostCreate from './components/PostCreate';  // for using post method in form
// import UserList from "./components/UserList";   // for using Hoc
// import SearchTodos from "./components/TodoList";
// import TodoList from "./components/TodoList";
// import SearchUsers from "./components/UserList"; // for using hoc
// import FocusInput from "./components/FocusInput";  // fpr focusing input using useRef()
// import HookTimer from "./components/HookTimer";  //  for useref()
// import RefsDemo from "./components/RefsDemo";     // ref using class and react.createRef()    
// import RefsDemo1 from "./components/RefsDemo1";      // ref using class and call back refs
// import HookTimer1 from "./components/HookTimer1";  // for clearing my doubt
// import FRParentInput from "./components/FRParentInput"; // for forward ref
// import PureComp from "./components/PureComp";  // for pure components.
// import RegComp from "./components/RegComp";
// import ParentComp from "./components/ParentComp";
// import LifeCycleA from "./components/LifeCycleA";   // for lifecycle method mounting
// import LFA from "./components/LFA";  // for component did mount
// import LifeCycleC from "./components/LifeCycleC";  // for lifecycle method update
// import ErrorBound from "./components/ErrorBound";  // for lifecycle error method
// import Hero from "./components/Hero";   // for lifecycle error method
// import PortalDemo from "./components/PortalDemo";  // for react portals
// import ClickCounter from "./components/ClickCounter";  // for render props
// import HoverCounter from "./components/HoverCounter";  // for render props
// import ClickCounter from "./components/ClickCounter";  // for render props method
// import ComponentC from "./components/ComponentC";  // for context
// import {UserProvider} from "./components/UserContext"  // for context
// import PostList from "./components/PostList"; // for using axios get request
// import PostForm from "./components/PostForm";   // for using axios post
// import Counter1 from "./components/Counter1";  // for using reducer hook
// import Counter2 from "./components/Counter2";  // for using reducer hook
import Counter3 from "./components/Counter3";  // for using multiple useReducers

// export const UserContext = React.createContext();  // for context 
// export const ChannelContext = React.createContext();  // for context 
function App() {
  return (
    <div className="App">
      {/* <Mycomponent />  changed tag name from Greet to Mycomponent (default export) */}
      {/* <Greet/>
      <Welcome/> */}
      {/* <Hello/>  this was for jsx with or without */}
      {/* <Greet1 name = "Nishant" city="Delhi">
        <p>This is a child property</p>
        </Greet1>
        <Greet1 name ="Raj" city ="Up">
        <button>Action</button>
        </Greet1>
      <Greet1 name = "Ram" city="UK"/> */}
      {/* <Welcome1 name = "Nishant" city="Delhi"></Welcome1>
      <Welcome1 name = "Nishant" city="Up"></Welcome1>
    <Welcome1 name = "Nishant" city="UK"></Welcome1> */}
      {/* <Message/> */}
      {/* <Count></Count> */}
      {/* <Click/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <Parents></Parents> */}
      {/* <Conditions/> */}
      {/* <List/> */}
      {/* <Home1/> */}
      {/* <Fetch/> */}
      {/* <Create/> */}
      {/* <PostCreate/> */}
      <div className="section">
        <div>
          {/* <UserList /> */}
          {/* <SearchUsers/> */}
        </div>
        <div>
          {/* <TodoList/> */}
          {/* <SearchTodos/> */}
          {/* <PureComp />
          <RegComp />
          <ParentComp /> */}
        </div>
      </div>
      {/* <FocusInput/> */}
      {/* <HookTimer/> */}
      {/* <HookTimer1/> */}
      {/* <FRParentInput/> */}
      {/* <LifeCycleA/> */}
      {/* <LFA/> */}
      {/* <LifeCycleC/> */}
      {/* <ErrorBound>
        <Hero heroName="Batman" />
        </ErrorBound>
        <ErrorBound>
        <Hero heroName="Superman" />
        </ErrorBound>
        <ErrorBound>
        <Hero heroName="Joker" />
      </ErrorBound> */}
      {/* <RefsDemo/> */}
      {/* <RefsDemo1/> */}
      {/* <PortalDemo/> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
      {/* <Counter render ={(count,incrementCount)=><ClickCounter count = {count} incrementCount ={incrementCount}/>}/>
      <Counter render ={(count,incrementCount)=><HoverCounter count={count} incrementCount ={incrementCount}/>}/> */}
      {/* <UserContext.Provider value="Nishant">
        <ChannelContext.Provider value="FitMinds">
      <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
       {/* <PostList/>  */}
       {/* <PostForm/> */}
       {/* <Counter1/> */}
       {/* <Counter2/> */}
       <Counter3/>
    </div>
  );
}

export default App;
