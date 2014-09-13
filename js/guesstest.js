var previous_guess = 0;
var random_num = Math.ceil(Math.random()*100);
console.log(random_num);
var random_guess = function()
{	
var guess = parseInt($('#guess').val());
	if(isNaN(guess))
	{
	alert("pls enter a valid number");
	}

	else if(parseInt(guess) === random_num)
	{
	alert("Just Right!");
	}
	else if( (random_num - previous_guess) < (guess-random_num) )
	{
	alert("Too Low!");
	}
	else if((random_num - previous_guess) > (guess - random_num))
	{
	alert("Too High!");
	}
	else if (guess > 100)
	{
	alert("Your input is Out of range!");
	}	
	previous_guess = guess;
};

$(document).ready(function()
{
	$('#button').click(function()
	{
	random_guess();

	});

	$('restart').click(function()
	{
	location.reload();
	});
});

