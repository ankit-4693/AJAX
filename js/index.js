$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("https://jsonplaceholder.typicode.com/posts/1/comments", function(result){
      $.each(result, function(i, field){
        var card = document.createElement("DIV");
        card.setAttribute("class", "card");
        var gallerydata = document.getElementsByClassName("gallery_content");
        gallerydata[0].appendChild(card);
        var cardimg = document.createElement("IMG");
        cardimg.setAttribute("src", "https://cdn3.iconfinder.com/data/icons/mixed-icon-collection/100/2--512.png");
        cardimg.setAttribute("width", "250");
        cardimg.setAttribute("height", "228");
        cardimg.setAttribute("alt", "The Card");
        var card = document.getElementsByClassName("card");
        card[i].appendChild(cardimg);
        var cardinfo = document.createElement("DIV");
        cardinfo.setAttribute("class", "card_info");
        var name = document.createElement("h4");
        name.textContent = result[i].name;
        designation = document.createElement("p");
        designation.textContent = result[i].email;
        cardinfo.appendChild(name);
        cardinfo.appendChild(designation);
        card[i].appendChild(cardinfo);
        //$("div").append(result[i].name + " ");
      });
    });
  });
});