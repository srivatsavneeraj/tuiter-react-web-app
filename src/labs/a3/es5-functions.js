import ArrowFunctions from "./arrow-functions";
import FunctionParanthesisAndParameters from "./function-parenthesis-and-parameters";
import ImpliedReturn from "./implied-return";
import WorkingWithArrays from "./working-with-arrays";

function WorkingWithFunctions() {
  function add(a, b) {
    return a + b;
  }
  const twoPlusFour = add(2, 4);
  console.log(twoPlusFour);

  return (
    <>
      <h2>Functions</h2>
      <h3>Legacy ES5 functions</h3>
      twoPlusFour = {twoPlusFour}
      <br />
      add(2, 4) = {add(2, 4)}
      <br />
      <ArrowFunctions />
      <ImpliedReturn />
      <FunctionParanthesisAndParameters />
      <WorkingWithArrays />
    </>
  );
}
export default WorkingWithFunctions;
