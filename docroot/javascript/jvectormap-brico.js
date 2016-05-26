$(document).ready(function(){$("#vector-map").vectorMap({map:"fr_mill_en",color:"#fdd6ac",backgroundColor:"#ffffff",hoverColor:"#fbb78a",markers:depotsData,markerDefaults:{fill:"#DE2B27",stroke:"#000",r:3},onMarkerClick:function(event,index){var valueSelect=parseInt(index)+1;
$("#myStoreM").get(0).selectedIndex=(valueSelect);var currSelection=$("#myStoreM").val();
if(currSelection!=null&&currSelection!=""){$("#access-btn").show()}else{$("#access-btn").hide()
}}})});