if(typeof cms=="undefined"){cms={}}cms.contextPath="";if(typeof cms.components=="undefined"){cms.components={}
}cms.sendAsyncRequest=function(url,compId,cellId){$.get(url,function(data){var component=$("DIV[comp_id="+compId+"][cell_id="+cellId+"]");
component.replaceWith(data);component=$("DIV[comp_id="+compId+"][cell_id="+cellId+"]")
})};if(typeof cms.components.gallery=="undefined"){cms.components.gallery={}}cms.components.gallery.initGallery=function(comp,visibleItems,vertical,autoScrollInterval,showArrows){var galleryList=comp.find(".bd .listBoxWindow >UL");
if(showArrows){galleryList.jcarousel({auto:autoScrollInterval,visible:visibleItems,vertical:vertical,wrap:"circular",scroll:1,itemVisibleInCallback:cms.components.gallery.itemVisibleInCallback,buttonNextHTML:'<div class="arrow right"></div>',buttonPrevHTML:'<div class="arrow left"></div>'})
}else{galleryList.jcarousel({auto:autoScrollInterval,visible:visibleItems,vertical:vertical,wrap:"circular",scroll:1,itemVisibleInCallback:cms.components.gallery.itemVisibleInCallback,buttonNextHTML:null,buttonPrevHTML:null})
}galleryList.css("visibility","visible");galleryList.show()};cms.components.gallery.itemVisibleInCallback=function(carousel,li,index,state){var carouselSlot=$(li).find(".carouselSlot");
if(!carouselSlot.data("state")){carouselSlot.data("state","loading");var prodId=carouselSlot.attr("prodId");
jQuery.get(cms.contextPath+"/cms/component/productGalleryItem.jsp?productId="+prodId,function(data){carouselSlot.html(data);
carouselSlot.data("state","loaded")})}};if(typeof cms.components.carouselBanner=="undefined"){cms.components.carouselBanner={}
}cms.components.carouselBanner.initCarousel=function(component){var carouselDiv=component.find(".carousel")[0];
var switchTimeVar=false;var auto_scroll=$(carouselDiv).attr("auto_scroll");if(auto_scroll){switchTimeVar=parseInt(auto_scroll,10)*1000
}$(carouselDiv).IHGallery({duration:1000,holder:"div.holder",scrollElParent:"> ul",scrollEl:"> li",numHolder:"div.thumbs",step:true,thumbTag:"div",btnPrev:"div.btn_lt",btnNext:"div.btn_rt",easing:"easeInOutExpo",switchTime:switchTimeVar})
};