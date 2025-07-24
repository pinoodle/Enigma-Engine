// Noodle Engine v4.0

var header = function() {

};

var fakeUp; var fakeDown; var fakeNorth; var fakeSouth; var fakeEast; var fakeWest; var fakeNortheast; var fakeNorthwest; var fakeSoutheast; var fakeSouthwest;
var interaction = 1;
var intDirs = [];
var kolorek = "#5D0000";
var intFakeDirs = [];
var ctrl = 0;
var timer;
var audio;
var music;
var musicHolder = "null";
var saveDisabled = false;
var roomLabels = {};
var preserveMap = [];
var room = "0,0,0";
var north = "north"; var south = "south"; var east = "east"; var west = "west"; var northeast = "northeast"; var northwest = "northwest"; var southeast = "southeast"; var southwest = "southwest"; var up = "up"; var down = "down";
var roomObjects = [];
var inventoryObjects = [];
var statistics = [];
window.pl = {};
window.definitions = {};

var drawnPositions;
var drawnLines;
var allowedLines;

var gridSize;
var roomSize;
var mapWidth;
var mapCenterY;
var mapCenterX;

var opacity = 0.2;
var fontSize = 1.2;

var hypcntr = 0;
var ornt = "";
var saveSlots = [];

function onGameLoad() {

  if (window.innerHeight > window.innerWidth) {
    ornt = "portrait";
    fontSize = 1.0;
  }
  else {
    ornt = "landscape";
  }

  if (localStorage.getItem("fontSize") !== null) fontSize = localStorage.getItem("fontSize");
  if (localStorage.getItem("saveSlots") !== null) saveSlots = JSON.parse(localStorage.getItem("saveSlots"));

  // DOM elements
  window.dom_mask = document.getElementById("mask");
  window.dom_scene = document.getElementById("scene");
  window.game_btn = document.getElementById("game_btn");
  window.map_btn = document.getElementById("map_btn");
  window.stats_btn = document.getElementById("stats_btn");
  window.settings_btn = document.getElementById("settings_btn");
  window.dom_map = document.getElementById("map");
  window.dom_tabs = document.getElementById("tabs");
  window.buttons = document.getElementsByClassName("button");
  window.dom_sidePanel = document.getElementById("sidePanel");
  window.north_arrow = document.getElementById("north");
  window.south_arrow = document.getElementById("south");
  window.east_arrow = document.getElementById("east");
  window.west_arrow = document.getElementById("west");
  window.northwest_arrow = document.getElementById("northwest");
  window.northeast_arrow = document.getElementById("northeast");
  window.southwest_arrow = document.getElementById("southwest");
  window.southeast_arrow = document.getElementById("southeast");
  window.up_arrow = document.getElementById("up");
  window.down_arrow = document.getElementById("down");
  window.dom_zCounter = document.getElementById("zCounter");

  dom_scene.style.fontSize = fontSize + "em";

  // Bottom Navigation Bar && orientation setup
  if (ornt === "portrait") {
    if (localStorage.getItem("opacity") !== null) opacity = localStorage.getItem("opacity");
    dom_map.style.opacity = opacity;

    game_btn.classList.toggle("active_bottom_btn");
    dom_map.style.opacity = opacity;
    dom_map.style.pointerEvents = "none";
    game_btn.addEventListener("click", function() {switchView("game")});
  }
  else {
    document.documentElement.style.maxWidth = "1500px";
    document.getElementById("container").style.width = "calc(40% + 4px)";
    document.getElementById("container").style.left = "calc(60% - 4px)";
    var newPanel = document.createElement("DIV");
    newPanel.id = "newPanel";
    document.body.appendChild(newPanel);
    newPanel.appendChild(dom_scene);
    dom_scene.style.height = "calc(100% - 16px)";
    dom_scene.style.width = "calc(100% - 8px)";
    dom_scene.style.borderBottomLeftRadius = "16px";
    dom_scene.style.borderTopLeftRadius = "16px";
    dom_map.style.opacity = 1;
    document.getElementById("shadow").style.borderTopLeftRadius = 0;
    document.getElementById("shadow").style.borderBottomLeftRadius = 0;
    dom_map.style.backgroundColor = "#282828";
    map_btn.classList.toggle("active_bottom_btn");
    dom_map.style.opacity = 1;
    game_btn.style.backgroundColor = "#864500";
    game_btn.style.textDecoration = "none";
    game_btn.style.color = "#FFF";
    game_btn.style.cursor = "not-allowed";
    game_btn.style.pointerEvents = "all !important";
  }

  map_btn.addEventListener("click", function() {switchView("map")});
  stats_btn.addEventListener("click", function() {switchView("stats")});
  settings_btn.addEventListener("click", function() {switchView("settings")});

  function switchView(string) {
    function switchOffOtherButtons(element) {
      var bottom_buttons = dom_tabs.children;
      for (var i = 0; i < bottom_buttons.length; i++) {
        if (bottom_buttons[i] !== element) bottom_buttons[i].classList.remove("active_bottom_btn");
      }
    };

    if (string === "game" && !(game_btn.classList.contains("active_bottom_btn"))) {
      if (document.getElementById("opacitySlider") !== null) {
        opacity = document.getElementById("opacitySlider").value;
        localStorage.setItem("opacity",opacity);
      }
      game_btn.classList.toggle("active_bottom_btn");
      dom_map.style.backgroundColor = "transparent";
      dom_map.style.opacity = opacity;
      dom_map.style.pointerEvents = "none";
      dom_mask.style.visibility = "hidden";
      switchOffOtherButtons(game_btn);
    }
    else if (string === "map" && !(map_btn.classList.contains("active_bottom_btn"))) {
      map_btn.classList.toggle("active_bottom_btn");
      dom_map.style.backgroundColor = "#282828";
      dom_map.style.opacity = "1";
      dom_map.style.pointerEvents = "auto";
      dom_mask.style.visibility = "hidden";
      switchOffOtherButtons(map_btn);
    }
    else if (string === "stats" && !(stats_btn.classList.contains("active_bottom_btn"))) {
      updateStats();
      dom_mask.style.visibility = "visible";
      stats_btn.classList.toggle("active_bottom_btn");
      switchOffOtherButtons(stats_btn);
    }
    else if (string === "settings" && !(settings_btn.classList.contains("active_bottom_btn"))) {
      showSettings();
      dom_mask.style.visibility = "visible";
      settings_btn.classList.toggle("active_bottom_btn");
      switchOffOtherButtons(settings_btn);
    }
  };
  // End of navigation buttons' code

  // Code to make the SURROUNDINGS and INVENTORY buttons bring up the Side Panel.
  document.getElementById("surroundings_btn").addEventListener("click", function() {
    this.classList.toggle("buttonActive");
    if (this.classList.contains("buttonActive")) {
      dom_sidePanel.innerHTML = "";
      changeItemsInPanel(this);
      dom_sidePanel.style.right = "0";
      document.getElementById("inventory_btn").classList.remove("buttonActive");
    } else {
      dom_sidePanel.style.right = "-70%";
    }
  });
  document.getElementById("inventory_btn").addEventListener("click", function() {
    this.classList.toggle("buttonActive");
    if (this.classList.contains("buttonActive")) {
      dom_sidePanel.innerHTML = "";
      changeItemsInPanel(this);
      dom_sidePanel.style.right = "0";
      document.getElementById("surroundings_btn").classList.remove("buttonActive");
    } else {
      dom_sidePanel.style.right = "-70%";
    }
  });

  // Sidepanel Fix
  dom_scene.addEventListener("click", function() {
    if (document.getElementById("surroundings_btn").classList.contains("buttonActive")) { document.getElementById("surroundings_btn").click(); }
    if (document.getElementById("inventory_btn").classList.contains("buttonActive")) { document.getElementById("inventory_btn").click(); }
    if (document.getElementById("stats_btn").classList.contains("active_bottom_btn")) { document.getElementById("map_btn").click(); }
    if (document.getElementById("settings_btn").classList.contains("active_bottom_btn")) { document.getElementById("map_btn").click(); }
  });

  document.getElementById("map").addEventListener("click", function() {
    timerFix();
  });

  document.getElementById("tabs").addEventListener("click", function() {
    if (document.getElementById("surroundings_btn").classList.contains("buttonActive")) { document.getElementById("surroundings_btn").click(); }
    if (document.getElementById("inventory_btn").classList.contains("buttonActive")) { document.getElementById("inventory_btn").click(); }
  });

  // Initial position of the map
  gridSize = 1001;
  roomSize = 64;
  mapWidth = gridSize * roomSize;
  mapCenterY = "calc(50% - " + (0.5 * mapWidth) + "px)";
  mapCenterX = "calc((0.5 * (100% - 208px - 45px)) - " + (0.5 * mapWidth) + "px)";
  var map = dom_map;
  dom_map.style.width = mapWidth + "px";
  dom_map.style.height = mapWidth + "px";
  dom_map.style.top = mapCenterX;
  dom_map.style.left = mapCenterY;

  // The first map square
  drawnPositions = [room];
  drawnLines = [];
  allowedLines = [];
  drawSquare([0,0,0]);
  var circle = document.createElement("DIV");
  circle.id = "blob";
  var coords = room.split(",");
  document.getElementById("square(" + coords[0] + "," + coords[1] + "," + coords[2] + ")").appendChild(circle);

  // Function move() takes in an array of coordinates and moves the player in the specified direction
  function move(directions) {
    var playerPosition = room.split(",");
    for (var i = 0; i < playerPosition.length; i++) {
      playerPosition[i] = parseInt(playerPosition[i]);
    }
    // West and East
    if (directions[0] !== 0) {
      playerPosition[0] += directions[0];
      dom_map.style.left = "calc(50% - " + ((0.5 * mapWidth) + (playerPosition[0] * roomSize * 2)) + "px)";
      if (drawnPositions.indexOf(playerPosition[0] + "," + playerPosition[1] + "," + playerPosition[2]) === -1) {
        if (directions[1] === 0) {
          drawSquare(playerPosition);
          drawnPositions.push(playerPosition[0] + "," + playerPosition[1] + "," + playerPosition[2]);
        }
      }
    }
    // North and South
    if (directions[1] !== 0) {
      playerPosition[1] += directions[1];
      dom_map.style.top = "calc((0.5 * (100% - 208px - 45px)) - " + ((0.5 * mapWidth) - (playerPosition[1] * roomSize * 2)) + "px)";
      if (drawnPositions.indexOf(playerPosition[0] + "," + playerPosition[1] + "," + playerPosition[2]) === -1) {
        drawSquare(playerPosition);
        drawnPositions.push(playerPosition[0] + "," + playerPosition[1] + "," + playerPosition[2]);
      }
    }
    room = playerPosition[0] + "," + playerPosition[1] + "," + playerPosition[2];
  };

  // Event listeners for all the arrows. Note the order of the three functions in the Event Listeners; instead of writing separate
  // functions for, say, North and South lines, I made one for the South line only. Then, when a North line needs to be drawn,
  // the Event Listeners first execute the move() function to update the player coordinates and then draw the South line for the
  // new position.

  north_arrow.addEventListener("click", function() { if (this.classList.contains("directionAvailable")) { move([0,1,0]); allowedLines.push(room + ",vertical"); drawLines(); removeArrowColorings(this,""); } else if (this.classList.contains("fakeDirectionAvailable")) {print1("<span class='command'> &gt GO NORTH</span>"); fakeNorth();} });
  south_arrow.addEventListener("click", function() { if (this.classList.contains("directionAvailable")) { allowedLines.push(room + ",vertical"); move([0,-1,0]); drawLines(); removeArrowColorings(this,""); } else if (this.classList.contains("fakeDirectionAvailable")) {print1("<span class='command'> &gt GO SOUTH</span>"); fakeSouth();} });
  east_arrow.addEventListener("click", function() { if (this.classList.contains("directionAvailable")) { allowedLines.push(room + ",horizontal"); move([1,0,0]); drawLines(); removeArrowColorings(this,""); } else if (this.classList.contains("fakeDirectionAvailable")) {print1("<span class='command'> &gt GO EAST</span>"); fakeEast();} });
  west_arrow.addEventListener("click", function() { if (this.classList.contains("directionAvailable")) { move([-1,0,0]); allowedLines.push(room + ",horizontal"); drawLines(); removeArrowColorings(this,""); } else if (this.classList.contains("fakeDirectionAvailable")) {print1("<span class='command'> &gt GO WEST</span>"); fakeWest();} });
  northwest_arrow.parentNode.addEventListener("click", function() { if (this.children[0].classList.contains("directionAvailable")) { allowedLines.push(room + ",downhill"); move([-1,1,0]); drawLines(); removeArrowColorings(this.children[0],""); } else if (this.children[0].classList.contains("fakeDirectionAvailable")) {print1("<span class='command'> &gt GO NORTHWEST</span>"); fakeNorthwest();} });
  northeast_arrow.parentNode.addEventListener("click", function() { if (this.children[0].classList.contains("directionAvailable")) { allowedLines.push(room + ",uphill"); move([1,1,0]); drawLines(); removeArrowColorings(this.children[0],""); } else if (this.children[0].classList.contains("fakeDirectionAvailable")) {print1("<span class='command'> &gt GO NORTHEAST</span>"); fakeNortheast();} });
  southwest_arrow.parentNode.addEventListener("click", function() { if (this.children[0].classList.contains("directionAvailable")) { move([-1,-1,0]); allowedLines.push(room + ",uphill"); drawLines(); removeArrowColorings(this.children[0],""); } else if (this.children[0].classList.contains("fakeDirectionAvailable")) {print1("<span class='command'> &gt GO SOUTHWEST</span>"); fakeSouthwest();} });
  southeast_arrow.parentNode.addEventListener("click", function() { if (this.children[0].classList.contains("directionAvailable")) { move([1,-1,0]); allowedLines.push(room + ",downhill"); drawLines(); removeArrowColorings(this.children[0],""); } else if (this.children[0].classList.contains("fakeDirectionAvailable")) {print1("<span class='command'> &gt GO SOUTHEAST</span>"); fakeSoutheast();} });

   up_arrow.addEventListener("click", function() {
     if (this.classList.contains("directionAvailable")) {
       changeMapLayer(1);
       removeArrowColorings(this, "don't remove");
     }
     else if (this.classList.contains("fakeDirectionAvailable")) {print1("<span class='command'> &gt GO UP</span>"); fakeUp();}
    });

    down_arrow.addEventListener("click", function() {
      if (this.classList.contains("directionAvailable")) {
        changeMapLayer(-1);
        removeArrowColorings(this, "don't remove");
      }
      else if (this.classList.contains("fakeDirectionAvailable")) {print1("<span class='command'> &gt GO DOWN</span>"); fakeDown();}
    });

  // Other code to be executed at the start below...
  header();

  // KEYBOARD

  var keys = [];

  document.addEventListener("keypress", function(event) {
    if (event.key === "w") {
      if (keys.indexOf("w") === -1) keys.push("w");
    }
    if (event.key === "a") {
      if (keys.indexOf("a") === -1) keys.push("a");
    }
    if (event.key === "s") {
      if (keys.indexOf("s") === -1) keys.push("s");
    }
    if (event.key === "d") {
      if (keys.indexOf("d") === -1) keys.push("d");
    }
    if (event.key === " ") {
      if (keys.indexOf("space") === -1) keys.push("space");
    }
  });

  document.addEventListener("keyup", function(event) {

    // WASD SUPPORT
    if (event.key === "w" || event.key === "a" || event.key === "s" || event.key === "d" || event.key === " ") {
      if (keys.length === 2) {
        if (keys.indexOf("space") === -1) {
          if (keys.indexOf("w") !== -1 && keys.indexOf("d") !== -1) document.getElementById("northeast").click();
          if (keys.indexOf("w") !== -1 && keys.indexOf("a") !== -1) document.getElementById("northwest").click();
          if (keys.indexOf("s") !== -1 && keys.indexOf("d") !== -1) document.getElementById("southeast").click();
          if (keys.indexOf("s") !== -1 && keys.indexOf("a") !== -1) document.getElementById("southwest").click();
          dom_scene.click();
        }
        else {
          if (keys.indexOf("w") !== -1) document.getElementById("up").click();
          if (keys.indexOf("s") !== -1) document.getElementById("down").click();
          dom_scene.click();
        }
      }
      else if (keys.length === 1) {
        if (keys.indexOf("space") === -1) {
          if (keys.indexOf("w") !== -1) document.getElementById("north").click();
          if (keys.indexOf("s") !== -1) document.getElementById("south").click();
          if (keys.indexOf("d") !== -1) document.getElementById("east").click();
          if (keys.indexOf("a") !== -1) document.getElementById("west").click();
          dom_scene.click();
        }
        /*else {
          if (document.getElementById("game_btn").classList.contains("active_bottom_btn")) document.getElementById("map_btn").click();
          else if (document.getElementById("map_btn").classList.contains("active_bottom_btn")) document.getElementById("stats_btn").click();
          else if (document.getElementById("stats_btn").classList.contains("active_bottom_btn")) document.getElementById("settings_btn").click();
          else if (document.getElementById("settings_btn").classList.contains("active_bottom_btn")) {
            if (ornt === "landscape") document.getElementById("map_btn").click();
            else document.getElementById("game_btn").click();
          }
        }*/

      }
      keys = [];
    }

  });

  try { definitions[room](); } catch(error) { print(error); }
  changeColor(kolorek);
  document.getElementById("loadingMask").style.display = "none";

};

// Function to draw a map square. It takes in the player's current position and draws a square on it
function drawSquare(coords) {
  var square = document.createElement("DIV");
  square.classList.add("mapRoom");
  square.id = "square(" + coords[0] + "," + coords[1] + "," + coords[2] + ")";
  square.style.left = (Math.floor(0.5 * mapWidth) - (0.5 * roomSize) + (coords[0] * roomSize * 2)) + "px";
  square.style.top = (Math.floor(0.5 * mapWidth) - (0.5 * roomSize) - (coords[1] * roomSize * 2)) + "px";
  if (roomLabels[square.id] !== undefined) square.innerHTML = roomLabels[square.id];
  else square.innerHTML = "";
  dom_map.appendChild(square);
};

// Funtion to draw a map line (link between squares)
function drawLines() {
  for (var i = 0; i < drawnPositions.length; i++) {
    var currentPositionToAnalyse = drawnPositions[i].split(",");
    for (var j = 0; j < currentPositionToAnalyse.length; j++) {
      currentPositionToAnalyse[j] = parseInt(currentPositionToAnalyse[j]);
    }
    // Vertical Line
    var squareBelow = drawnPositions[i].split(",");
    squareBelow[1] = parseInt(squareBelow[1]) - 1;
    var squareBelow_string = squareBelow[0] + "," + squareBelow[1] + "," + squareBelow[2];
    if (drawnPositions.indexOf(squareBelow_string) !== -1 && drawnLines.indexOf(drawnPositions[i] + ",vertical") === -1 && allowedLines.indexOf(drawnPositions[i] + ",vertical") !== -1) {
      var line = document.createElement("DIV");
      line.classList.add("verticalLine");
      line.style.left = (Math.floor(0.5 * mapWidth) - (0.5 * roomSize) + (currentPositionToAnalyse[0] * roomSize * 2)) + "px";
      line.style.top = (Math.floor(0.5 * mapWidth) - (0.5 * roomSize) - (currentPositionToAnalyse[1] * roomSize * 2) + (roomSize)) + "px";
      dom_map.appendChild(line);
      drawnLines.push(drawnPositions[i] + ",vertical");
    }
    // Horizontal Line
    var squareRight = drawnPositions[i].split(",");
    squareRight[0] = parseInt(squareRight[0]) + 1;
    var squareRight_string = squareRight[0] + "," + squareRight[1] + "," + squareRight[2];
    if (drawnPositions.indexOf(squareRight_string) !== -1 && drawnLines.indexOf(drawnPositions[i] + ",horizontal") === -1 && allowedLines.indexOf(drawnPositions[i] + ",horizontal") !== -1) {
      var line = document.createElement("DIV");
      line.classList.add("horizontalLine");
      line.style.left = (Math.floor(0.5 * mapWidth) - (0.5 * roomSize) + (currentPositionToAnalyse[0] * roomSize * 2) + (roomSize)) + "px";
      line.style.top = (Math.floor(0.5 * mapWidth) - (0.5 * roomSize) - (currentPositionToAnalyse[1] * roomSize * 2)) + "px";
      dom_map.appendChild(line);
      drawnLines.push(drawnPositions[i] + ",horizontal");
    }
    // Uphill Line
    var squareNE = drawnPositions[i].split(",");
    squareNE[0] = parseInt(squareNE[0]) + 1;
    squareNE[1] = parseInt(squareNE[1]) + 1;
    var squareNE_string = squareNE[0] + "," + squareNE[1] + "," + squareNE[2];
    if (drawnPositions.indexOf(squareNE_string) !== -1 && drawnLines.indexOf(drawnPositions[i] + ",uphill") === -1 && allowedLines.indexOf(drawnPositions[i] + ",uphill") !== -1) {
      var lineContainer = document.createElement("DIV");
      lineContainer.classList.add("uphillLineContainer");
      lineContainer.style.left = (Math.floor(0.5 * mapWidth) - (0.5 * roomSize) + (currentPositionToAnalyse[0] * roomSize * 2) + (roomSize)) + "px";
      lineContainer.style.top = (Math.floor(0.5 * mapWidth) - (0.5 * roomSize) - (currentPositionToAnalyse[1] * roomSize * 2) - (roomSize)) + "px";
      dom_map.appendChild(lineContainer);
      var line = document.createElement("DIV");
      line.classList.add("diagonalLine");
      line.classList.add("uphillLine");
      lineContainer.appendChild(line);
      drawnLines.push(drawnPositions[i] + ",uphill");
    }
    // Downhill Line
    var squareNW = drawnPositions[i].split(",");
    squareNW[0] = parseInt(squareNW[0]) - 1;
    squareNW[1] = parseInt(squareNW[1]) + 1;
    var squareNW_string = squareNW[0] + "," + squareNW[1] + "," + squareNW[2];
    if (drawnPositions.indexOf(squareNW_string) !== -1 && drawnLines.indexOf(drawnPositions[i] + ",downhill") === -1 && allowedLines.indexOf(drawnPositions[i] + ",downhill") !== -1) {
      var lineContainer = document.createElement("DIV");
      lineContainer.classList.add("uphillLineContainer");
      lineContainer.style.left = (Math.floor(0.5 * mapWidth) - (0.5 * roomSize) + (currentPositionToAnalyse[0] * roomSize * 2) - (roomSize)) + "px";
      lineContainer.style.top = (Math.floor(0.5 * mapWidth) - (0.5 * roomSize) - (currentPositionToAnalyse[1] * roomSize * 2) - (roomSize)) + "px";
      dom_map.appendChild(lineContainer);
      var line = document.createElement("DIV");
      line.classList.add("diagonalLine");
      line.classList.add("downhillLine");
      lineContainer.appendChild(line);
      drawnLines.push(drawnPositions[i] + ",downhill");
    }
  }
};

// Got anything you want executed right after a player has moved? Just dump it in here...
function removeArrowColorings(item,delStatus) {

  surroundings_btn.innerHTML = 'ROOM <b>(0)</b>';

  north_arrow.classList.remove("directionAvailable");
  south_arrow.classList.remove("directionAvailable");
  east_arrow.classList.remove("directionAvailable");
  west_arrow.classList.remove("directionAvailable");
  northwest_arrow.classList.remove("directionAvailable");
  northeast_arrow.classList.remove("directionAvailable");
  southwest_arrow.classList.remove("directionAvailable");
  southeast_arrow.classList.remove("directionAvailable");
  up_arrow.classList.remove("directionAvailable");
  down_arrow.classList.remove("directionAvailable");
  if (item !== "say nothing") {
    dom_scene.innerHTML += "<span class='command'> &gt GO " + item.id.toUpperCase() + "</span><br />";
    dom_scene.scrollTo(0, dom_scene.scrollHeight);
  }
  roomObjects = [];
  dom_sidePanel.style.right = "-70%";
  document.getElementById("surroundings_btn").classList.remove("buttonActive");
  document.getElementById("inventory_btn").classList.remove("buttonActive");
  nukeHyperlinks();
  removeFakeExits([north, south, east, west, northwest, northeast, southwest, southeast, up, down]);
  autoSave();
  header();
  try { definitions[room](); } catch(error) { print(error); }

  if (delStatus !== "don't remove") {
    var blobbo = document.getElementById("blob");
    blobbo.parentElement.removeChild(blobbo);
  }
  var circle = document.createElement("DIV");
  circle.id = "blob";
  var coords = room.split(",");
  document.getElementById("square(" + coords[0] + "," + coords[1] + "," + coords[2] + ")").appendChild(circle);
};

// Up & Down movement
// Note: preserveMap[i] contains all the mapdata of z-layer i.
 function changeMapLayer(operation) {
   var room_array = room.split(",");
   preserveMap[room_array[2]] = {
     drawnPositions: drawnPositions,
     drawnLines: drawnLines,
     allowedLines: allowedLines
   };
   room_array[2] = parseInt(room_array[2]) + operation;
   room = room_array[0] + "," + room_array[1] + "," + room_array[2];
   if (typeof preserveMap[room_array[2]] !== 'undefined' && preserveMap[room_array[2]] !== null) {
     drawnLines = [];
     allowedLines = preserveMap[room_array[2]].allowedLines;
     drawnPositions = preserveMap[room_array[2]].drawnPositions;
   } else {
     drawnLines = [];
     allowedLines = [];
     drawnPositions = [];
   }
   drawnPositions.push(room);
   dom_map.innerHTML = "";
   for (var i = 0; i < drawnPositions.length; i++) {
     drawSquare(drawnPositions[i].split(","));
   }
   drawLines();
   if (typeof preserveMap[room_array[2]] !== 'undefined' && preserveMap[room_array[2]] !== null) {
     drawnLines = preserveMap[room_array[2]].drawnLines;
   }
   dom_zCounter.innerHTML = room_array[2];
 };

// The below functions are the JavaScript libraries to be used by the end user (or, well, were supposed to be; there's some others here too...)
function print(string) {
  dom_scene.innerHTML += string + "<br /><br />";
  dom_scene.scrollTo(0, dom_scene.scrollHeight);
};
function print0(string) {
  dom_scene.innerHTML += string;
  dom_scene.scrollTo(0, dom_scene.scrollHeight);
};
function print1(string) {
  dom_scene.innerHTML += string + "<br />";
  dom_scene.scrollTo(0, dom_scene.scrollHeight);
};
function addExits(a,b,c,m,e,f,g,h,k,l) {
  function checkCoord(string) {
    if (a === string || b === string || c === string || m === string || e === string || f === string || g === string || h === string || k === string || l === string) {
      removeFakeExits(string);
      document.getElementById(string).classList.add("directionAvailable");
    }
  };
  checkCoord("north"); checkCoord("south"); checkCoord("east"); checkCoord("west"); checkCoord("southeast"); checkCoord("southwest"); checkCoord("northeast"); checkCoord("northwest"); checkCoord("up"); checkCoord("down");
};
function removeExits(a,b,c,m,e,f,g,h,k,l) {
  function checkCoord(string) {
    if (a === string || b === string || c === string || m === string || e === string || f === string || g === string || h === string || k === string || l === string) {
      document.getElementById(string).classList.remove("directionAvailable");
    }
  };
  checkCoord("north"); checkCoord("south"); checkCoord("east"); checkCoord("west"); checkCoord("southeast"); checkCoord("southwest"); checkCoord("northeast"); checkCoord("northwest"); checkCoord("up"); checkCoord("down");
};

// E.g. addRoomObject("cat") cadds an object { name: "cat", count: 1, actions: [] } to roomObjects or, if it already exists, adds 1 to object.count
function addRoomObject(string) {
  var cntr = 0;
  for (var i = 0; i < roomObjects.length; i++) {
    if (roomObjects[i].name === string) {
      roomObjects[i].count++;
      cntr++;
      break;
    }
  }
  if (cntr === 0) {
    roomObjects.push({ name: string, count: 1, actions: [] });
    var currentCount = parseInt(surroundings_btn.innerHTML.replace('ROOM <b>(','').replace(')</b>',''));
    currentCount++;
    surroundings_btn.innerHTML = 'ROOM <b>(' + currentCount + ')</b>';
  }
}

// E.g. addRoomObjectAction("cat", "pet", someFunction) adds an action object to "catobject".actions, i.e. "catobject"".actions[0].action();
function addRoomObjectAction(name, actionName, action) {
  var objectExists = false;
  for (var i = 0; i < roomObjects.length; i++) {
    if (roomObjects[i].name === name) {

      for (var j = 0; j < roomObjects[i].actions.length; j++) {
        if (roomObjects[i].actions[j].name === actionName) {
          var index = roomObjects[i].actions.indexOf(roomObjects[i].actions[j]);
          roomObjects[i].actions.splice(index, 1);
        }
      }

      roomObjects[i].actions.push({ name: actionName, action: action });
      objectExists = true;
      break;
    }
  }
  if (objectExists === false) { addRoomObject(name); addRoomObjectAction(name,actionName,action); }
}

function removeRoomObjectAction(name, actionName) {
  for (var j = 0; j < roomObjects.length; j++) {
    if (roomObjects[j].name === name) {
      var obj = roomObjects[j];
      break;
    }
  }
  if (typeof obj !== 'undefined') {
    for (var i = 0; i < obj.actions.length; i++) {
      if (obj.actions[i].name === actionName) {
        var index = obj.actions.indexOf(obj.actions[i]);
        obj.actions.splice(index, 1);
      }
    }
  }
}
function removeRoomObject(name) {
  for (var i = 0; i < roomObjects.length; i++) {
    if (roomObjects[i].name === name && roomObjects[i].count === 1) {
      var index = roomObjects.indexOf(roomObjects[i]);
      roomObjects.splice(index, 1);

      var currentCount = parseInt(surroundings_btn.innerHTML.replace('ROOM <b>(','').replace(')</b>',''));
      currentCount--;
      surroundings_btn.innerHTML = 'ROOM <b>(' + currentCount + ')</b>';
    }
    else if (roomObjects[i].name === name && roomObjects[i].count !== 1) {
      roomObjects[i].count--;
    }
  }
}



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!The code below is IDENTICAL to the one for Objects - we jus replaced all instances of the word "ROOM" with "INVENTORY"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function addInventoryObject(string) {
  var cntr = 0;
  for (var i = 0; i < inventoryObjects.length; i++) {
    if (inventoryObjects[i].name === string) {
      inventoryObjects[i].count++;
      cntr++;
      break;
    }
  }
  if (cntr === 0) {
    inventoryObjects.push({ name: string, count: 1, actions: [] });
    var currentCount = parseInt(inventory_btn.innerHTML.replace('INVENTORY <b>(','').replace(')</b>',''));
    currentCount++;
    inventory_btn.innerHTML = 'INVENTORY <b>(' + currentCount + ')</b>';
  }
}

function addInventoryObjectAction(name, actionName, action) {
  var objectExists = false;
  for (var i = 0; i < inventoryObjects.length; i++) {
    if (inventoryObjects[i].name === name) {

      for (var j = 0; j < inventoryObjects[i].actions.length; j++) {
        if (inventoryObjects[i].actions[j].name === actionName) {
          var index = inventoryObjects[i].actions.indexOf(inventoryObjects[i].actions[j]);
          inventoryObjects[i].actions.splice(index, 1);
        }
      }

      inventoryObjects[i].actions.push({ name: actionName, action: action });
      objectExists = true;
      break;
    }
  }
  if (objectExists === false) { addInventoryObject(name); addInventoryObjectAction(name,actionName,action); }
}

function removeInventoryObjectAction(name, actionName) {
  for (var j = 0; j < inventoryObjects.length; j++) {
    if (inventoryObjects[j].name === name) {
      var obj = inventoryObjects[j];
      break;
    }
  }
  if (typeof obj !== 'undefined') {
    for (var i = 0; i < obj.actions.length; i++) {
      if (obj.actions[i].name === actionName) {
        var index = obj.actions.indexOf(obj.actions[i]);
        obj.actions.splice(index, 1);
      }
    }
  }
}
function removeInventoryObject(name) {
  for (var i = 0; i < inventoryObjects.length; i++) {
    if (inventoryObjects[i].name === name && inventoryObjects[i].count === 1) {
      var index = inventoryObjects.indexOf(inventoryObjects[i]);
      inventoryObjects.splice(index, 1);

      var currentCount = parseInt(inventory_btn.innerHTML.replace('INVENTORY <b>(','').replace(')</b>',''));
      currentCount--;
      inventory_btn.innerHTML = 'INVENTORY <b>(' + currentCount + ')</b>';
    }
    else if (inventoryObjects[i].name === name && inventoryObjects[i].count !== 1) {
      inventoryObjects[i].count--;
    }
  }
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  END OF IDENTICAL CODE BLOCK  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// The code below is to create collapsible lists in the Side Panel - for interacting with people, objects and inventory.
function createCollapsibleListeners() {
  var collapsibles = document.getElementsByClassName("collapsible");
  for (var i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var collContent = this.nextElementSibling;
      if (collContent.style.maxHeight) {
        collContent.style.maxHeight = null;
        this.children[0].innerHTML = "＋";
      } else {
        collContent.style.maxHeight = collContent.scrollHeight + "px";
        this.children[0].innerHTML = "－";
      }
    });
  }
}

// This function displays all necessary items in the Side Panel.
function changeItemsInPanel(item) {
  if (item === document.getElementById("surroundings_btn")) { // If item passed is the People & Objects button
    for (var i = 0; i < roomObjects.length; i++) {

      // Create black collapsible tab with the object's name inside
      var objectsName = roomObjects[i].name.toUpperCase();
      dom_sidePanel.innerHTML += "<div class='collapsible'>" + objectsName + "<div class='plus'>＋</div></div>";

      // Add a 'content' container
      var content = document.createElement("DIV");
      content.classList.add("content");
      dom_sidePanel.appendChild(content);

      // For every single object, we will now create the visible action boxes...
      for (var j = 0; j < roomObjects[i].actions.length; j++) {
        var option = document.createElement("DIV");
        option.classList.add("inCollapsible");
        content.appendChild(option);
      }
    }
    // ...and now, finally, the action boxes' actions.
    var contentBoxes = document.getElementsByClassName("content");
    for (var x = 0; x < contentBoxes.length; x++) {
      var panels = contentBoxes[x].children;
      for (var y = 0; y < panels.length; y++) {
        panels[y].roomObj = roomObjects[x];
        panels[y].actionsName = panels[y].roomObj.actions[y].name.toUpperCase();
        panels[y].innerHTML = panels[y].actionsName;
        panels[y].action = panels[y].roomObj.actions[y].action;
        panels[y].onclick = function() {
          dom_scene.innerHTML += "<span class='command'> &gt ROOM → " + this.roomObj.name.toUpperCase() + " → " + this.actionsName + "</span><br />";
          dom_scene.scrollTo(0, dom_scene.scrollHeight);
          if (interaction === 1) this.action(); else print("You cannot currently do this!");
          dom_sidePanel.style.right = "-70%";
          document.getElementById("surroundings_btn").classList.remove("buttonActive"); };
        }
      }
    } else { // !!!!!!!!!!!!!!!!!!!!!!!!!!!! AGAIN, THIS CODE BLOCK IS THE SAME AS FOR THE IF STATEMENT ABOVE, JUST CHANGED 'SURROUNDINGS' TO 'INVENTORY' EVERYWHERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      for (var i = 0; i < inventoryObjects.length; i++) {

        // Create black collapsible tab with the object's name inside
        var objectsName = inventoryObjects[i].name.toUpperCase();
        dom_sidePanel.innerHTML += "<div class='collapsible'>" + objectsName + "<div class='plus'>＋</div></div>";

        // Add a 'content' container
        var content = document.createElement("DIV");
        content.classList.add("content");
        dom_sidePanel.appendChild(content);

        // For every single object, we will now create the visible action boxes...
        for (var j = 0; j < inventoryObjects[i].actions.length; j++) {
          var option = document.createElement("DIV");
          option.classList.add("inCollapsible");
          content.appendChild(option);
        }
      }
      // ...and now, finally, the action boxes' actions.
      var contentBoxes = document.getElementsByClassName("content");
      for (var x = 0; x < contentBoxes.length; x++) {
        var panels = contentBoxes[x].children;
        for (var y = 0; y < panels.length; y++) {
          panels[y].inventoryObj = inventoryObjects[x];
          panels[y].actionsName = panels[y].inventoryObj.actions[y].name.toUpperCase();
          panels[y].innerHTML = panels[y].actionsName;
          panels[y].action = panels[y].inventoryObj.actions[y].action;
          panels[y].onclick = function() {
            dom_scene.innerHTML += "<span class='command'> &gt INVENTORY → " + this.inventoryObj.name.toUpperCase() + " → " + this.actionsName + "</span><br />";
            dom_scene.scrollTo(0, dom_scene.scrollHeight);
            if (interaction === 1) this.action(); else print("You cannot currently do this!");
            dom_sidePanel.style.right = "-70%";
            document.getElementById("inventory_btn").classList.remove("buttonActive"); }; // !!!!!!!! Oh, and changed the '0' to a '1' here.
          }
      }
    } // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! END OF REPEATED CODE BLOCK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    createCollapsibleListeners();
};

function addStat(string, symbol) {
  var alreadyExists = false;
  for (var i = 0; i < statistics.length; i++) {
    if (statistics[i].name === string) { alreadyExists = true; break; }
  }
  if (alreadyExists === false) statistics.push({ name: string, symbol: symbol });
}

function clearConsole() {
  dom_scene.innerHTML = "";
}

function clearConsole2() {
  dom_scene.innerHTML = "";
  document.getElementById("statusReport").style.color = "green";
  return "Console has been cleared!";
}

function updateStats() {
  dom_mask.style.textAlign = "left";
  dom_mask.innerHTML = "<div class='hedda'>STATS</div>";
  var ul = document.createElement("DIV");
  ul.classList.add("statt");
  dom_mask.appendChild(ul);
  var child = dom_mask.children[1];
  for (var i = 0; i < statistics.length; i++) {
    child.innerHTML += "<div class='boxy' style='padding-left: 8px; padding-right: 8px;'><br>" + statistics[i].name.replace(/_/g, " ").toUpperCase() + ": " + eval("pl." + statistics[i].name) + statistics[i].symbol + "<br><br></div>";
  }
}

function showSettings() {
  dom_mask.style.textAlign = "center";
  dom_mask.innerHTML = "<div class='hedda'>SETTINGS</div>";
  dom_mask.innerHTML += "<div class='boxy' id='boxy_one'></div><div class='boxy' id='boxy_two'></div><div class='boxy' id='boxy_three'></div><div class='boxy' id='boxy_four'></div>";
  if (ornt === "portrait") document.getElementById("boxy_one").innerHTML = "<br><div><u><strong>Map Opacity</strong></u></div><br><div class='slideContainer'><input type='range' step='0.1' min='0' max='1' value='" + opacity + "' id='opacitySlider' class='slider'></div><br><div>(This option allows you to see the map through the console window)</div><br>";
  document.getElementById("boxy_two").innerHTML += "<br><div><u><strong>Font Size</strong></u></div><br><div class='slideContainer'><input type='range' step='0.1' min='0.7' max='1.7' value='" + fontSize + "' id='fontSizeSlider' class='slider'></div><br><div>(This option lets you change the size of text in the console)</div><br>";
  document.getElementById("boxy_three").innerHTML += "<br><div><u><strong>Save/Load Game</strong></u></div><br>Choose a slot: &nbsp;<select></select><br><br>";

  function updateDropdown() {
    var dropdown = document.getElementsByTagName("SELECT")[0];
    dropdown.innerHTML = "<option>Create a new save slot...</option>";
    var slotsLen = saveSlots.length;
    for (var i = 0; i < slotsLen; i++) {
      dropdown.innerHTML += "<option>" + saveSlots[i].replaceAll("_", " ") + "</option>";
    }
  }

  updateDropdown();

  if (saveDisabled === false) { document.getElementById("boxy_three").innerHTML += "<div class='button' id='saveButton' style='margin: 0 auto; width: 9em;'>SAVE GAME</div><br>"; }
  document.getElementById("boxy_three").innerHTML += "<div class='button' id='loadButton' style='margin: 0 auto; width: 9em;'>LOAD GAME</div><br><div>(Note that progress in the current room is not saved)</div><br>";
  document.getElementById("boxy_four").innerHTML += "<br><div><u><strong>Clear Console</strong></u></div><br>";
  document.getElementById("boxy_four").innerHTML += "<div class='button' id='clearButton' style='margin: 0 auto; width: 13em;'>CLEAR CONSOLE</div><br><div>(Use this if the game starts getting sluggish)</div><br>";
  dom_mask.innerHTML += "<div id='statusReport'></div>";
  if (saveDisabled === false) { document.getElementById("saveButton").addEventListener("click", function() { document.getElementById("statusReport").innerHTML = saveGame(document.getElementsByTagName("SELECT")[0].value); updateDropdown(); }); }
  document.getElementById("loadButton").addEventListener("click", function() { document.getElementById("statusReport").innerHTML = loadGame(document.getElementsByTagName("SELECT")[0].value); });
  document.getElementById("clearButton").addEventListener("click", function() { document.getElementById("statusReport").innerHTML = clearConsole2(); });
  document.getElementById("fontSizeSlider").onchange = function() {
    fontSize = this.value;
    dom_scene.style.fontSize = fontSize + "em";
    localStorage.setItem("fontSize",fontSize);
  }
}

function removeStat(string) {
  for (var i = 0; i < statistics.length; i++) {
    if (statistics[i].name === string) {
      var index = statistics.indexOf(statistics[i]);
      statistics.splice(index, 1);
    }
  }
}

function teleport(coords) {
  enableInteraction();

  var newCoords_array = coords.split(",");

  for (var i = 0; i < newCoords_array.length; i++) {
    newCoords_array[i] = parseInt(newCoords_array[i]);
  }

  // West and East
  dom_map.style.left = "calc(50% - " + ((0.5 * mapWidth) + (newCoords_array[0] * roomSize * 2)) + "px)";

  // North and South
  dom_map.style.top = "calc((0.5 * (100% - 208px - 45px)) - " + ((0.5 * mapWidth) - (newCoords_array[1] * roomSize * 2)) + "px)";

  room = newCoords_array[0] + "," + newCoords_array[1] + "," + room.split(",")[2];

  // Change z location if necessary
  if (newCoords_array[2] != room.split(",")[2]) {
    var operation = newCoords_array[2] - room.split(",")[2];
    changeMapLayer(operation);
    carryOn("don't remove");
  }
  else {
    carryOn("");
  }

  function carryOn(cmd) {
    // Draw square on landing location if necessary
    if (drawnPositions.indexOf(newCoords_array[0] + "," + newCoords_array[1] + "," + newCoords_array[2]) === -1) {
      drawSquare(newCoords_array);
      drawnPositions.push(newCoords_array[0] + "," + newCoords_array[1] + "," + newCoords_array[2]);
    }

    // Update current player position
    room = newCoords_array[0] + "," + newCoords_array[1] + "," + newCoords_array[2];

    removeArrowColorings("say nothing",cmd);
  }
}

function hyperlink(text, axn) {
  // var stringifiedFunction = String(axn).replace(/'/g,"\\'").replace(/"/g, "`");
  eval("window.hyperlink_function_" + hypcntr + " = " + axn);
  hypcntr++;
  return "<a href=\"javascript:void(0)\" class=\"activeHyperlink\" onclick=\"hyperlinkClick(this, `" + text + "`, " + "hyperlink_function_" + (hypcntr - 1) + ")\">" + text + "</a>";
}

function hyperlinkClick(element, text, axn) {
  if (element.classList.contains("activeHyperlink")) {
    nukeHyperlinks();
    dom_scene.innerHTML += "<span class='command'> &gt " + text.toUpperCase() + "</span><br />";
    dom_scene.scrollTo(0, dom_scene.scrollHeight);
    axn();
  } else {
    dom_scene.innerHTML += "<span class='command'> &gt " + text.toUpperCase() + "</span><br />";
    dom_scene.scrollTo(0, dom_scene.scrollHeight);
    print("You can no longer do this!");
  }
}

function nukeHyperlinks() {
  var uno = document.getElementsByTagName("A");
  var dos = uno.length;
  for (var i = 0; i < dos; i++) {
    uno[i].classList.remove("activeHyperlink");
    uno[i].style.textDecoration = "line-through";
    uno[i].style.color = "#007d91";
  }
}

function killHyperlink(txt) {
  var hypies = document.getElementsByTagName("A");
  for (var h = 0; h < hypies.length; h++) {
    if (hypies[h].innerHTML === txt) {
      hypies[h].classList.remove("activeHyperlink");
      hypies[h].style.textDecoration = "line-through";
      hypies[h].style.color = "#007d91";
    }
  }
}

function roomName(name) {
  var dummy = document.getElementById('label(' + room + ')');
  if (dummy === null) document.getElementById("square(" + room + ")").innerHTML += "<div class='label' id='label(" + room + ")'>" + name + "</div>";
  else dummy.innerHTML = name;
  roomLabels["square(" + room + ")"] = "<div class='label' id='label(" + room + ")'>" + name + "</div>";
}

function autoSave() {

  sessionStorage.setItem("invent", inventory_btn.innerHTML);

  sessionStorage.setItem("musicHolder", musicHolder);

  sessionStorage.setItem("color", kolorek);

  sessionStorage.setItem("room", room); // saves the player's current position
  sessionStorage.setItem("statistics", JSON.stringify(statistics)); // saves the player statistics metadata
  sessionStorage.setItem("sceneText", dom_scene.innerHTML); // save the console text

  // Save all the player's variables
  var playerVariables = [];
  for (varName in window.pl) {
    playerVariables.push({ name: varName, value: window.pl[varName] });
  }
  sessionStorage.setItem("playerVariables", JSON.stringify(playerVariables));

  // Save map metadata
  sessionStorage.setItem("roomLabels", JSON.stringify(roomLabels)); // saves all the collected room labels
  sessionStorage.setItem("drawnPositions", JSON.stringify(drawnPositions)); // save all the drawn rooms on map
  sessionStorage.setItem("drawnLines", JSON.stringify(drawnLines)); // save all the drawn lines on map
  sessionStorage.setItem("allowedLines", JSON.stringify(allowedLines)); // save all the allowed line metadata of map
  sessionStorage.setItem("preserveMap", JSON.stringify(preserveMap)); // save all the metadata of other map layers

  // Save inventory metadata
  var inventoryObjects_prepared = [];
  var ilen = inventoryObjects.length;
  for (var i = 0; i < ilen; i++) {
    inventoryObjects_prepared.push({ name: inventoryObjects[i].name, count: inventoryObjects[i].count, actions: [] });
    var alen = inventoryObjects[i].actions.length;
    for (var j = 0; j < alen; j++) {
      inventoryObjects_prepared[i].actions.push({ name: inventoryObjects[i].actions[j].name, action: String(inventoryObjects[i].actions[j].action) });
    }
  }
  sessionStorage.setItem("inventoryObjects", JSON.stringify(inventoryObjects_prepared));
}

function saveGame(command) {
  if (sessionStorage.getItem("room") !== null) {
    if (command === "Create a new save slot...") {
      var name = prompt("Please choose a name for the save file. Letters, numbers, and spaces allowed.");
      name = name.trim().replaceAll(" ", "_");
      if (name.length === 0) name = "Unnamed_Save";
      var existsAlready = false;
      if (saveSlots.indexOf(name) !== -1) existsAlready = !confirm("A save slot with this name already exists. Overwrite?");
    }
    else {
      var name = command;
      name = name.trim().replaceAll(" ", "_");
      var existsAlready = false;
    }
    if (existsAlready === false) {
      if (saveSlots.indexOf(name) === -1) saveSlots.push(name);
      localStorage.setItem("invent" + "$" + name, sessionStorage.invent);
      localStorage.setItem("saveSlots", JSON.stringify(saveSlots));
      localStorage.setItem("room" + "$" + name, sessionStorage.room);
      localStorage.setItem("statistics" + "$" + name, sessionStorage.statistics);
      localStorage.setItem("sceneText" + "$" + name, sessionStorage.sceneText);
      localStorage.setItem("color" + "$" + name, sessionStorage.color);
      localStorage.setItem("musicHolder" + "$" + name, sessionStorage.musicHolder);
      localStorage.setItem("playerVariables" + "$" + name, sessionStorage.playerVariables);
      localStorage.setItem("roomLabels" + "$" + name, sessionStorage.roomLabels);
      localStorage.setItem("drawnPositions" + "$" + name, sessionStorage.drawnPositions);
      localStorage.setItem("drawnLines" + "$" + name, sessionStorage.drawnLines);
      localStorage.setItem("allowedLines" + "$" + name, sessionStorage.allowedLines);
      localStorage.setItem("preserveMap" + "$" + name, sessionStorage.preserveMap);
      localStorage.setItem("inventoryObjects" + "$" + name, sessionStorage.inventoryObjects);
      document.getElementById("statusReport").style.color = "green";
      return "Game saved successfully!";
    }
    else {
      document.getElementById("statusReport").style.color = "#d80205";
      return "Save abandoned!";
    }
  }
  else {
    document.getElementById("statusReport").style.color = "#d80205";
    return "Error: you need to make at least one move before saving!";
  }
}

function loadGame(command) {
  if (command === "Create a new save slot...") {
    document.getElementById("statusReport").style.color = "#d80205";
    return "Error: no slot selected!";
  }
  else {
    if (localStorage.getItem("room" + "$" + command.replaceAll(" ", "_")) !== null) {
      enableInteraction();
      command = command.replaceAll(" ", "_");

      clearTimer();
      pauseMusic();
      if (localStorage.getItem("musicHolder" + "$" + command) !== "null") playMusic(localStorage.getItem("musicHolder" + "$" + command));
      musicHolder = localStorage.getItem("musicHolder" + "$" + command);
      kolorek = localStorage.getItem("color" + "$" + command);
      changeColor(kolorek);
      saveDisabled = false;

      room = localStorage.getItem("room" + "$" + command);
      statistics = JSON.parse(localStorage.getItem("statistics" + "$" + command));
      dom_scene.innerHTML = localStorage.getItem("sceneText" + "$" + command);
      dom_scene.scrollTo(0, dom_scene.scrollHeight);
      var playerVariables = JSON.parse(localStorage.getItem("playerVariables" + "$" + command));
      var plength = playerVariables.length;
      for (var i = 0; i < plength; i++) {
        if (typeof playerVariables[i].value !== "undefined") { // ignores any potentially saved functions
          if (typeof playerVariables[i].value === "string") eval("pl." + playerVariables[i].name + " = `" + playerVariables[i].value + "`;");
          else { eval("pl." + playerVariables[i].name + " = " + playerVariables[i].value + ";"); }
        }
      }
      roomLabels = JSON.parse(localStorage.getItem("roomLabels" + "$" + command));
      drawnPositions = JSON.parse(localStorage.getItem("drawnPositions" + "$" + command));
      allowedLines = JSON.parse(localStorage.getItem("allowedLines" + "$" + command));
      preserveMap = JSON.parse(localStorage.getItem("preserveMap" + "$" + command));
      drawnLines = [];

      // Move player
      var playerPosition = room.split(",");
      dom_map.style.left = "calc(50% - " + ((0.5 * mapWidth) + (playerPosition[0] * roomSize * 2)) + "px)";
      dom_map.style.top = "calc((0.5 * (100% - 208px - 45px)) - " + ((0.5 * mapWidth) - (playerPosition[1] * roomSize * 2)) + "px)";

      // Regenerate Map
      dom_map.innerHTML = "";
      for (var i = 0; i < drawnPositions.length; i++) {
        drawSquare(drawnPositions[i].split(","));
      }
      drawLines();
      drawnLines = JSON.parse(localStorage.getItem("drawnLines" + "$" + command));
      dom_zCounter.innerHTML = playerPosition[2];

      var inventoryObjects_bad = JSON.parse(localStorage.getItem("inventoryObjects" + "$" + command));
      inventoryObjects = [];
      var funCounter = 0;
      var xlen = inventoryObjects_bad.length;
      for (var i = 0; i < xlen; i++) {
        inventoryObjects.push({ name: inventoryObjects_bad[i].name, count: inventoryObjects_bad[i].count, actions: [] });
        var ylen = inventoryObjects_bad[i].actions.length;
        for (var j = 0; j < ylen; j++) {
          eval("var user_function_" + funCounter + " = " + inventoryObjects_bad[i].actions[j].action + ";");
          inventoryObjects[i].actions.push({ name: inventoryObjects_bad[i].actions[j].name, action: eval("user_function_" + funCounter) });
          funCounter++;
        }
      }
      inventory_btn.innerHTML = localStorage.getItem("invent" + "$" + command);
      removeArrowColorings("say nothing","don't remove");

      document.getElementById("statusReport").style.color = "green";
      return "Game loaded successfully!";
    }
    else {
      document.getElementById("statusReport").style.color = "#d80205";
      return "Error: no savedata found!";
    }
  }
}

function killGame() {
  enableInteraction();
  clearAll();
  clearTimer();
  print("<span style='color: red'><b>The game has ended.</b></span>");
  print(hyperlink("Restart Game",function(){ location.reload(); }));
}

// New Functions - v2022

function disableSaving() {
  saveDisabled = true;
}

function enableSaving() {
  saveDisabled = false;
}

function clearInventory() {
  inventory_btn.innerHTML = 'INVENTORY <b>(0)</b>';
  inventoryObjects = [];
}

function clearRoom() {
  surroundings_btn.innerHTML = 'ROOM <b>(0)</b>';
  roomObjects = [];
}

function timerFix() {
  dom_scene.click();
}

function clearExits() {
  north_arrow.classList.remove("directionAvailable");
  south_arrow.classList.remove("directionAvailable");
  east_arrow.classList.remove("directionAvailable");
  west_arrow.classList.remove("directionAvailable");
  northwest_arrow.classList.remove("directionAvailable");
  northeast_arrow.classList.remove("directionAvailable");
  southwest_arrow.classList.remove("directionAvailable");
  southeast_arrow.classList.remove("directionAvailable");
  up_arrow.classList.remove("directionAvailable");
  down_arrow.classList.remove("directionAvailable");
  removeFakeExits([north, south, east, west, northwest, northeast, southwest, southeast, up, down]);
}

function clearAll() {
  clearExits();
  clearRoom();
  clearInventory();
  nukeHyperlinks();
  dom_scene.click();
}

function setTimer(secs, funky) {
  var lion = secs*1000;
  timer = setTimeout(function() { timerFix(); funky(); }, lion);
}

function clearTimer() {
  clearTimeout(timer);
}

function link(cont, funk) {
  print(hyperlink(cont, funk));
}

function gameTitle(strr) {
  document.title = strr;
}

function playSound(aud) {
  audio = new Audio(aud);
  audio.play();
}

function playMusic(mus) {
  if (musicHolder === "null" || musicHolder !== mus) {
    if (musicHolder !== "null") pauseMusic();
    musicHolder = mus;
    music = new Audio(mus);
    music.loop = true;
    music.play();
  }
}

function pauseMusic() {
  if (musicHolder !== "null") music.pause();
  musicHolder = "null";
}

function image(nombre) {
  print("<img src='" + nombre + "' alt='PICTURE'>");
  var hahaha = setTimeout(function() { dom_scene.innerHTML += ""; dom_scene.scrollTo(0, dom_scene.scrollHeight); }, 1);
}

function ask(str) {
  var abc = prompt(str);
  abc = abc.trim();
  abc = abc.toLowerCase();
  return abc;
}

function enableInteraction() {
  if (interaction === 0) {
    for (var x = 0; x < intDirs.length; x++) {
      addExits(intDirs[x]);
    }
    for (var y = 0; y < intFakeDirs.length; y++) {
      eval(intFakeDirs[y] + `_arrow.classList.add("fakeDirectionAvailable");`);
    }
    intDirs = [];
    intFakeDirs = [];
    interaction = 1;
  }
}

function disableInteraction() {
  if (interaction === 1) {
    intDirs = [];
    intFakeDirs = [];
    if (document.getElementById("north").classList.contains("directionAvailable")) intDirs.push(north);
    if (document.getElementById("south").classList.contains("directionAvailable")) intDirs.push(south);
    if (document.getElementById("east").classList.contains("directionAvailable")) intDirs.push(east);
    if (document.getElementById("west").classList.contains("directionAvailable")) intDirs.push(west);
    if (document.getElementById("northeast").classList.contains("directionAvailable")) intDirs.push(northeast);
    if (document.getElementById("northwest").classList.contains("directionAvailable")) intDirs.push(northwest);
    if (document.getElementById("southeast").classList.contains("directionAvailable")) intDirs.push(southeast);
    if (document.getElementById("southwest").classList.contains("directionAvailable")) intDirs.push(southwest);
    if (document.getElementById("up").classList.contains("directionAvailable")) intDirs.push(up);
    if (document.getElementById("down").classList.contains("directionAvailable")) intDirs.push(down);

    if (document.getElementById("north").classList.contains("fakeDirectionAvailable")) intFakeDirs.push(north);
    if (document.getElementById("south").classList.contains("fakeDirectionAvailable")) intFakeDirs.push(south);
    if (document.getElementById("east").classList.contains("fakeDirectionAvailable")) intFakeDirs.push(east);
    if (document.getElementById("west").classList.contains("fakeDirectionAvailable")) intFakeDirs.push(west);
    if (document.getElementById("northeast").classList.contains("fakeDirectionAvailable")) intFakeDirs.push(northeast);
    if (document.getElementById("northwest").classList.contains("fakeDirectionAvailable")) intFakeDirs.push(northwest);
    if (document.getElementById("southeast").classList.contains("fakeDirectionAvailable")) intFakeDirs.push(southeast);
    if (document.getElementById("southwest").classList.contains("fakeDirectionAvailable")) intFakeDirs.push(southwest);
    if (document.getElementById("up").classList.contains("fakeDirectionAvailable")) intFakeDirs.push(up);
    if (document.getElementById("down").classList.contains("fakeDirectionAvailable")) intFakeDirs.push(down);
    clearExits();
    interaction = 0;
  }
}

function isInInventory(name) {
  var res = false;
  for (var j = 0; j < inventoryObjects.length; j++) {
    if (inventoryObjects[j].name === name) res = true;
  }
  return res;
}

function isInRoom(name) {
  var res = false;
  for (var j = 0; j < roomObjects.length; j++) {
    if (roomObjects[j].name === name) res = true;
  }
  return res;
}

function refreshRoom() {
  var skfjghkjsfngjk = dom_scene.innerHTML;
  teleport(room);
  dom_scene.innerHTML = skfjghkjsfngjk;
}

function addFakeExits(txt, funn) {
  for (var k = 0; k < txt.length; k++) {
    removeExits(txt[k]);
  }
  if (txt.indexOf(north) !== -1) { north_arrow.classList.add("fakeDirectionAvailable"); fakeNorth = funn; }
  if (txt.indexOf(south) !== -1) { south_arrow.classList.add("fakeDirectionAvailable"); fakeSouth = funn; }
  if (txt.indexOf(east) !== -1) { east_arrow.classList.add("fakeDirectionAvailable"); fakeEast = funn; }
  if (txt.indexOf(west) !== -1) { west_arrow.classList.add("fakeDirectionAvailable"); fakeWest = funn; }
  if (txt.indexOf(northeast) !== -1) { northeast_arrow.classList.add("fakeDirectionAvailable"); fakeNortheast = funn; }
  if (txt.indexOf(northwest) !== -1) { northwest_arrow.classList.add("fakeDirectionAvailable"); fakeNorthwest = funn; }
  if (txt.indexOf(southeast) !== -1) { southeast_arrow.classList.add("fakeDirectionAvailable"); fakeSoutheast = funn; }
  if (txt.indexOf(southwest) !== -1) { southwest_arrow.classList.add("fakeDirectionAvailable"); fakeSouthwest = funn; }
  if (txt.indexOf(up) !== -1) { up_arrow.classList.add("fakeDirectionAvailable"); fakeUp = funn; }
  if (txt.indexOf(down) !== -1) { down_arrow.classList.add("fakeDirectionAvailable"); fakeDown = funn; }
}

function removeFakeExits(txt) {
  if (txt.indexOf(north) !== -1) north_arrow.classList.remove("fakeDirectionAvailable");
  if (txt.indexOf(south) !== -1) south_arrow.classList.remove("fakeDirectionAvailable");
  if (txt.indexOf(east) !== -1) east_arrow.classList.remove("fakeDirectionAvailable");
  if (txt.indexOf(west) !== -1) west_arrow.classList.remove("fakeDirectionAvailable");
  if (txt.indexOf(northeast) !== -1) northeast_arrow.classList.remove("fakeDirectionAvailable");
  if (txt.indexOf(northwest) !== -1) northwest_arrow.classList.remove("fakeDirectionAvailable");
  if (txt.indexOf(southeast) !== -1) southeast_arrow.classList.remove("fakeDirectionAvailable");
  if (txt.indexOf(southwest) !== -1) southwest_arrow.classList.remove("fakeDirectionAvailable");
  if (txt.indexOf(up) !== -1) up_arrow.classList.remove("fakeDirectionAvailable");
  if (txt.indexOf(down) !== -1) down_arrow.classList.remove("fakeDirectionAvailable");
}

function changeColor(clr) {
  kolorek = clr;
  document.documentElement.style.background = "radial-gradient(#000, " + kolorek + ")";
}
