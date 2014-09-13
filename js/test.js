var previous_guess = 0;
var random_num = Math.ceil(Math.random()*100);
var guess;
console.log(random_num);
var random_guess = 
{
	onReady : function()
	{
		alert("boolean");
		$('#button').click(random_guess.DoGuess);
		$('restart').click(random_guess.Doreset);
	},

 	Inputvalidation: function()
	{
			guess = parseInt($('#guess').val());
		 	if(isNaN(guess))
		 	{
				alert("pls enter a valid number");
				$("#outputmessage").text("pls enter a valid number");
				return false;
		 	}
		 	else 
		 	{
		 		return true;
		 	}
	},
 
	DoGuess : function()
	{	
		if(random_guess.Inputvalidation())
		{
			if(parseInt(guess, 10) === random_num)
			 	{
					alert("Just Right!");
					$("#outputmessage").text("Just Right!");
					$("#button").hide();
			 	}
			else if( (random_num - previous_guess) > (guess-random_num) )
			 	{
					alert("Too Low!");
					$("#outputmessage").text("Too Low!");
			 	}
			else if((random_num - previous_guess) < (guess - random_num))
			 	{
					alert("Too High!");
					$("#outputmessage").text("Too High");
			 	}
			else if (guess > 100)
			 	{
					alert("Your input is Out of range!");
					$("#outputmessage").text("Sorry you are out of range!");
			 	}	
			 previous_guess = guess;
		}
	},
	Doreset : function()
	{
		location.reload();
	}

}

$(document).ready(random_guess.onReady);


 	
 	
 	