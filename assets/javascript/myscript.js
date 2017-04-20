// ****** Countdown Timer Function
var x=0;
var option1='';
	var option2='';
	var option3='';
	var option4='';
	var sc=0;
	var ls=0;
	var q1=0;
	var tbloptions=[];
	var tblquestion= [];
$(document).ready(function () {
	// body...
	
	

				// body...
	
	$('#mybtn').on("click",function () {next_question();});




});




	function filltable() {
//--------------------------- Questions
		tblquestion[0] = "Who Invented Telephone?";
		tblquestion[1] = "Who is the author of War and Peace?";
		tblquestion[2] = "Who was first President of USA?";
		tblquestion[3] = "What is national anthem of USA?";

//------------------------- Option Data
		tbloptions[0]="1.Albert Eienstien ";
		tbloptions[1]="2.Dr X ";
		tbloptions[2]="3.Alexender Gram Bell*";
		tbloptions[3]="4.Martha Stewart ";
		tbloptions[4]="1.Leo Tolstoy*";
		tbloptions[5]="2.Alpachino ";
		tbloptions[6]="3.John Antanio ";
		tbloptions[7]="4.Tina Fay ";
		tbloptions[8]="1.Abraham Lincon ";
		tbloptions[9]="2.George Washington*";
		tbloptions[10]="3.John F Kennedy ";
		tbloptions[11]="4.John Adams ";
		tbloptions[12]="1.Star-Spangled stripe ";
		tbloptions[13]="2.Star-Spangled Banner*";
		tbloptions[14]="3.Spangled-Banner ";
		tbloptions[15]="4.Live fullest life ";
	}



	function showquestion(inum) 
	{
		filltable();
		var xx=0;
		 {	var i=inum;
			var questionask=tblquestion[i];
			//console.log(questionask);

			$('#question-col').html("<h2>Question:"+questionask+"</h2>");
				xx=inum*4;

			// Filling the options			
				option1=tbloptions[xx];
				xx=xx+1;
				option2=tbloptions[xx];
				xx=xx+1;
				option3=tbloptions[xx];
				xx=xx+1;
				option4=tbloptions[xx];
			// Showing the options on the front end
				$('#op1').html('<h3><a href="#" onclick="checkresult(option1)">'+option1.substr(0,option1.length-1)+'</a></h3>');
				$('#op2').html('<h3><a href="#" onclick="checkresult(option2)">'+option2.substr(0,option2.length-1)+'</a></h3>');
				$('#op3').html('<h3><a href="#" onclick="checkresult(option3)">'+option3.substr(0,option3.length-1)+'</a></h3>');
				$('#op4').html('<h3><a href="#" onclick="checkresult(option4)">'+option4.substr(0,option4.length-1)+'</a></h3>');
				
			

				playtime(0);
		
		}
	}

// Moveing to next question
	
			function next_question() 
			{
					if (q1>=4) {
						$("#mybtn").html("<h3>End of Trivia</h3>");
						}
					else{

							showquestion(q1);
							q1=q1+1;
							$("#mybtn").html("<h3>Next Question</h3>");
							$("#mybtn").attr("disabled","disabled");

						}
				}

	var x;
function playtime(cinterval) {
		// body...
		//if (cinterval==0)
		//	{
				clearInterval(x);
			   $("#mid-col").empty();
		//	}

			var countDownDate = 30;
			var now =0;
			var seconds =0;
			var distance=0;
		// Update the count down every 1 second
		x = setInterval(function() {

	  	now = now+1;

	  // Find the distance between now an the count down date
		distance = countDownDate - now;

	 	seconds = Math.floor((distance % (1000 * 60)));

	  // Display the result in the element with id="timer-panel"
	  $("#mid-col").html("<h1><center>"+seconds + "</center></h1>") ;

	  // If the count down is finished, write some text 

	  if (seconds <= 1) 
	  	{
	    clearInterval(x);
	   $("#mid-col").html("<h1><center>TIME UP</center></h1>");
	  	ls=ls+1;
	  	updateScore();
	  	}
		}, 1000);
	}

	// End Function
function updateScore() {
	// body...
	if ((sc+ls)<=tblquestion.length){
	$('#score').html("<center><h4>Correct:"+sc+" Wrong:"+ls+"</h4></center>")
	}	
}
	//Searching for the correct answer
function checkresult(option)
	{
					var res=option.includes("*");
					if (res)
					{
						sc=sc+1;
					

					}
					else
					{
						ls=ls+1;
						
					}
						updateScore();
						next_question();

	}

