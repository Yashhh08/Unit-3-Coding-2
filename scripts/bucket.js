// On clicking remove button the item should be removed from DOM as well as localstorage.
var alldata = JSON.parse(localStorage.getItem("coffee"));

var total = 0;

console.log(alldata.length);

alldata.forEach(function (el, index) {
  var box = document.createElement("div");
  box.setAttribute("id", "box");
  document.querySelector("#bucket").append(box);

  var image = document.createElement("img");
  image.setAttribute("src", el.image);
  image.style.height = "200px";
  image.style.width = "200px";

  var title = document.createElement("p");
  title.innerText = el.title;

  var description = document.createElement("p");
  description.innerText = el.description;

  var price = document.createElement("p");
  price.innerText = el.price;

  var button = document.createElement("button");
  button.setAttribute("id", "remove_coffee");
  button.innerText = "REMOVE";

  button.addEventListener("click", function_remove);

  function function_remove(el, index) {
    alldata.splice(index, 1);

    localStorage.setItem("coffee", JSON.stringify(alldata));

    window.location.reload();
  }

  total += Number(el.price);

  document.querySelector("#total_amount").innerText = total;

  console.log(total);

  box.append(image, title, price, button);
});

document
  .querySelector("#confirm_checkout")
  .addEventListener("click", function () {
    window.location.href = "checkout.html";
  });
