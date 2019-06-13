dropArea1 = [];
dropArea2 = [];
dropArea3 = [];

$(document).ready(function(){
  $('.dropArea').droppable({
    drop: function(event, ui){
      ui.draggable.css({
        top:0,
        left:0,
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

function dragOverEvent(event){
  event.preventDefault();
}

function dropEvent(event){
  var success = true;
  if(event.target.id == "drop1"){
    addItem(id, dropArea1);
  }
  else if(event.target.id == "drop2"){
    addItem(id, dropArea2);
  }
  else if(event.target.id == "drop3"){
    addItem(id, dropArea3);
  }
  else if(event.target.id.slice(0, 4) == "item"){
    event.preventDefault();
    var id = event.dataTransfer.getData("id");
    event.target.parentElement.appendChild(document.getElementById(id));
    success = false;
  }
  else{
    success = false;
  }
  if(success){
    event.preventDefault();
    var id = event.dataTransfer.getData("id");
    event.target.appendChild(document.getElementById(id));
  }
}

function drag(event){
  event.dataTransfer.setData("element", event.target.outerHTML);
  event.dataTransfer.setData("source", event.path[2].outerHTML);
  event.dataTransfer.setData("id", event.target.id);
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
