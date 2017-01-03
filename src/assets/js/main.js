 /*
  * startRain
  * initiates the rain drops on the main page
  * @param target_dom is the dom id of the target container for canvas
  * @param drop_size the size of the rain drops
  * @param drop_count the number of rain drops to appear
  * @param drop_interval the interval at which the rain drops spawn in ms
  */
 
 function startRain(target_dom='background', drop_size = 1, drop_count = 8000, drop_interval=100) {
    var image = document.getElementById(target_dom);
  //  var canvas = document.getElementById('canvas');
  //      canvas.height = window.height;
  //      canvas.width  = window.width;
    image.onload = function() {
    var engine = new RainyDay({ image: this });
    engine.rain([ [drop_size, 2, drop_count] ]); //adds 8000 drops of size 1
    engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], drop_interval); //add drops of various sizes every 1 second
    };
     image.crossOrigin = 'anonymous';
     image.src = 'media/back.jpg';
 }
