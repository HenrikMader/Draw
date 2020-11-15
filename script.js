function draw(){
    // Canvas
    setInterval(draw_real, 100);
}

function draw_real () {
    for (var i = 0; i < 10000; i++) {
        var x = (Math.floor(Math.random() * 3)) + 1;
        var arr = ['1', '1', '2', '3', '3', '3', '3', '3'];
        var x = (Math.floor(Math.random() * arr.length));
        console.log(x);
    
            if (x == 1) {
                draw_line();
            }
            else if (x == 2) {
                draw_circle();
            }
            else if (x == 3) {
                draw_wave();
            } 
    }
}

function draw_line () {
    var canvas = document.getElementById('canvas');
    var width = Math.random() * 10;
    canvas.lineWidth = width;
        //Always check for properties and methods, to make sure your code doesn't break in other browsers.
        if (canvas.getContext) 
         {
          var context = canvas.getContext('2d');
          // Reset the current path
          context.beginPath(); 
          // Staring point (10,45)
          var x = Math.floor(Math.random() * 1000);
          var y = Math.floor(Math.random() * 1000);
           context.moveTo(x,y);
          // End point (180,47)
          var z = Math.floor(Math.random() * 1000);
          var m = Math.floor(Math.random() * 1000);
          context.lineTo(z,m);
          var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var width = Math.random() * 10;
        context.lineWidth = width;
        var hex = rgbToHex(r, g, b);

          context.strokeStyle = hex;
          // Make the line visible
          context.stroke();
           }
}

function draw_circle () {
    var canvas = document.getElementById("canvas");
    var width = Math.random() * 10;
    canvas.lineWidth = width;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    var x = Math.floor(Math.random() * 1000);
    var y = Math.floor(Math.random() * 1000);
    var l = Math.floor(Math.random() * 100);
    //Letzten beide Werte sind  Anfangs und End Winkel
    var start = (Math.random() *2 * Math.PI);
    var end = (Math.random() *2 * Math.PI);
    ctx.arc(x,y,l,start,end);
    //Draw with rgb code
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var hex = rgbToHex(r, g, b);
    ctx.fillStyle = hex;
    ctx.fill();
    ctx.stroke();
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

function draw_wave () {


    var c = document.getElementById("canvas");

    var width = Math.random() * 10;
    c.lineWidth = width;
    var ctx = c.getContext("2d");
    ctx.beginPath();

    ctx.moveTo(Math.random() * 1000, Math.random() * 1000);
    ctx.bezierCurveTo(Math.random() * 1000, Math.random() * 1000, Math.random() * 1000, Math.random() * 1000, Math.random() * 1000, Math.random() * 1000);

    ctx.stroke();

}

  //Was ich natürlich auch machen könnte, ist einfach nur einzelne punkte in einer random farbe einfärben und dass zb 1000 mal 