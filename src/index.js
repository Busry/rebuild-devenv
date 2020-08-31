import "./index.css";
import numeral from "numeral";

const num = numeral(1000).format("$0,0.00");
debugger;
console.log(`I like to be paid far more than ${num}`);
