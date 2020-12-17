function cancelHover() {
  document.getElementById("cancel").className = "cancelButtonOnHover";
}
function cancelHoverOut() {
  document.getElementById("cancel").className = "btn";
}
function submitHover() {
  document.getElementById("submitButton").className = "submitButtonOnHover";
}
function submitHoverOut() {
  document.getElementById("submitButton").className = "submitButton";
}
function resetHover() {
  document.getElementById("resetButton").className = "resetButtonOnHover";
}
function resetHoverOut() {
  document.getElementById("resetButton").className = "resetButton";
}
// Event listener to select salary
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
  output.textContent = salary.value;
});