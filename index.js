//single state object
var state = {
	items: []
};

//state modification functions
var addItem = function(state, item){
	state.items.push(item);
};

var deleteItem = function(state, element){
	var index = state.items.indexOf(element);
	if (index != -1){
		state.items.splice(index, 1);
	}
};

//render functions
var renderList = function(state, element){
	var itemsHTML = state.items.map(function(item){
		return '<li>' +  
        '<span class="shopping-item js-shopping-item">' + item + '</span>' +
        '<div class="shopping-item-controls">' + 
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>';
	});	
	element.html(itemsHTML)
};

//event listeners
$(document).ready(function(){

	$('.shopping-list-add').submit(function(event){
		event.preventDefault();
		addItem(state, $('.shopping-list-add-input').val());
		renderList(state, $('.shopping-list'));
		this.reset();
	});

	$('.shopping-list').on('click', '.shopping-item-delete', function(){
		var div = $(this).parent();
		var span = div.siblings();
		var value = span.text();
		deleteItem(state, value);
		renderList(state, $('.shopping-list'));
	});

});

	$('.shopping-list').on('click', '.shopping-item-toggle', function(){
		var element = $(this);
		var myVar = element.parent().siblings('.shopping-item, .js-shopping-item');
		myVar.toggleClass('shopping-item__checked');
		});









