var textEditor;
var fontSize = 1;
var ಠ_ಠ = 0;
var gridSize = 1001;
var mapScaler = 1;
var zStorage = 0;
var lineNo = 0;
var comingFromEdit = false;

// Variables that will need saving:
var room = '0,0,0';
var roomScripts = {'0,0,0' : "// This is room (0,0,0); the game always starts here.\n// We recommend you use this room as a Start Screen\n// (i.e. to set default values for your variables, ask the player for anything you need to know - like their name - etc.)\n// Then just TELEPORT the player to wherever the real game starts :)\n\nroomName(`Start<br>Screen`);\n\n"};
//var timers = [];
var squares = ['0,0,0'];
var labels = { '0,0,0' : '' };
var directions = { '0,0,0' : '' };

var nothingFunction = function() {
  return "Are you sure you want to leave this page?";
}


window.onload = function() {

  // Advanced User Controller
  localStorage.setItem('advancedUser', 'true');

  if (localStorage.advancedUser === 'true') roomScripts = {'0,0,0' : "roomName(`Start<br>Screen`);\n\n// ADDITIONAL FUNCTIONS\n// Below are some useful functions which are not yet integrated into the 'Add Action' menu, in example format:\n\npl.name = prompt(`Please enter your name...`); // this will let the player type something in, and the value will be stored in the pl.name variable.\n\npl.eyeColor = ask(`Please enter below your preferred eye color...`); // same as prompt(); but will 'wash' user input by converting all letters to lowercase, and remove any blank spaces at the beginning and end of user input.\n\nif (isInInventory(`toothbrush`)) // checks if the player has an object named 'toothbrush' in their inventory.\n\nif (isInRoom(`wolf`)) // checks if there is an object named 'wolf' in the current room.\n\nchangeColor(`#FFFFFF`); // changes the background color. Accepts colors as HEX values.\n\nprint0(`Hello World!`); // the normal print(); function inserts 2 line breaks after the text it prints, thus creating a new paragraph. Print0, however, inserts no line breaks at all.\n\nprint1(`Hello World!`); // the normal print(); function inserts 2 line breaks after the text it prints, thus creating a new paragraph. Print1, however, inserts only 1 line break.\n\n// END OF ADDITIONAL FUNCTIONS. MAKE SURE TO DELETE EVERYTHING ABOVE THIS LINE BEFORE YOU START MAKING YOUR GAME!\n\n"};

  // Create a JavaScript code editor
  textEditor = ace.edit("codeEditor");
  textEditor.setTheme("ace/theme/merbivore");
  var JavaScriptMode = ace.require("ace/mode/javascript").Mode;
  textEditor.session.setMode(new JavaScriptMode());
  textEditor.setShowPrintMargin(false);

  // Create tabs
  $('#tabs').tabs({
    heightStyle: 'fill',
    activate: function(event, ui) { },
    beforeActivate: function(event, ui) {
      roomScripts[room] = textEditor.getValue();
      if (room !== 'Variables') redrawMap();
    }
   }).css({
    'overflow': 'auto'
  });

  // Create buttons
  $('.miniButton').button();

  // Menus and dialogs
  $('#actionMenu').menu();
  $('#printDialog').dialog({
    appendTo: '#tabs-2',
    autoOpen : false,
    buttons: [{ text: "OK", click: function() { print_carryOn(); $(this).dialog('close'); } }],
    width: 800
  });
  $('#hyperlinkDialog').dialog({
    appendTo: '#tabs-2',
    autoOpen : false,
    buttons: [{ text: "OK", click: function() { hyperlink_carryOn(); $(this).dialog('close'); } }],
    width: 800
  });
  $('#killHyperlinkDialog').dialog({
    appendTo: '#tabs-2',
    autoOpen : false,
    buttons: [{ text: "OK", click: function() { killHyperlink_carryOn(); $(this).dialog('close'); } }],
    width: 800
  });
  $('#imageDialog').dialog({
    appendTo: '#tabs-2',
    autoOpen : false,
    buttons: [{ text: "OK", click: function() { image_carryOn(); $(this).dialog('close'); } }],
    width: 800
  });
  $('#timerrDialog').dialog({
    appendTo: '#tabs-2',
    autoOpen : false,
    buttons: [{ text: "OK", click: function() { timerr_carryOn(); $(this).dialog('close'); } }],
    width: 800
  });
  function createInventoryAndRoomDialogs(string1, string2) {
    $('#add' + string1 + 'ObjectDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { addRoomObject_carryOn(string2); $(this).dialog('close'); } }],
      width: 800
    });
    $('#add' + string1 + 'ObjectActionDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { addRoomObjectAction_carryOn(string2); $(this).dialog('close'); } }],
      width: 800
    });
    $('#remove' + string1 + 'ObjectDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { removeRoomObject_carryOn(string2); $(this).dialog('close'); } }],
      width: 800
    });
    $('#remove' + string1 + 'ObjectActionDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { removeRoomObjectAction_carryOn(string2); $(this).dialog('close'); } }],
      width: 800
    });
    $('#statDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { addStatistic_carryOn(); $(this).dialog('close'); } }],
      width: 800
    });
    $('#removeStatDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { removeStatistic_carryOn(); $(this).dialog('close'); } }],
      width: 800
    });
    $('#modifyVariableDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { modifyVariable_carryOn(); $(this).dialog('close'); } }],
      width: 800
    });
    $('#operationSelect').selectmenu();
    $('.exitCheckBox').checkboxradio({ icon: false });
    $('#addExitsDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      width: 800
    });
    $('#goToDialog').dialog({
      appendTo: '#tabs-1',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { if ($('#x')[0].value !== '' && $('#y')[0].value !== '' && $('#z')[0].value !== '' && $('#x')[0].value.indexOf('.') === -1 && $('#y')[0].value.indexOf('.') === -1 && $('#z')[0].value.indexOf('.') === -1) { goToFunction(); $(this).dialog('close'); } else { alert('The coordinates entered are not valid!'); } } }],
      width: 800
    });
    $('#teleportDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { if ($('#t-x')[0].value !== '' && $('#t-y')[0].value !== '' && $('#t-z')[0].value !== '' && $('#t-x')[0].value.indexOf('.') === -1 && $('#t-y')[0].value.indexOf('.') === -1 && $('#t-z')[0].value.indexOf('.') === -1) { teleport_carryOn(); $(this).dialog('close'); } else { alert('The coordinates entered are not valid!'); } } }],
      width: 800
    });
    $('#ifDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { ifStatement_carryOn(); $(this).dialog('close'); } }],
      width: 800,
      maxHeight: 800
    });
    $('#roomNameDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { roomName_carryOn(); $(this).dialog('close'); } }],
      width: 800
    });
    $('#gameTitleDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { gameTitle_carryOn(); $(this).dialog('close'); } }],
      width: 800
    });
    $('#playSoundDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { playSound_carryOn(); $(this).dialog('close'); } }],
      width: 800
    });
    $('#playMusicDialog').dialog({
      appendTo: '#tabs-2',
      autoOpen : false,
      buttons: [{ text: "OK", click: function() { playMusic_carryOn(); $(this).dialog('close'); } }],
      width: 800
    });
    $('#ifVar1b, #ifVar2b, #ifVar3b, #ifVar4b, #ifVar5b').selectmenu();
    $('#ifAnd1, #ifOr1, #ifAnd2, #ifOr2, #ifAnd3, #ifOr3, #ifAnd4, #ifOr4').checkboxradio();
  }
  createInventoryAndRoomDialogs('Room','room');
  createInventoryAndRoomDialogs('Inventory','inventory');

  // Button click events
  $('#addAction').click(function(){ destroyMenus(); $('#actionMenu').css({ 'display' : 'block' }); $(this).addClass('ui-state-active'); });
  $('#editAction').click(function() {
    destroyMenus();
    lineNo = textEditor.selection.getCursor().row;
    var command = textEditor.session.getLine(lineNo).trim();
    if (command.indexOf('print("') === 0 || command.indexOf('print(`') === 0 || command.indexOf("print('") === 0) {
      command = command.replace('print(','');
      var quoteUsed = command.substr(0, 1);
      command = command.replace(quoteUsed, '');
      var index = command.lastIndexOf(quoteUsed);
      command = command.substr(0, index);
      command = converterMD(command);
      command = command.replace(/<br>/g, '').replace(/\n\n/g, '\n');

      comingFromEdit = true;
      $('#printDialog').dialog('open');
      $('#printTextarea')[0].value = command.trim();
    }
    else { alert('No PRINT command found on the currently selected line!'); return }
  });

  $('#codeEditor').click(function() { destroyMenus(); });
  $('#zoomIn').click(function() { destroyMenus(); fontSize = fontSize + 0.1; $('#codeEditor').css({ 'fontSize': fontSize + 'em' }); });
  $('#zoomOut').click(function() { destroyMenus(); fontSize = fontSize - 0.1; $('#codeEditor').css({ 'fontSize': fontSize + 'em' }); });
  $('#checkSyntax').click(function() { destroyMenus(); textEditor.session.setValue(beautifier.js(textEditor.getValue())); });
  $('#zoomInButton').click(function() { mapScaler+=0.2; $('#paper').css({ 'transform' : 'scale(' + mapScaler + ')' }); });
  $('#zoomOutButton').click(function() { mapScaler-=0.2; $('#paper').css({ 'transform' : 'scale(' + mapScaler + ')' }); });
  $('#deleteButton').click(function() {
    destroyMenus();
    if (room !== '0,0,0') {
      if (room === 'Variables') { alert('You cannot delete the Variables room!'); }
      else {
        if (confirm('Are you sure you want to delete room (' + room + ')?')) {
          var len = squares.length;
          for (var i = 0; i < len; i++) {
            if (squares[i] === room) { squares.splice(i, 1); }
          }
          delete roomScripts[room]; delete labels[room]; delete directions[room];
          zStorage = room.split(',')[2];
          room = 'Variables';
          $('.roomSelection').html('Selected room: (Variables)');
          if (typeof roomScripts[room] !== 'undefined') { textEditor.session.setValue(roomScripts[room]); textEditor.renderer.updateFull(); }
          else { textEditor.session.setValue(''); textEditor.renderer.updateFull(); }
          redrawMap();
        }
      }
    }
    else {
      alert('Room (0,0,0) cannot be deleted!');
    }
  });
  $('#layerUpButton').click(function() {
    changeLayer(1);
  });
  $('#layerDownButton').click(function() {
    changeLayer(-1);
  });
  $('#goToButton').click(function() {
    $('#x')[0].value = ''; $('#y')[0].value = ''; $('#z')[0].value = '';
    $('#goToDialog').dialog('open');
  });

  // This MUST stay at the very bottom of this function!!!
  $('#paper').css({ 'width' : (gridSize * 64) + 'px', 'height' : (gridSize * 64) + 'px', 'top' : 'calc(' + (-gridSize * 32) + 'px + 50%)', 'left' : 'calc(' + (-gridSize * 32) + 'px + 50%)' });
  $('#paper').draggable();
  $('#notes').click(function() {
    if (room !== 'Variables') zStorage = room.split(',')[2];
    room = 'Variables';
    $('.roomSelection').html('Selected room: (' + room + ')');
    $('.square').removeClass('glowing');
    $(this).addClass('glowing');
    if (typeof roomScripts[room] !== 'undefined') { textEditor.session.setValue(roomScripts[room]); textEditor.renderer.updateFull(); }
    else { textEditor.session.setValue(''); textEditor.renderer.updateFull(); }
  });
  $('#tabs').tabs('refresh');
  if (typeof sessionStorage.json !== 'undefined') {
    load_finishUp();
  }
  redrawMap();
  document.getElementById('square(0,0,0)').click();
  $('.ui-tabs-nav').click(function() { destroyMenus(); });
  $('#codeEditor').click(function() { destroyMenus(); });
  $('.pureText').prop('title','PURE TEXT: You may enter anything you like here - any text you enter will be parsed into a HTML string. Markup is fully supported, i.e. * for italics, ** for bold etc. HTML tags can be used here as well. If you input a HTML tag (e.g. <br>) but DO NOT want it to be rendered as a HTML tag, escape it with \\ (e.g. \\<br>). If you wish to include the value of a variable within your text, enclose it in ${ }, for example ${ pl.name }');
  $('.expression').prop('title','EXPRESSION: This text box accepts pure JavaScript. You may therefore enter here numbers (e.g. 5), variables (e.g. pl.name), text (e.g. "Steve" - note the quotes!), or combine any of these using mathematical operators such as +, -, * or /');
  $('.varName').prop('title','VARIABLE NAME: Variable names MUST NOT contain spaces. They must also start with a letter, the $ character or the _ character and must only contain letters, numbers, $ and _');
  $('#loadingMask')[0].style.display = 'none';
  textEditor.gotoLine(3);
  $('#ui-id-2').click(function() { textEditor.renderer.updateFull(); });
}

// Change map layer
function changeLayer(number) {
  $('#notes').click();
  zStorage = (parseInt(zStorage) + number) + '';
  redrawMap();
}

// Refresh tabs on window resize
window.addEventListener('resize', function(){ $('#tabs').tabs('refresh'); }, true);

// Function to destroy all menus
function destroyMenus() {
  $('.menu').css({ 'display' : 'none' });
  $('#addAction').removeClass('ui-state-active');
}

// Functions to be added to the text editor...
function addToEditor(string) {
  textEditor.insert(string);
}

function washUserInput(element, liquifyQuotes) {
  var dummy = $(element)[0].value.trim().replace(/\n/g, '<br>');
  dummy = converterHTML(dummy);
  if (liquifyQuotes === true) dummy = dummy.replace(/\"/g, '&quot;');
  dummy = "`" + dummy + "`";
  return dummy;
}

function nukeHyperlinks() {
  destroyMenus();
  addToEditor('nukeHyperlinks();');
}
function pauseMusic() {
  destroyMenus();
  addToEditor('pauseMusic();');
}
function clearConsole() {
  destroyMenus();
  addToEditor('clearConsole();');
}
function print() {
  destroyMenus();
  comingFromEdit = false;
  $('#printDialog').dialog('open');
  $('#printTextarea')[0].value = "";
}
function print_carryOn() {
  var command = "print(" + washUserInput('#printTextarea', false) + ");";
  if (comingFromEdit === false) addToEditor(command);
  else {
    var string = textEditor.session.getLine(lineNo);
    var index = string.indexOf('print');
    textEditor.session.replace(new ace.Range(lineNo, index, lineNo, index + string.length), command);
  }
}
function hyperlink() {
  destroyMenus();
  $('#hyperlinkDialog').dialog('open');
  $('#hyperlinkInput')[0].value = "";
}
function killHyperlink() {
  destroyMenus();
  $('#killHyperlinkDialog').dialog('open');
  $('#killHyperlinkInput')[0].value = "";
}
function timerr() {
  destroyMenus();
  $('#timerrDialog').dialog('open');
  $('#timerrInput')[0].value = "";
}
function hyperlink_carryOn() {
  addToEditor("link(" + washUserInput('#hyperlinkInput', true) + ", function() {");
  addToEditor("\n");
  addToEditor("\n");
  addToEditor('});');
}
function killHyperlink_carryOn() {
  addToEditor("killHyperlink(" + washUserInput('#killHyperlinkInput', true) + ");");
}
function destroyTimerr() {
  destroyMenus();
  addToEditor('clearTimer();');
}
function timerr_carryOn() {
  addToEditor("setTimer(" + washUserInput('#timerrInput', true) + ", function() {");
  addToEditor("\n");
  addToEditor("\n");
  addToEditor('});');
}
function image() {
  destroyMenus();
  $('#imageDialog').dialog('open');
  $('#imageInput')[0].value = "";
}
function image_carryOn() {
  addToEditor('image(`' + $('#imageInput')[0].value.trim() + '`);');
}

function addRoomObject(string) {
  destroyMenus();
  $('#add' + string.charAt(0).toUpperCase() + string.slice(1) + 'ObjectDialog').dialog('open');
  $('#' + string + 'ObjectInput')[0].value = "";
}
function addRoomObject_carryOn(string) {
  var command = "add" + string.charAt(0).toUpperCase() + string.slice(1) + "Object(" + washUserInput('#' + string + 'ObjectInput', true) + ");";
  addToEditor(command);
}
function addRoomObjectAction(string) {
  destroyMenus();
  $('#add' + string.charAt(0).toUpperCase() + string.slice(1) + 'ObjectActionDialog').dialog('open');
  $('#' + string + 'ObjectInput1')[0].value = "";
  $('#' + string + 'ObjectInput2')[0].value = "";
}
function addRoomObjectAction_carryOn(string) {
  addToEditor("add" + string.charAt(0).toUpperCase() + string.slice(1) + "ObjectAction(" + washUserInput('#' + string + 'ObjectInput1', true) + ", " + washUserInput('#' + string + 'ObjectInput2', true) + ", function() {");
  if (localStorage.advancedUser === 'false') addToEditor("// Add any code you want executed when the user chooses to do the above action below this comment!\n");
  addToEditor("\n");
  addToEditor("\n");
  addToEditor('});');
}
function removeRoomObject(string) {
  destroyMenus();
  $('#remove' + string.charAt(0).toUpperCase() + string.slice(1) + 'ObjectDialog').dialog('open');
  $('#remove' + string.charAt(0).toUpperCase() + string.slice(1) + 'ObjectInput')[0].value = "";
}
function removeRoomObject_carryOn(string) {
  var command = "remove" + string.charAt(0).toUpperCase() + string.slice(1) + "Object(" + washUserInput('#remove' + string.charAt(0).toUpperCase() + string.slice(1) + 'ObjectInput', true) + ");";
  addToEditor(command);
}
function removeRoomObjectAction(string) {
  destroyMenus();
  $('#remove' + string.charAt(0).toUpperCase() + string.slice(1) + 'ObjectActionDialog').dialog('open');
  $('#' + string + 'ObjectInputR1')[0].value = "";
  $('#' + string + 'ObjectInputR2')[0].value = "";
}
function removeRoomObjectAction_carryOn(string) {
  var command = "remove" + string.charAt(0).toUpperCase() + string.slice(1) + "ObjectAction(" + washUserInput('#' + string + 'ObjectInputR1', true) + ", " + washUserInput('#' + string + 'ObjectInputR2', true) + ");";
  addToEditor(command);
}
function addStatistic() {
  destroyMenus();
  $('#statDialog').dialog('open');
  $('#statInput')[0].value = "";
  $('#statUnitInput')[0].value = "";
}
function addStatistic_carryOn() {
  var command = "addStat(" + washUserInput("#statInput", true) + ", " + washUserInput("#statUnitInput", true) + ");";
  addToEditor(command);
}
function removeStatistic() {
  destroyMenus();
  $('#removeStatDialog').dialog('open');
  $('#removeStatInput')[0].value = '';
}
function removeStatistic_carryOn() {
  var command = "removeStat(" + washUserInput("#removeStatInput", true) + ");";
  addToEditor(command);
}
function modifyVariable() {
  destroyMenus();
  $('#modifyVariableDialog').dialog('open');
  // $('#operationSelect').selectmenu("refresh");
  $('#varInput')[0].value = '';
  $('#varValInput')[0].value = '';
}
function modifyVariable_carryOn() {
  var header = "pl." + $("#varInput")[0].value;
  var value = $('#operationSelect')[0].value;
  var operation = "=";
  if (value === "Add to...") operation = "+=";
  else if (value === "Subtract from...") operation = "-=";
  else if (value === "Multiply by...") operation = "*=";
  var command = header + " " + operation + " " + $("#varValInput")[0].value + ";";
  addToEditor(command);
}
function killGame() {
  destroyMenus();
  addToEditor('killGame();');
}
function enableSaving() {
  destroyMenus();
  addToEditor('enableSaving();');
}
function disableSaving() {
  destroyMenus();
  addToEditor('disableSaving();');
}
function refreshRoom() {
  destroyMenus();
  addToEditor('refreshRoom();');
}
function enableInteraction() {
  destroyMenus();
  addToEditor('enableInteraction();');
}
function disableInteraction() {
  destroyMenus();
  addToEditor('disableInteraction();');
}
function clearInventory() {
  destroyMenus();
  addToEditor('clearInventory();');
}
function clearRoom() {
  destroyMenus();
  addToEditor('clearRoom();');
}
function clearAll() {
  destroyMenus();
  addToEditor('clearAll();');
}
function clearExits() {
  destroyMenus();
  addToEditor('clearExits();');
}
function addExits(string) {
  destroyMenus();
  $('.exitCheckBox').prop('checked', false).checkboxradio('refresh');
  if (string === 'add') {
    $('#addExitsDialog').dialog({
      buttons: [{ text: "OK", click: function() { addExits_carryOn('add'); $(this).dialog('close'); } }],
      title: 'Add exits...'
    });
  }
  else if (string === 'remove') {
    $('#addExitsDialog').dialog({
      buttons: [{ text: "OK", click: function() { addExits_carryOn('remove'); $(this).dialog('close'); } }],
      title: 'Remove exits...'
    });
  }
  else if (string === 'addFake') {
    $('#addExitsDialog').dialog({
      buttons: [{ text: "OK", click: function() { addExits_carryOn('addFake'); $(this).dialog('close'); } }],
      title: 'Add fake exits...'
    });
  }
  else if (string === 'removeFake') {
    $('#addExitsDialog').dialog({
      buttons: [{ text: "OK", click: function() { addExits_carryOn('removeFake'); $(this).dialog('close'); } }],
      title: 'Remove fake exits...'
    });
  }
  $('#addExitsDialog').dialog('open');
}
function addExits_carryOn(string) {
  var command = string + 'Exits(';
  if (string === 'addFake' || string === 'removeFake') command += '[';
  var dummy = 0;

  if ($('#checkbox-1').prop('checked')) { command += 'north, '; dummy++; }
  if ($('#checkbox-2').prop('checked')) { command += 'south, '; dummy++; }
  if ($('#checkbox-3').prop('checked')) { command += 'east, '; dummy++; }
  if ($('#checkbox-4').prop('checked')) { command += 'west, '; dummy++; }
  if ($('#checkbox-5').prop('checked')) { command += 'northeast, '; dummy++; }
  if ($('#checkbox-6').prop('checked')) { command += 'northwest, '; dummy++; }
  if ($('#checkbox-7').prop('checked')) { command += 'southeast, '; dummy++; }
  if ($('#checkbox-8').prop('checked')) { command += 'southwest, '; dummy++; }
  if ($('#checkbox-9').prop('checked')) { command += 'up, '; dummy++; }
  if ($('#checkbox-10').prop('checked')) { command += 'down, '; dummy++; }

  if (dummy > 0) command = command.substring(0, command.length - 2);

  if (string === 'addFake') {
    command += '], function() {';
    addToEditor(command);
    addToEditor('\n');
    addToEditor('\n');
    addToEditor('});');
  }

  else if (string === 'removeFake') {
    command += ']);';
    addToEditor(command);
  }

  else {
    command += ');';
    addToEditor(command);
  }

}
function roomName() {
  destroyMenus();
  $('#roomNameDialog').dialog('open');
  $('#roomNameInput')[0].value = "";
}
function roomName_carryOn() {
  addToEditor('roomName(' + washUserInput('#roomNameInput', true).replace(/ /g,'<br>') + ');');
}
function gameTitle() {
  destroyMenus();
  $('#gameTitleDialog').dialog('open');
  $('#gameTitleInput')[0].value = "";
}
function gameTitle_carryOn() {
  addToEditor('gameTitle(`' + $('#gameTitleInput')[0].value.trim() + '`);');
}
function playSound() {
  destroyMenus();
  $('#playSoundDialog').dialog('open');
  $('#playSoundInput')[0].value = "";
}
function playSound_carryOn() {
  addToEditor('playSound(`' + $('#playSoundInput')[0].value.trim() + '`);');
}
function playMusic() {
  destroyMenus();
  $('#playMusicDialog').dialog('open');
  $('#playMusicInput')[0].value = "";
}
function playMusic_carryOn() {
  addToEditor('playMusic(`' + $('#playMusicInput')[0].value.trim() + '`);');
}

function ifStatement(string) {
  $('#ifWord').html(string.toUpperCase() + '...');
  $('#ifDialog').dialog('option', 'title', "Create an '" + string + "...then...' statement...");
  ಠ_ಠ = 0;
  destroyMenus();
  $('#field2, #field3, #field4, #field5').css({ 'display' : 'none' });
  $('#ifVar1a, #ifVar1c, #ifVar2a, #ifVar2c, #ifVar3a, #ifVar3c, #ifVar4a, #ifVar4c, #ifVar5a, #ifVar5c').val('');
  $('#ifVar1b, #ifVar2b, #ifVar3b, #ifVar4b, #ifVar5b').each(function(index, value) {
    value.selectedIndex = 2;
  });
  $('#ifVar1b, #ifVar2b, #ifVar3b, #ifVar4b, #ifVar5b').selectmenu('refresh');
  $('#ifAnd1, #ifAnd2, #ifAnd3, #ifAnd4').prop('checked', true);
  //$('#ifOr1, #ifOr2, #ifOr3, #ifOr4').prop('checked', false);
  $('#ifAnd1, #ifAnd2, #ifAnd3, #ifAnd4, #ifOr1, #ifOr2, #ifOr3, #ifOr4').checkboxradio('refresh');
  $('#add2').css({ 'display' : 'block' });
  $('#ifDialog').dialog('open');
}
function addCondition(number) {
  $('#field' + number).css({ 'display' : 'block' });
  $('#add' + (number + 1)).css({ 'display' : 'block' });
  $('#add' + number).css({ 'display' : 'none' });
  ಠ_ಠ++;
}

function ifStatement_carryOn() {
  ಠ_ಠ++;
  if ($('#ifWord').html() === "IF...") var command = 'if (';
  else var command = 'else if (';
  for (var i = 1; i <= ಠ_ಠ; i++) {
    var line = '';
    if ($('#ifVar' + i + 'b').val() === 'Less than...') var sign = '<';
    if ($('#ifVar' + i + 'b').val() === 'Less than or equal to...') var sign = '<=';
    if ($('#ifVar' + i + 'b').val() === 'Equal to...') var sign = '===';
    if ($('#ifVar' + i + 'b').val() === 'Not equal to...') var sign = '!==';
    if ($('#ifVar' + i + 'b').val() === 'Greater than or equal to...') var sign = '>=';
    if ($('#ifVar' + i + 'b').val() === 'Greater than...') var sign = '>';
    line += 'pl.' + $('#ifVar' + i + 'a').val() + ' ' + sign + ' ' + $('#ifVar' + i + 'c').val();
    command += line;
    if (i !== ಠ_ಠ) {
      if ($('#ifAnd' + i).prop('checked')) var secondSign = '&&';
      else var secondSign = '||';
      command += ' ' + secondSign + ' ';
    }
  }
  command += ') {';
  addToEditor(command);
  addToEditor('\n');
  addToEditor('\n');
  addToEditor('}');
}

function elseStatement() {
  destroyMenus();
  addToEditor('else {');
  addToEditor('\n');
  addToEditor('\n');
  addToEditor('}');
}



// TIME FOR SOME MAP ACTION!
function drawSquare(string) {
  var coords = string.split(',');
  var square = document.createElement('DIV');
  square.id = 'square(' + string + ')';
  square.classList.add('square');
  square.style.left = 'calc((50% - 32px) + ' + (128 * coords[0]) + 'px)';
  square.style.top = 'calc((50% - 32px) - ' + (128 * coords[1]) + 'px)';
  $('#paper')[0].appendChild(square);
}

function labelRoom(string) {
  document.getElementById('square('+ string + ')').innerHTML = labels[string];
}

function teleport() {
  destroyMenus();
  $('#teleportDialog').dialog('open');
  $('#t-x')[0].value = ''; $('#t-y')[0].value = ''; $('#t-z')[0].value = '';
}

function teleport_carryOn() {
  addToEditor('teleport(`' + $('#t-x')[0].value + ',' + $('#t-y')[0].value + ',' + $('#t-z')[0].value + '`);');
}

function redrawMap() {
  $('#paper')[0].innerHTML = '';
  if (room !== 'Variables') {
    directions[room] = '';
    parseCode(roomScripts[room]);
    var zLayer = room.split(',')[2];
  }
  else {
    var zLayer = zStorage;
  }

  var length = squares.length;
  for (var i = 0; i < length; i++) {
    if (zLayer === squares[i].split(',')[2]) {
      drawSquare(squares[i]);
      labelRoom(squares[i]);
      drawLines(squares[i]);
    }
  }
  $('.square').click(function() {
    var id = $(this).attr('id');
    id = id.substr(7).replace(')', '');
    room = id;
    $('.roomSelection').html('Selected room: (' + room + ')');
    $('.square').removeClass('glowing');
    $('#notes').removeClass('glowing');
    $(this).addClass('glowing');
    if (typeof roomScripts[room] !== 'undefined') { textEditor.session.setValue(roomScripts[room]); textEditor.renderer.updateFull(); }
    else { textEditor.session.setValue(''); textEditor.renderer.updateFull(); }
  });
  if (room !== 'Variables') document.getElementById('square(' + room + ')').classList.add('glowing');
  else document.getElementById('notes').classList.add('glowing');
}

function parseCode(input) {
  labels[room] = "Unnamed Room";
  var script = beautifier.js(input);
  var lines = script.split('\n');

  var linesLength = lines.length;
  for (var i = 0; i < linesLength; i++) {
    var line = lines[i].trim();
    if (line.indexOf('addExits(') === 0) {
      var directionString = line.substr(9);
      directionString = directionString.replace(';', '').replace(')', '').replace(/'/g, '').replace(/"/g, '').replace(/`/g, '').replace(/ /g, '');
      directions[room] += directionString + ',';

      var directionArray = directionString.split(',');
      var dirLen = directionArray.length;
      for (var x = 0; x < dirLen; x++) {
        var newRoomArray = room.split(',');

        if (directionArray[x] === "north") {
          newRoomArray[1] = parseInt(newRoomArray[1]) + 1;
        }
        else if (directionArray[x] === "south") {
          newRoomArray[1] = parseInt(newRoomArray[1]) - 1;
        }
        else if (directionArray[x] === "east") {
          newRoomArray[0] = parseInt(newRoomArray[0]) + 1;
        }
        else if (directionArray[x] === "west") {
          newRoomArray[0] = parseInt(newRoomArray[0]) - 1;
        }
        else if (directionArray[x] === "northeast") {
          newRoomArray[0] = parseInt(newRoomArray[0]) + 1;
          newRoomArray[1] = parseInt(newRoomArray[1]) + 1;
        }
        else if (directionArray[x] === "northwest") {
          newRoomArray[0] = parseInt(newRoomArray[0]) - 1;
          newRoomArray[1] = parseInt(newRoomArray[1]) + 1;
        }
        else if (directionArray[x] === "southwest") {
          newRoomArray[0] = parseInt(newRoomArray[0]) - 1;
          newRoomArray[1] = parseInt(newRoomArray[1]) - 1;
        }
        else if (directionArray[x] === "southeast") {
          newRoomArray[0] = parseInt(newRoomArray[0]) + 1;
          newRoomArray[1] = parseInt(newRoomArray[1]) - 1;
        }
        else if (directionArray[x] === "up") {
          newRoomArray[2] = parseInt(newRoomArray[2]) + 1;
        }
        else if (directionArray[x] === "down") {
          newRoomArray[2] = parseInt(newRoomArray[2]) - 1;
        }

        var newRoom = newRoomArray[0] + ',' + newRoomArray[1] + ',' + newRoomArray[2];
        if (squares.indexOf(newRoom) === -1) {
          squares.push(newRoom);
          labels[newRoom] = "Unnamed Room";
        }
      }

    }
    else if (line.indexOf('teleport(') === 0) {
      var coordString = line.substr(9);
      if (coordString.indexOf('"') === 0 || coordString.indexOf("'") === 0 || coordString.indexOf('`') === 0) { // If the string is explicitly defined...
        var coordString = coordString.replace(';', '').replace(')', '').replace(/'/g, '').replace(/"/g, '').replace(/`/g, '').replace(/ /g, '');
        if (squares.indexOf(coordString) === -1) {
          squares.push(coordString);
          labels[coordString] = "Unnamed Room";
        }
      }
    }
    else if (line.indexOf('roomName(') === 0) {
      var label = line.substr(9);
      labels[room] = "Indirectly named room";
      if (label.indexOf('"') === 0 || label.indexOf("'") === 0 || label.indexOf('`') === 0) { // If the string is explicitly defined...
        label = label.substr(1);
        if (label.slice(-1) === ';') label = label.substring(0, label.length - 1);
        label = label.substring(0, label.length - 2);
        labels[room] = label;
      }
    }
  }
}

function drawLines(place) {

  function drawVertical(sign) {
    var line = document.createElement('DIV');
    line.classList.add('verticalLine');
    line.style.left = document.getElementById('square(' + place + ')').style.left;
    var topPos = document.getElementById('square(' + place + ')').style.top;
    topPos = topPos.substring(0, topPos.length - 1);
    topPos += ' ' + sign + ' 64px)';
    line.style.top = topPos;
    $('#paper')[0].appendChild(line);
  }
  function drawHorizontal(sign) {
    var line = document.createElement('DIV');
    line.classList.add('horizontalLine');
    line.style.top = document.getElementById('square(' + place + ')').style.top;
    var leftPos = document.getElementById('square(' + place + ')').style.left;
    leftPos = leftPos.substring(0, leftPos.length - 1);
    leftPos += ' ' + sign + ' 64px)';
    line.style.left = leftPos;
    $('#paper')[0].appendChild(line);
  }
  function drawDiag(sign, reverseSign, tilt) {
    var lineContainer = document.createElement('DIV');
    lineContainer.classList.add('lineContainer');

    var leftPos = document.getElementById('square(' + place + ')').style.left;
    leftPos = leftPos.substring(0, leftPos.length - 1);
    leftPos += ' ' + sign + ' 64px)';
    lineContainer.style.left = leftPos;

    var topPos = document.getElementById('square(' + place + ')').style.top;
    topPos = topPos.substring(0, topPos.length - 1);
    topPos += ' ' + reverseSign + ' 64px)';
    lineContainer.style.top = topPos;

    $('#paper')[0].appendChild(lineContainer);

    var line = document.createElement('DIV');
    line.classList.add('diagonalLine');
    line.classList.add(tilt);
    lineContainer.appendChild(line);
  }

  if (typeof directions[place] !== 'undefined') {
    var array = directions[place].split(',');
    var length = array.length;
    for (var y = 0; y < length; y++) {
      if (array[y] === 'north') {
        drawVertical('-');
      }
      if (array[y] === 'south') {
        drawVertical('+');
      }
      if (array[y] === 'east') {
        drawHorizontal('+');
      }
      if (array[y] === 'west') {
        drawHorizontal('-');
      }
      if (array[y] === 'northeast') {
        drawDiag('+','-','uphillLine');
      }
      if (array[y] === 'southwest') {
        drawDiag('-','+','uphillLine');
      }
      if (array[y] === 'northwest') {
        drawDiag('-','-','downhillLine');
      }
      if (array[y] === 'southeast') {
        drawDiag('+','+','downhillLine');
      }
    }
  }

}

function goTo(pokoj) {
  var coordArray = pokoj.split(',');
  coordArray[0] = parseInt(coordArray[0]); coordArray[1] = parseInt(coordArray[1]); coordArray[2] = parseInt(coordArray[2]);
  if (room === 'Variables') var tempRoom = zStorage;
  else var tempRoom = room.split(',')[2];
  if (tempRoom !== pokoj.split(',')[2]) {
    var difference = coordArray[2] - parseInt(tempRoom);
    changeLayer(difference);
  }

  $('#paper').css({ 'top' : 'calc(' + (-gridSize * 32) + 'px + 50% + ' + (64 * 2 * coordArray[1]) + 'px)', 'left' : 'calc(' + (-gridSize * 32) + 'px + 50% - ' + (64 * 2 * coordArray[0]) + 'px)' });
  if (squares.indexOf(pokoj) !== -1) document.getElementById('square(' + pokoj + ')').click();
}

function goToFunction() {
  var string = $('#x')[0].value + ',' + $('#y')[0].value + ',' + $('#z')[0].value;
  goTo(string);
}








/* THE CODE BELOW IS FOR THE PUBLISH GAME TAB */

function invisibleDownloader(file, filename) {
  var dataHolder = document.createElement('a');
  dataHolder.setAttribute('href', file);
  dataHolder.setAttribute('download', filename);
  dataHolder.style.display = 'none';
  document.getElementById('tabs-3').appendChild(dataHolder);
  dataHolder.click();
  dataHolder.remove();
}

function saveProject() {
  var json = { roomScripts : roomScripts, directions : directions, labels: labels, squares: squares };
  var data = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(json));
  invisibleDownloader(data, 'project.json');
}

function loadProject() {
  $('#incognitoUploader').change(function(e) { load_carryOn(); });
  $('#incognitoUploader')[0].click();
}

function load_carryOn() {
  var reader = new FileReader();
  reader.onload = function() {
    sessionStorage.json = reader.result;
    location.reload();
  };
  reader.readAsText($('#incognitoUploader')[0].files[0]);
}

function load_finishUp() {
  try {
    var json = JSON.parse(sessionStorage.json);
    roomScripts = json.roomScripts;
    directions = json.directions;
    labels = json.labels;
    squares = json.squares;
    delete sessionStorage.json;
    alert("Project File loaded successfully!");
  }
  catch(error) {
    alert("Could not load project file. Error: " + error);
  }
}

function exportScript(downloadResult) {

  var script = '';
  var length = squares.length;

  script += "definitions['vars'] = function() {\n";
  if (typeof roomScripts['Variables'] !== 'undefined') script += roomScripts['Variables'].trim();
  script += "\n};\n\n";

  script += "definitions['vars']();\n\n";

  for (var i = 0; i < length; i++) {
    script += "definitions['" + squares[i] + "'] = function() {\n";
    if (typeof roomScripts[squares[i]] !== 'undefined') script += roomScripts[squares[i]].trim();
    script += "\n};\n\n";
  }

  script = beautifier.js(script);
  var data = "data:text/javascript;charset=utf-8," + encodeURIComponent(script);
  if (downloadResult) invisibleDownloader(data, 'gamescript.js');
  return script;

}
