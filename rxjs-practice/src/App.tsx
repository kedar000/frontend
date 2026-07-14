import "./App.css";
import Counter from "./components/Counter";
import EventLog from "./components/EventLog";
import Login from "./components/Login";
import SearchBox from "./components/SearchBox";
import Stopwatch from "./components/Stopwatch";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="container py-5">

      <div className="row g-4">

        <div className="col-12 col-md-6">
          <SearchBox />
        </div>

        <div className="col-12 col-md-6">
          <Counter />
        </div>

        <div className="col-12 col-md-6">
          <Login />
        </div>

        <div className="col-12 col-md-6">
          <UserInfo />
        </div>

        <div className="col-12 col-md-6">
          <Stopwatch />
        </div>

        <div className="col-12 col-md-6">
          <EventLog />
        </div>

      </div>
    </div>
  );
}

export default App;