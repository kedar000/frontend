import { lazy, Suspense, useState } from "react";
import "./App.css";
import WithoutState from "../components/WithoutState";
import WithState from "../components/WithState";
// @ts-ignore - JSX module has no TypeScript declaration file
import SyntheticEvent from "../components/SyntheticEvent.jsx";
import ControlledComponent from "../components/section_3/ControlledComponent";
import UnControlledComponent from "../components/section_3/UnControlledComponent";
import FormValidation from "../components/section_3/FormValidation";
import UseEffectmodule from "../components/section_4/UseEffectmodule";
import UseRefModule from "../components/section_4/UseRefModule";
import UseMemoModule from "../components/section_4/UseMemoModule";
import UseCallbackModule from "../components/section_4/UseCallbackModule";
import ProblemuseCallback from "../components/section_4/ProblemuseCallback";
import UseContextModule from "../components/section_4/UseContextModule";
import Loading from '../components/lazy/Loading';
// import Dashboard from '../components/lazy/Dashboard';

const Dashboard = lazy(() => import("../components/lazy/Dashboard"));
import Fetch from '../components/section_5/Fetch';
import Axios from '../components/section_5/Axios';

function App() {
  console.log(`log from App class `);

  const [showDashboard, setShowDashboard] = useState(false);

    console.log("App Rendered");

  return (
    <>
      {/* <WithoutState /> */}
      {/* <WithState /> */}
      {/* <SyntheticEvent /> */}
      {/* <ControlledComponent /> */}
      {/* {/* <UnControlledComponent /> */}
      {/* <FormValidation /> */} 
      {/* <UseEffectmodule /> */}
      {/* <UseRefModule /> */}
      {/* <UseMemoModule /> */}
      {/* <UseCallbackModule /> */}
      {/* <ProblemuseCallback /> */}
      {/* <UseContextModule / > */}

      {/* <div style={{ padding: "30px" }}>
        <h1>React Lazy Loading Demo</h1>

        <button onClick={() => setShowDashboard(true)}>Load Dashboard</button>

        <hr />

        {showDashboard && (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        )}
      </div> */}

      {/* <Fetch /> */}
      <Axios />
      
    </>
  );
}

export default App;
