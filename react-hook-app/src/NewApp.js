import React from 'react';
import DataFetchingOne from './useReduceComponent/DataFetchingOne';
import logo from './logo.svg';
import './App.css';
import DataFetchingTwo from './useReduceComponent/DataFetchingTwo';
import ParentComponent from './useCallbackComponent/ParentComponent';
import Counter from './useMemoComponent/Counter';
import UseRefInputFocus from './useMemoComponent/UseRefInputFocus';
import ClassTimer from './useMemoComponent/ClassTimer';
import HookTimer from './useMemoComponent/HookTimer';
import HookCounter from './components/HookCounter';
import DocTitleOne from './CustomHooks/DocTitleOne';
import DocTitleTwo from './CustomHooks/DocTitleTwo';
import CounterOne from './CustomHooks/CounterOne';
import CounterTwo from './CustomHooks/CounterTwo';
import UserForm from './CustomHooks/UserForm';

function NewApp(props) {
    return (
        <div className='App'>
            {/* <DataFetchingOne /> */}
            {/* <DataFetchingTwo /> */}
            {/* <ParentComponent /> */}
            {/* <Counter /> */}
            {/* <UseRefInputFocus /> */}
            {/* <ClassTimer /> */}
            {/* <HookTimer /> */}
            {/* <DocTitleOne /> */}
            {/* <DocTitleTwo /> */}
            {/* <CounterOne /> */}
            {/* <CounterTwo /> */}
            <UserForm />
        </div>
    );
}

export default NewApp;