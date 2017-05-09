console.log('main.js has loaded');

var output= $("#output")
var counter=0;
var left= $("#leftArrow");
var right= $("#rightArrow");
let date= new Date("2016-5-9");
let newDate= new Date(date);
function slideshow(){
     date.setDate(date.getDate()-counter);
    newDate=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return newDate;
}
console.log(slideshow());

left.on('click', function(){
    counter--;
    loader().fadeIn(1000);
})

right.on("click",() =>{
    counter++;
    loader().fadeIn(1000);
})

function loader(){
$.ajax({
  url: `https://api.nasa.gov/planetary/apod?api_key=oSXV3Yw1s78BPomzADMXZNg50rT8af4vUulN2OWQ&date=${slideshow()}`,
  success: function(result){
    console.log(result)
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});
}
