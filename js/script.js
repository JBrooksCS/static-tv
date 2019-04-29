
function onImagesLoaded(container, event) {
    var images = container.getElementsByTagName("img");
    var loaded = images.length;
    for (var i = 0; i < images.length; i++) {
        if (images[i].complete) {
            loaded--;
        }
        else {
            images[i].addEventListener("load", function() {
                loaded--;
                if (loaded == 0) {
                    event();
                }
            });
        }
        if (loaded == 0) {
            event();
        }
    }
}

var container = document.querySelector(".tvHolder");

onImagesLoaded(container, function() {
    //alert("All the images have loaded");
    makeStatic()
});


function makeStatic(){
let HOLDER = document.querySelector(".tvHolder")
imageWidth = document.querySelector(".tv").width
imageHeight = document.querySelector(".tv").height
console.log(imageWidth)
console.log(imageHeight)


var canvas = document.createElement("canvas");
c = canvas.getContext('2d');
canvas.className = "static";

canvas.width = imageWidth - 20;
canvas.height = imageHeight -80;




var imageData = c.createImageData(canvas.width, canvas.height);
HOLDER.appendChild(canvas);
// ^ Getting close!
//document.querySelector(".static").height = 515;//document.querySelector(".img").height

(function loop() {

    for (var i = 0, a = imageData.data.length; i < a; i++) {
        imageData.data[i] = (Math.random() * 255) | 0;
    }

    c.putImageData(imageData, 0, 0);
    requestAnimationFrame(loop);

})();

}



