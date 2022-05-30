// Add the coffee to local storage with key "coffee"
var alldata = JSON.parse(localStorage.getItem("coffee")) || [];

console.log(alldata.length);

var count = alldata.length;

async function coffee_menu() {
  var url = "https://masai-mock-api.herokuapp.com/coffee/menu";
  try {
    var data = await fetch(url);

    var response = await data.json();

    console.log(response.menu.data);
    display_data(response.menu.data);
  } catch (error) {
    console.log("error");
  }
}

coffee_menu();

function display_data(data) {
  data.forEach(function (el) {
    var box = document.createElement("div");
    box.setAttribute("id", "box");
    document.querySelector("#menu").append(box);

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
    button.setAttribute("id", "add_to_bucket");
    button.innerText = "add to bucket";

    button.addEventListener("click", function_button);

    function function_button() {
      count++;
      document.querySelector("#coffee_count").innerText = count;
      alldata.push(el);
      console.log(alldata);

      localStorage.setItem("coffee", JSON.stringify(alldata));
    }

    box.append(image, title, price, button);
  });
}

document.querySelector("#coffee_count").innerText = count;
