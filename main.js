console.log('main.js has loaded');

var output= $("#output")
var counter=0;
var left= $("#leftArrow");
var right= $("#rightArrow");
const auto= $("#autoPlay");
let date= new Date("2016-5-9");
let newDate= new Date(date);
function slideshow(){
     date.setDate(date.getDate()-counter);
    newDate=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return newDate;
}
console.log(slideshow());

left.on('click', function(){
    counter=0;
    counter--;
    loader();
});

right.on("click",() =>{
    counter=0
    counter++;
    loader();
});


function loader(){
$.ajax({
  url: `https://api.nasa.gov/planetary/apod?api_key=oSXV3Yw1s78BPomzADMXZNg50rT8af4vUulN2OWQ&date=${slideshow()}`,
  success: function(result){
    console.log(result)
  if("copyright" in result) {
    $("#copyright").hide().text("Image Credits: " + result.copyright).fadeIn(3000);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
if(result.media_type == "video") {
            $("#apod_img_id").css("display", "none");
            $("#apod_vid_id").hide().attr("src", result.url).fadeIn(1500);
             $("#apod_vid_id").delay(4000).attr('src', result.url).fadeOut(1500);

          }
          else {
            $("#apod_vid_id").css("display", "none");
            $("#apod_img_id").hide().attr("src", result.url).fadeIn(1500);
            $("#apod_img_id").delay(4000).attr('src', result.url).fadeOut(1500);
  }
  
  $("#apod_explaination").hide().text(result.explanation).fadeIn(1500);
  $("#apod_title").hide().text(result.title).fadeIn(1500);
}
});
}
loader();
 setInterval(function(){
    counter= 0;
    counter++;
    loader();
}, 7000
);