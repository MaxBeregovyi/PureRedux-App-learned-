import store from "./redux/store.js";
import { addCurrentTime, clearTimes } from "./redux/action.creters.js";

const addTimeBtn = document.getElementById("addTime");
addTimeBtn.addEventListener("click", () => store.dispatch(addCurrentTime()));

const clearAllTimes = document.getElementById("clearTimes");
clearAllTimes.addEventListener("click", () => store.dispatch(clearTimes()));

const timeList = document.getElementById("timeList");
store.subscribe(() => {
  timeList.innerHTML = "";

  const times = store.getState();
  times.forEach((time) => {
    let li = document.createElement("li");
    li.innerText = time;
    timeList.appendChild(li);
  });
});

// const unsubscribe = store.subscribe(() =>
//   console.log(`Redux store change ${store.getState()}`),
// );
//
// store.dispatch({
//   type: "ADD_CURRENT_TIME",
//   payload: "11:30:11",
// });
// unsubscribe();
//
// store.dispatch({
//   type: "ADD_CURRENT_TIME",
//   payload: "19:11:1990",
// });
//
// store.dispatch({
//   type: "CLEAR_ALL_TIMES",
// });
