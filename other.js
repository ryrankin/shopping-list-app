function deleteItem(state, itemIndex){
	state.items.splice(itemIndex, 1);
}

function handleDeletes(formElement, removeIdentifier, itemDataAttr, listElement, state){
listElement.on('click', removeIdentifier, function(event){
	var itemIndex = parseInt($(this).closest('li').attr(itemDataAttr));
	deleteItem(state, itemIndex);
	renderList(state, listElement, itemDataAttr);
});
};

$(function() {
var listElement = $('.js-shopping-list');
var itemDataAttr = 'data-list-item-id';
var formElement = $('#js-shopping-list-form');
var removeIdentifier = '.js-shopping-item-delete';

handleItemDeletes(formElement, removeIdentifier, itemDataAttr, listElement, state);
});


//remove items
var removeItem = $('#shopping-item-delete')
	removeItem.click(function(state, item){
		var toRemove = $('#shopping-list ul li').val();
		$('this').remove();
	});


$(document).ready(function() {
$('button') .click(function(){
var toAdd=$("input[name=glist]").val();
$('.list').append("'' + toAdd + ''");
$('.item').on(function(){
$(this).remove();
});
});
});

$('#shopping-item-delete').on('click', '.shopping-item-controls', function(event){
	$(this).remove();
});


