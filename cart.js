if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready)
}else {
	ready()
}

function ready() {
	//removing from cart
	const removeCartItemButton = document.getElementsByClassName('btn-danger');
	console.log(removeCartItemButton);
	for (var i = 0; i < removeCartItemButton.length; i++) {
		const button = removeCartItemButton[i]
		button.addEventListener('click', removeCartItems)
	}

	//quantity change
	var quantityInputs = document.getElementsByClassName('qty-text');
	console.log(quantityInputs);
	for(var i = 0; i < quantityInputs.length; i++){
		var input = quantityInputs[i]
		input.addEventListener('change', quantityChanged)
	}

	//Add to cart


}

function removeCartItems(event){
	const buttonClicked = event.target
	buttonClicked.parentElement.parentElement.parentElement.remove()
	updateCartTotal()
}

function quantityChanged(event){
	var input = event.target
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1
	}
	updateCartTotal()
}

function updateCartTotal(){
 	var cartItemContainer = document.getElementsByClassName('items')[0]
	var cartItems = cartItemContainer.getElementsByClassName('item')
	var total = 0
	for (var i = 0; i < cartItems.length; i++) {
		var cartItem = cartItems[i]
			var priceElement = cartItem.getElementsByClassName('cart-price')[0]
			var quantityElement =cartItem.getElementsByClassName('qty-text')[0]
			var price = parseFloat(priceElement.innerText.replace('$', ''))
			var quantity = quantityElement.value
			total = total + (price*quantity)
			console.log(total)

	}
	document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total

	
}