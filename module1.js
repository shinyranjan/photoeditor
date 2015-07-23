class ImageUtils {

    static getCanvas(w, h) {
        var c = document.querySelector("canvas");
        c.width = w;
        c.height = h;
        return c;
    }

    static getPixels(img) {
        var c = ImageUtils.getCanvas(img.width, img.height);
        var ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0);
        return ctx.getImageData(0,0,c.width,c.height);
    }

    static putPixels(imageData, w, h) {
        var c = ImageUtils.getCanvas(w, h);
        var ctx = c.getContext('2d');
        ctx.putImageData(imageData, 0, 0);
    }

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function definitions here


$(document).ready(function() {
    var img = new Image();
    img.src = "img/grumpyCat.jpg";

    var pixels = ImageUtils.getPixels(img);
    var heightPixelsToHide = 200;
    var heightPixelsToHide2 = 235;

    for(var i = 0; i < img.width * heightPixelsToHide * 4; i++) {
        pixels.data[i] = 0;
       // console.log(i);

   }
  //  console.log(img.width * img.height * 4 - 1);
  //  console.log(img.width * heightPixelsToHide2 * 4);
    //
    //for(var x = (img.width * img.height * 4) - 1; x > (img.width * heightPixelsToHide2 * 4); x = x - 4) {
    //    pixels.data[x] = 170;
    //    //  console.log(x);
    //} //iteration of x = x - 1 means R value; - 2 means G value; -3 means B value; -4 means alpha transparency value

    for(var x = (img.width * heightPixelsToHide2 * 4) - 1; x > (img.width * heightPixelsToHide * 4); x = x - 4) {
        pixels.data[x] = 170;
        //  console.log(x);
    } //Alpha value of near the eyes are slightly transparent

    console.log(pixels);
    ImageUtils.putPixels(pixels, img.width, img.height);

});