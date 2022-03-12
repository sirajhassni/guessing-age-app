const ageInput = document.getElementById("age");
let res = document.getElementById("result");

ageInput.addEventListener("keyup", () => {
  let inputVal = ageInput.value;
  if (inputVal.length > 0 && inputVal.length < 5) {
    let date = new Date();
    let personAge = date.getFullYear() - inputVal;
    res.innerHTML = `Your are ${personAge} year's Old &#128513;`;
  } else if (inputVal.length < 1) {
    res.innerHTML = `Enter and let me guess Your Age &#129300;`;
  } else {
    res.innerHTML = `Only 4 Digits Allowed &#128519;`;
  }
});
