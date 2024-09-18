import { createContext, useState } from "react";
import AppLink from "./AppLink";
import LearnExternalCss from "./LearnCss/LearnExternalCss";
import LearnDynamicRoute from "./LearnDynamicRoute/LearnDynamicRoute";
import LearnForm from "./LearnForm/LearnForm";
import LearnForm1 from "./LearnForm/LearnForm1";
import GetLocalStorage from "./LearnLocalStorage/GetLocalStorage";
import RemoveLocalStorage from "./LearnLocalStorage/RemoveLocalStorage";
import SetLocalStorage from "./LearnLocalStorage/SetLocalStorage";
import Routing from "./LearnRouting/Routing";
import SessionStorage from "./LearnSessionStorage/SessionStorage";
import UseState from "./LearnUseState/UseState";
import UseState1 from "./LearnUseState/UseState1";
import UseState2 from "./LearnUseState/UseState2";
import UseState3 from "./LearnUseState/UseState3";
import UseState4 from "./LearnUseState/UseState4";
import UseState5 from "./LearnUseState/UseState5";
import NestedRouting from "./NestedRouting/NestedRouting";
import NestedRouting1 from "./NestedRouting/NestedRouting1";
import Parent from "./Prop-drilling/Parent";
import LearnUseEffect from "./UseEffect/LearnUseEffect";
import LearnUseEffect1 from "./UseEffect/LearnUseEffect1";
import GreatGrandChild from "./Prop-drilling/GreatGrandChild";
import SignUpForm from "./LearnForm/SignUpForm";

// export let Context = createContext();

const App = () => {
  // let [name, setName] = useState("ram");
  return (
    <>
      <SignUpForm />
      {/* <Context.Provider value={{ name, setName }}>
        <Parent />
      </Context.Provider> */}
      {/* <LearnForm1 /> */}
      {/* <LearnUseEffect1 /> */}
      {/* <LearnUseEffect /> */}
      {/* <UseState5 /> */}
      {/* <UseState4 /> */}
      {/* <UseState3 /> */}
      {/* <UseState2 /> */}
      {/* <UseState1 /> */}
      {/* <UseState /> */}
      {/* <NestedRouting1 /> */}
      {/* <NestedRouting /> */}
      {/* <AppLink></AppLink>
      <Routing /> */}
      {/* <LearnDynamicRoute /> */}
      {/* <LearnExternalCss></LearnExternalCss> */}
      {/* <LearnForm /> */}
      {/* <SetLocalStorage /> */}
      {/* <GetLocalStorage /> */}
      {/* <RemoveLocalStorage /> */}
      {/* <SessionStorage /> */}
    </>
  );
};

export default App;
