import { useState } from 'react'
import './App.css'
import WithoutState from '../components/WithoutState';
import WithState from '../components/WithState';
// @ts-ignore - JSX module has no TypeScript declaration file
import SyntheticEvent from '../components/SyntheticEvent.jsx';
import ControlledComponent from '../components/section_3/ControlledComponent';
import UnControlledComponent from '../components/section_3/UnControlledComponent';
import FormValidation from '../components/section_3/FormValidation';
import UseEffectmodule from '../components/section_4/UseEffectmodule';
import UseRefModule from '../components/section_4/UseRefModule';
import UseMemoModule from '../components/section_4/UseMemoModule';
import UseCallbackModule from '../components/section_4/UseCallbackModule';
import ProblemuseCallback from '../components/section_4/ProblemuseCallback';
import UseContextModule from '../components/section_4/UseContextModule';



function App() {

  console.log(`log from App class `);
  

  return (
    <>
      {/* <WithoutState /> */}
      {/* <WithState /> */}
      {/* <SyntheticEvent /> */}
      {/* <ControlledComponent /> */}
      {/* <UnControlledComponent />
      <FormValidation /> */}
      {/* <UseEffectmodule /> */}
      {/* <UseRefModule /> */}
      {/* <UseMemoModule /> */}
      {/* <UseCallbackModule /> */}
      {/* <ProblemuseCallback /> */}
      <UseContextModule />
    </>
  )
}

export default App
