import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Video from "./pages/Video";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <div className="flex-[7]" />
        <Sidebar />
        <Header />
        <div className="py=5 px-24">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="video">
                <Route path=":id" element={<Video />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
