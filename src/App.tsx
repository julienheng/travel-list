import "./App.css";

// COMPONENTS
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";



function App() {
  return (
    <div className="w-screen min-h-screen grid grid-rows-[auto,auto,1fr,auto]">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
