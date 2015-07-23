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


//---------------------------getRandomInt---------------------------------------------------
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//-------------------------------------------- More Red ----------------------------------------
function makeMoreRed(img, adjustment) {

    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i+0] = data[i+0] + adjustment; //Choose 0 for R, 1 for G, 2 = B, 3 = A
        //and add a numerical no. for how much extra value
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

//-------------------------------------------- More Green ----------------------------------------
function makeMoreGreen(img, adjustment) {

    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i+1] = data[i+1] + adjustment; //Choose 0 for R, 1 for G, 2 = B, 3 = A
        //and add a numerical no. for how much extra value
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

//-------------------------------------------- More Blue ----------------------------------------
function makeMoreBlue(img, adjustment) {

    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i+2] = data[i+2] + adjustment; //Choose 0 for R, 1 for G, 2 = B, 3 = A
        //and add a numerical no. for how much extra value
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

//-------------------------------------------- Brighten ----------------------------------------
function brighten(img, adjustment) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length;i += 4) {

        data[i] = data[i] + adjustment;
        data[i+1] = data[i+1] + adjustment;
        data[i+2] = data[i+2] + adjustment;

    }

    ImageUtils.putPixels(pixels, img.width, img.height);
}

//-------------------------------------------- Invert ----------------------------------------

function makeInvert(img) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length;i += 4) {

        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];

    }

    ImageUtils.putPixels(pixels, img.width, img.height);
}

//-------------------------------------------- make Noise ----------------------------------------

function makeNoise(img, level) {

    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {

        var adjustment = getRandomInt(-level, level);

        data[i] = data[i] + adjustment;
        data[i + 1] = data[i + 1] + adjustment;
        data[i + 2] = data[i + 2] + adjustment;

    }

    ImageUtils.putPixels(pixels, img.width, img.height);
}

//-------------------------------------------- make Funky ----------------------------------------

function makeFunky(img) {

    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length/2; i += 2) {
        var temp = data[i];
        data[i] = data[length - i];
        data[length - i] = temp;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

//-------------------------------------------Ready function ----------------------------------

$(document).ready(function() {
    var img = new Image();
    img.src = "img/grumpyCat.jpg";
    //img.src = "img/photoshoppedBg.png";


    //makeMoreBlue(img, 200);
    //brighten(img, -80);
    //makeInvert(img);
    //makeNoise(img, 50);
    makeFunky(img);

    // var pixels = ImageUtils.getPixels(img);
    //var heightPixelsToHide = 200;
    //var heightPixelsToHide2 = 235;
    //
    //  for(var i = 0; i < img.width * heightPixelsToHide * 4; i++) {
    //      pixels.data[i] = 0;
    //     // console.log(i);
    //
    // }
    ////  console.log(img.width * img.height * 4 - 1);
    ////  console.log(img.width * heightPixelsToHide2 * 4);
    //  //
    //  //for(var x = (img.width * img.height * 4) - 1; x > (img.width * heightPixelsToHide2 * 4); x = x - 4) {
    //  //    pixels.data[x] = 170;
    //  //    //  console.log(x);
    //  //} //iteration of x = x - 1 means R value; - 2 means G value; -3 means B value; -4 means alpha transparency value
    //
    //  for(var x = (img.width * heightPixelsToHide2 * 4) - 1; x > (img.width * heightPixelsToHide * 4); x = x - 4) {
    //      pixels.data[x] = 170;
    //      //  console.log(x);
    //  } //Alpha value of near the eyes are slightly transparent
    //
    //  console.log(pixels);
    //  ImageUtils.putPixels(pixels, img.width, img.height);

});