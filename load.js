console.log('load has loaded');

var Planet= (function(moon){

    moon.loadImages= function(callback){
        $.ajax({
            url: "https://api.nasa.gov/planetary/apod?api_key=oSXV3Yw1s78BPomzADMXZNg50rT8af4vUulN2OWQ",
            success: function(planetArr){
                callback(planetArr)
            }
        })
    }


return moon;
})(Planet || {})