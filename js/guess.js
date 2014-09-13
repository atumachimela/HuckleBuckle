var previous_guess = 0;
var random_num = Math.ceil(Math.random()*100);
var guess;
console.log(random_num);
var random_guess = 
{
	onReady : function()
	{
		$('#button').click(random_guess.DoGuess);
		$('#resetbutton').click(random_guess.Doreset);
	},

 	Inputvalidation: function()
	{
			guess = parseInt($('#guess').val());
		 	if(isNaN(guess))
		 	{
				//alert("pls enter a valid number");
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
					//alert("Just Right!");
					$("#outputmessage").text("Just Right!");
					$("#button").hide();
			 	}
			else if (parseInt(guess, 10) > 100)
			 	{
					//alert("Your input is Out of range!");
					$("#outputmessage").text("Sorry you number is above 100!");
					$("#outputmessage").fadeOut("slow").show("slow");
			 	}	
			else if( (random_num - previous_guess) > (guess-random_num) )
			 	{
					//alert("Too Low!");
					$("#outputmessage").text("Too Low!");
					$("#outputmessage").fadeOut("fast").show("slow");
			 	}
			else if((random_num - previous_guess) < (guess - random_num))
			 	{
					//alert("Too High!");
					$("#outputmessage").text("Too High");
					$("#outputmessage").fadeOut("fast").show("slow");


			 	}
			
			 previous_guess = guess;
		}
	},
	Doreset : function()
	{
		//location.reload();
		random_num = Math.ceil(Math.random()*100);
		$('#guess').val("");
		$("#outputmessage").text("");
		$("#button").show();
		
	}

}

$(document).ready(random_guess.onReady);


 	
 	
 	