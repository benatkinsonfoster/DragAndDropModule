dropArea1 = [];
dropArea2 = [];
dropArea3 = [];

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
});

function removeDuplicates(item){
  for(var i = dropArea1.length-1; i = 0; i--){
    if(dropArea1[i] == item){
      dropArea1.splice(i, 1);
    }
  }
  for(var i = dropArea2.length-1; i = 0; i--){
    if(dropArea2[i] == item){
      dropArea2.splice(i, 1);
    }
  }
  for(var i = dropArea3.length-1; i = 0; i--){
    if(dropArea3[i] == item){
      dropArea3.splice(i, 1);
    }
  }
}

function addItem(item, area){
  removeDuplicates(item);
  area.push(item);
  console.log(`Added ${item} to ${area}`);
}

if (!("path" in Event.prototype)){
	Object.defineProperty(Event.prototype, "path", {
	  get: function() {
	    var path = [];
	    var currentElem = this.target;
	    while (currentElem) {
	      path.push(currentElem);
	      currentElem = currentElem.parentElement;
	    }
	    if (path.indexOf(window) === -1 && path.indexOf(document) === -1)
	      path.push(document);
	    if (path.indexOf(window) === -1)
	      path.push(window);
	    return path;
	  }
	});
}
