import "./App.css";
import SplitScreen from "./components/layouts/SplitScreen";
import SideBar from "./components/sidebar/SideBar";
import Main from "./components/main/Main";
function App() {
  return (
    <SplitScreen>
      <SideBar />
      <Main />
    </SplitScreen>
  );
}

export default App;
