var dropArea1 = [];
var dropArea2 = [];
var dropArea3 = [];
var dropAreas = [dropArea1, dropArea2, dropArea3];
var itemBeingDragged;
var correctDropArea1 = [1, 2, 3, 4];
var correctDropArea2 = [5, 6];
var correctDropArea3 = [7, 8, 9];
var correctDropAreas = [correctDropArea1, correctDropArea2, correctDropArea3];

$(document).ready(function(){
  $('.dropArea').droppable({
    drop: function(event, ui){
      ui.draggable.css({
        top:'50%',
        left:'50%',
        revert: 'invalid'
      });
      $(this).append(ui.draggable);
    }
  });
  $('.dragItem').draggable({
    cursor: "move",
    revert: 'invalid',
    helper: 'clone',
    appendTo: 'body',
    scroll: false
  });
  $('#resetButton').click(reset);
  $('#checkButton').click(checkAnswers);
  $('#closeButton').click(closePage);
  $('#quitButton').click(quit);
});

function quit(){
  parent.history.back();
  return false;
}

function closePage(){
  $('#endScreen').addClass('hidden');
}

function checkAnswers(){
  console.log("Checking answers...");
  var correct = true;
  dropAreas[0] = [];
  dropAreas[1] = [];
  dropAreas[2] = [];
  unusedItems = [];
  for(var i = 1; i <= 9; i++){
    var area = $('#item' + i).parent()[0].id;
    switch(area){
      case 'drop1':
        dropAreas[0].push(i);
      break;
      case 'drop2':
        dropAreas[1].push(i);
      break;
      case 'drop3':
        dropAreas[2].push(i);
      break;
      default:
        unusedItems.push(i);
      break;
    }
  }
  for(var i = 0; i < 3; i++){
    for(var ii = 0; ii < dropAreas[i].length; ii++){
      if(correctDropAreas[i].includes(dropAreas[i][ii], 0)){
        $('#item' + dropAreas[i][ii]).addClass("correct");
        $('#item' + dropAreas[i][ii]).removeClass("incorrect");
        console.log(`Item ${dropAreas[i][ii]} correct`);
      }
      else{
        $('#item' + dropAreas[i][ii]).addClass("incorrect");
        console.log(`Item ${dropAreas[i][ii]} incorrect`);
        $('#item' + dropAreas[i][ii]).removeClass("correct");
        correct = false;
      }
    }
  }
  if(correct && unusedItems.length == 0){
    $('#endScreen').removeClass('hidden');
  }
  else if(unusedItems.length == 0){
    $('#tryAgainScreen').removeClass('hidden');
    $('#tryAgainScreen').animate({ left: '10%' }, 1000, function() {
      setTimeout(hideTryAgainScreen, 3000);
    });
  }
}

function hideTryAgainScreen(){
  console.log("hide!");
  $('#tryAgainScreen').animate({ left: '100%' }, 1000, function() {
    $('#tryAgainScreen').addClass('hidden');
  });
}

function reset(){
  window.location.reload();
}
