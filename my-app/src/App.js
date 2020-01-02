import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome';
import { Hello } from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserComponent from './components/UserComponent';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import RefsDemo from './components/RefsDemo';
import Hero from './components/Hero';
import ErrorBoundery from './components/ErrorBoundery';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import RenderPropCounter from './components/RenderPropCounter';
import ComponentC from './components/context/ComponentC';
import PostList from './components/http/PostList';
import PostForm from './components/http/PostForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <PostForm />
          <PostList />
          <ComponentC />
          <RenderPropCounter>
          {(count, incrementCount) => (
            <ClickCounterTwo count = {count} incrementCount = {incrementCount} />
          )}
          </RenderPropCounter>
          <RenderPropCounter>
          {(count, incrementCount) => (
            <HoverCounterTwo count = {count} incrementCount = {incrementCount} />
          )}
          </RenderPropCounter>

          {/* or */}
          
          {/* <RenderPropCounter render = {(count, incrementCount) => (
            <ClickCounterTwo count = {count} incrementCount = {incrementCount} />
          )} />
          <RenderPropCounter render = {(count, incrementCount) => (
            <HoverCounterTwo count = {count} incrementCount = {incrementCount} />
          )} /> */}


          {/* <ClickCounterTwo />
          <HoverCounterTwo />
          <User name = {(isLoggedIn) => isLoggedIn ? 'PSPK' : 'Guest'} /> */}
          {/* <ClickCounter name = 'KOLA' />
          <HoverCounter name = 'PK' /> */}

          {/* <ErrorBoundery>
            <Hero heroName='PSPK' />
          </ErrorBoundery>
          <ErrorBoundery>
            <Hero heroName='Chiru' />
          </ErrorBoundery>
          <ErrorBoundery>
            <Hero heroName='Joker' />
          </ErrorBoundery>

          <RefsDemo />
          <LifeCycleA /> */}
          {/* <Form /> */}
          {/* <UserComponent /> */}
          {/* Parent components : <ParentComponent />
          Event Binder: <EventBind />
          Class Click: <ClassClick />
          Function Click: <FunctionClick />
          <Counter count={1}/>
          <Greet name = 'Mahendra' age="27">
            <p>This is the man works in Benz company</p>
          </Greet>
          <Greet name = 'Anji' age = "27">
            <p>This is the man works in HCL company</p>
          <button>click</button>
          </Greet>
          <Greet name = 'PSPK' age = "46" >
            <p>This is the man who helping to many people as actor/politician </p>
          </Greet>
          <Welcome name = 'Mahendra' >
            <p>This is the man works in Benz company</p>
          </Welcome>
          <Welcome name = 'Anji' />
          <Welcome name = 'PSPK' />
          <Message /> */}
          {/* <Hello /> */}
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
