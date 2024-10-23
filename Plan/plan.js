
var tabElements = document.querySelectorAll("#seci > div");

for (var i = 0; i < tabElements.length; i++) {
  tabElements[i].addEventListener("click", function() {
    var tabNumber = this.getAttribute("data-id");
    showContent(tabNumber);
    vertrian(tabNumber);
  });
}

function vertrian(num){
    var triangulo = document.querySelectorAll(".agen > div");
    for (var i = 0; i < triangulo.length; i++) {
        if (triangulo[i].getAttribute("data-idcontent") === num) {
            triangulo[i].classList.add("on");
        
        } else {
            triangulo[i].classList.remove("on");
        }
    }
}


function showContent(contentNumber) {
  var contentElements = document.querySelectorAll("#container > div.content");
  for (var i = 0; i < contentElements.length; i++) {
    if (contentElements[i].getAttribute("data-idcontent") === contentNumber) {
      contentElements[i].classList.add("on");
    } else {
      contentElements[i].classList.remove("on");
    }
  }
}






