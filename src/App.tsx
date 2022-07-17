import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import reactLogo from "./assets/react.svg";
import HeaderT from "./components/HeaderT";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[7]">
        <HeaderT />
        <div>
          <img src={reactLogo} className="h-8 w-8" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
