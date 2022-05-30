document.querySelector("form").addEventListener("submit", function_submit);

function function_submit() {
  event.preventDefault();

  setTimeout(function () {
    alert("Your order is accepted");
  }, 0);

  setTimeout(function () {
    alert("Your order is being Prepared");
  }, 3000);

  setTimeout(function () {
    alert("Your order is being packed");
  }, 8000);

  setTimeout(function () {
    alert("Your order is out for delivery");
  }, 10000);

  setTimeout(function () {
    alert("Order delivered");
    document.querySelector("#name").value = "";
    document.querySelector("#number").value = "";
    document.querySelector("#address").value = "";
  }, 12000);
}
