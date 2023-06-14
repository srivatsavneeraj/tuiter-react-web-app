import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ArrayIndexAndLength from "./array-index-and-length";
import FindFunction from "./find-function";
import ForLoops from "./for-loops";
import JSONSTRINGIFY from "./json-stringify";
import MapFunction from "./map-function";
import FindIndex from "./find-index";
import FilterFunction from "./filter-function";


function WorkingWithArrays() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];

  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];

  return (
    <>
      <h2>Working with Arrays</h2>
      numberArray1 = {numberArray1}
      <br />
      stringArray1 = {stringArray1}
      <br />
      variableArray1 = {variableArray1}
      
      <ArrayIndexAndLength />
      <AddingAndRemovingDataToFromArrays />
      <ForLoops />
      <MapFunction />
      <JSONSTRINGIFY />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
    </>
  );
}
export default WorkingWithArrays;