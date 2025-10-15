$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(200,  650, 200, 15)
createPlatform(500, 550, 100, 20)
createPlatform(300, 470, 60, 13)
createPlatform(500, 390, 70, 14)
createPlatform(600, 290, 33, 12)
createPlatform(300, 280, 45, 13)
createPlatform(900, 310, 19, 10)
createPlatform(1100, 257, 18, 9)
createPlatform(800, 449, 44, 20)
createPlatform(200, 190, 33, 15)

    // TODO 3 - Create Collectables
createCollectable('steve',300, 469)
createCollectable('kennedi', 1100, 230)
createCollectable('diamond', 800, 438)


    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
