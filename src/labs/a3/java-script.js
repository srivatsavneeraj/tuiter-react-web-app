import VariableTypes from "./variable-types";
import VariablesAndConstants from "./variables-and-constants";
import BooleanVariables from "./boolean-variables";
import IfElseFunc from "./if-else";
import TernaryOperators from "./ternary-operator";
import WorkingWithFunctions from "./es5-functions";
import TemplateLiterals from "./template-literals";
import House from "./house";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";


function JavaScript() {
    console.log('Hello World');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElseFunc/>
          <TernaryOperators/>
          <WorkingWithFunctions/>
          <TemplateLiterals />
          <House />
          <Spread />
          <Destructing />
          <FunctionDestructing />
       </div>
    );
 }
 export default JavaScript