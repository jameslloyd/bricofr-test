function carouselSustainableDevelopment(selector){var itemsBox=$(selector).find("ul");
var caruselItemsArrey=itemsBox.find("li");var itemsAmount=itemsBox.find("li").size();
var itemWidht=itemsBox.find("li").first().width();var currentItemIndex=0;var pagingLinks=$(".caruselPaging").find("a");
itemsBox.css("width",itemWidht*itemsAmount);$(".caruselPaging").show();function mooveItem(index){itemsBox.animate({marginLeft:-itemWidht*index},300);
pagingLinks.filter(".active").removeClass("active");$(pagingLinks[index]).addClass("active");
var itemHref=$(caruselItemsArrey[index]).find("a").attr("href");if($("#open-page-carusel-link")){$("#open-page-carusel-link").attr("href",itemHref)
}}function repeat(){currentItemIndex++;if(currentItemIndex>=itemsAmount){currentItemIndex=0
}mooveItem(currentItemIndex)}var intervalId=setInterval(repeat,5000);$(".caruselPaging a").click(function(e){e.preventDefault();
clearInterval(intervalId);mooveItem($(this).index())})}$(document).ready(function(){if($(".caruselBox").length>0){carouselSustainableDevelopment(".caruselBox")
}});