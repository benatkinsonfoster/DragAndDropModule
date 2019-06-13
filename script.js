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
});

function checkAnswers(){
  console.log("Checking answers...");
  dropAreas[0] = [];
  dropAreas[1] = [];
  dropAreas[2] = [];
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
    }
  }
  console.log(dropAreas[0]);
  console.log(correctDropAreas[0]);
  for(var i = 0; i < 3; i++){
    for(var ii = 0; ii < dropAreas[i].length; ii++){
      if(correctDropAreas[i].includes(dropAreas[i][ii], 0)){
        $('#item' + dropAreas[i][ii]).addClass("correct");
        console.log(`Item ${dropAreas[i][ii]} correct`);
      }
      else{
        $('#item' + dropAreas[i][ii]).addClass("incorrect");
        console.log(`Item ${dropAreas[i][ii]} incorrect`);
      }
    }
  }
}

function reset(){
  window.location.reload();
}
