var dropArea1 = [];
var dropArea2 = [];
var dropArea3 = [];
var itemBeingDragged;
var correctDropArea1 = [1, 2, 3, 4];
var correctDropArea2 = [5, 6];
var correctDropArea3 = [7, 8, 9];

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
  $('#dropArea1').find("div").each(function(){dropArea1.push(this.id)});
  $('#dropArea2').find("div").each(function(){dropArea2.push(this.id)});
  $('#dropArea3').find("div").each(function(){dropArea3.push(this.id)});
  console.log(dropArea1);
}

function reset(){
  window.location.reload();
}
