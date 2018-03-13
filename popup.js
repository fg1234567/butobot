$(function() {
	chrome.storage.sync.get('Hat', function(items) {
		var newTotal = parseInt(items.Hat);
		$('#Hat').text(newTotal);
	});
});

$(function() {
	chrome.storage.sync.get('Shoes', function(items) {
		var newTotal = parseInt(items.Shoes);
		$('#Shoes').text(newTotal);
	});
});

$(function() {
	chrome.storage.sync.get('Ring', function(items) {
		var newTotal = parseInt(items.Ring);
		$('#Ring').text(newTotal);
	});
});

$(function() {
	chrome.storage.sync.get('Necklace', function(items) {
		var newTotal = parseInt(items.Necklace);
		$('#Necklace').text(newTotal);
	});
});

$(function() {
	chrome.storage.sync.get('Jacket', function(items) {
		var newTotal = parseInt(items.Jacket);
		$('#Jacket').text(newTotal);
	});
});

$(function() {
	chrome.storage.sync.get('Pants', function(items) {
		var newTotal = parseInt(items.Pants);
		$('#Pants').text(newTotal);
	});
});



// commands for Hat
$(function() {

	$('#addHat').click(function() {
		chrome.storage.sync.get('Hat', function(items) {
			var newTotal = 0;
			if (items.Hat) { newTotal += parseInt(items.Hat); }

			var amount = $('#amountOfHat').val();
			if (amount) {	newTotal += parseInt(amount);	}
			else { newTotal ++; }

			chrome.storage.sync.set({ 'Hat': newTotal });

			$('#Hat').text(newTotal);
			$('#amountOfHat').val('');
		});
	});
});

$(function() {

	$('#decrementHat').click(function() {
		chrome.storage.sync.get('Hat', function(items) {
			var newTotal = 0;
			if (items.Hat) { newTotal += parseInt(items.Hat); }

			var amount = $('#amountOfHat').val();
			if (amount) {	newTotal -= parseInt(amount); }
			else { newTotal --; }

			if(newTotal > 0 || newTotal == 0){
			chrome.storage.sync.set({ 'Hat': newTotal });

			$('#Hat').text(newTotal);
			$('#amountOfHat').val('');
			}

			else{
				newTotal = 0;
				chrome.storage.sync.set({ 'Hat': newTotal });

				$('#Hat').text(newTotal);
				$('#amountOfHat').val('');
			}
		});
	});
});

//commands for Shoes
$(function() {

	$('#addShoes').click(function() {
		chrome.storage.sync.get('Shoes', function(items) {
			var newTotal = 0;
			if (items.Shoes) { newTotal += parseInt(items.Shoes); }

			var amount = $('#amountOfShoes').val();
			if (amount) {	newTotal += parseInt(amount); }
			else { newTotal ++; }

			chrome.storage.sync.set({ 'Shoes': newTotal });

			$('#Shoes').text(newTotal);
			$('#amountOfShoes').val('');
		});
	});
});

$(function() {

	$('#decrementShoes').click(function() {
		chrome.storage.sync.get('Shoes', function(items) {
			var newTotal = 0;
			if (items.Shoes) { newTotal += parseInt(items.Shoes); }

			var amount = $('#amountOfShoes').val();
			if (amount) { newTotal -= parseInt(amount);	}
			else { newTotal --; }

			if(newTotal > 0 || newTotal == 0 ){
			chrome.storage.sync.set({ 'Shoes': newTotal });

			$('#Shoes').text(newTotal);
			$('#amountOfShoes').val('');
			}

			else{
			newTotal = 0;
			chrome.storage.sync.set({ 'Shoes': newTotal });

			$('#Shoes').text(newTotal);
			$('#amountOfShoes').val('');
		 }
		});
	});
});


//commands for Ring
$(function() {

	$('#addRing').click(function() {
		chrome.storage.sync.get('Ring', function(items) {
			var newTotal = 0;
			if (items.Ring) { newTotal += parseInt(items.Ring); }

			var amount = $('#amountOfRing').val();
			if (amount) {	newTotal += parseInt(amount); }
			else { newTotal ++; }

			chrome.storage.sync.set({ 'Ring': newTotal });

			$('#Ring').text(newTotal);
			$('#amountOfRing').val('');
		});
	});
});

$(function() {

	$('#decrementRing').click(function() {
		chrome.storage.sync.get('Ring', function(items) {
			var newTotal = 0;
			if (items.Ring) { newTotal += parseInt(items.Ring); }

			var amount = $('#amountOfRing').val();
			if (amount) { newTotal -= parseInt(amount);	}
			else { newTotal --; }

			if(newTotal > 0 || newTotal == 0 ){
			chrome.storage.sync.set({ 'Ring': newTotal });

			$('#Ring').text(newTotal);
			$('#amountOfRing').val('');
			}

			else{
			newTotal = 0;
			chrome.storage.sync.set({ 'Ring': newTotal });

			$('#Ring').text(newTotal);
			$('#amountOfRing').val('');
			}


		});
	});
});

//commands for Necklace
$(function() {

	$('#addNecklace').click(function() {
		chrome.storage.sync.get('Necklace', function(items) {
			var newTotal = 0;
			if (items.Necklace) { newTotal += parseInt(items.Necklace); }

			var amount = $('#amountOfNecklace').val();
			if (amount) {	newTotal += parseInt(amount); }
			else { newTotal ++; }

			chrome.storage.sync.set({ 'Necklace': newTotal });

			$('#Necklace').text(newTotal);
			$('#amountOfNecklace').val('');
		});
	});
});

$(function() {

	$('#decrementNecklace').click(function() {
		chrome.storage.sync.get('Necklace', function(items) {
			var newTotal = 0;
			if (items.Necklace) { newTotal += parseInt(items.Necklace); }

			var amount = $('#amountOfNecklace').val();
			if (amount) { newTotal -= parseInt(amount);	}
			else { newTotal --; }

			if(newTotal > 0 || newTotal == 0 ){
			chrome.storage.sync.set({ 'Necklace': newTotal });

			$('#Necklace').text(newTotal);
			$('#amountOfNecklace').val('');
		  }

			else{
			newTotal = 0;
			chrome.storage.sync.set({ 'Necklace': newTotal });

			$('#Necklace').text(newTotal);
			$('#amountOfNecklace').val('');
		  }

		});
	});
});


//commands for Jacket
$(function() {

	$('#addJacket').click(function() {
		chrome.storage.sync.get('Jacket', function(items) {
			var newTotal = 0;
			if (items.Jacket) { newTotal += parseInt(items.Jacket); }

			var amount = $('#amountOfJackte').val();
			if (amount) {	newTotal += parseInt(amount); }
			else { newTotal ++; }

			chrome.storage.sync.set({ 'Jacket': newTotal });

			$('#Jacket').text(newTotal);
			$('#amountOfJacket').val('');
		});
	});
});

$(function() {

	$('#decrementJacket').click(function() {
		chrome.storage.sync.get('Jacket', function(items) {
			var newTotal = 0;
			if (items.Jacket) { newTotal += parseInt(items.Jacket); }

			var amount = $('#amountOfJacket').val();
			if (amount) { newTotal -= parseInt(amount);	}
			else { newTotal --; }

			if(newTotal > 0 || newTotal == 0 ){
			chrome.storage.sync.set({ 'Jacket': newTotal });

			$('#Jacket').text(newTotal);
			$('#amountOfJacket').val('');
		  }

			else{
			newTotal = 0;
			chrome.storage.sync.set({ 'Jacket': newTotal });

			$('#Jacket').text(newTotal);
			$('#amountOfJacket').val('');
		  }

		});
	});
});


//commands for Pants
$(function() {

	$('#addPants').click(function() {
		chrome.storage.sync.get('Pants', function(items) {
			var newTotal = 0;
			if (items.Pants) { newTotal += parseInt(items.Pants); }

			var amount = $('#amountOfPants').val();
			if (amount) {	newTotal += parseInt(amount); }
			else { newTotal ++; }

			chrome.storage.sync.set({ 'Pants': newTotal });

			$('#Pants').text(newTotal);
			$('#amountOfPants').val('');
		});
	});
});

$(function() {

	$('#decrementPants').click(function() {
		chrome.storage.sync.get('Pants', function(items) {
			var newTotal = 0;
			if (items.Pants) { newTotal += parseInt(items.Pants); }

			var amount = $('#amountOfPants').val();
			if (amount) { newTotal -= parseInt(amount);	}
			else { newTotal --; }

			if(newTotal > 0 || newTotal == 0 ){
			chrome.storage.sync.set({ 'Pants': newTotal });

			$('#Pants').text(newTotal);
			$('#amountOfPants').val('');
		  }

			else{
			newTotal = 0;
			chrome.storage.sync.set({ 'Pants': newTotal });

			$('#Pants').text(newTotal);
			$('#amountOfPants').val('');
		  }

		});
	});
});
