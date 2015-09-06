/* Comments */
// Line Comments

/*
	Block
	of
	Comments
*/

function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName+' '+lastName;
	console.log('User is called ' +fullName);

	$('h2').text('Hello '+ fullName);

	var userAge;

	function checkAge() {
		userAge = prompt( 'How old are you?');
		userAge = parseInt(userAge);
		if (isNan (userAge) === true) {
			alert( 'please only use numbers');
		}
	}



	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);

	if (userAge >= 18) {
		console.log( 'User is a cool adult');
	} else if (userAge >= 13) {
		console.log( 'User is a teenager');
	} else {
		alert( 'Go away child!');
	}



	if (firstName.toLowerCase() == "general" && lastName.toLowerCase() != "assembly") {
		console.log( 'Hey mister General!');
	}
}

//When the page loads
$(function() {

	$('img').on('click', askQuestions);

	//When the user clicks a h3 element
	$('h3').on('click',function(){

		//Toggle the next element
		$(this).next().slideToggle(1000);

	});

});