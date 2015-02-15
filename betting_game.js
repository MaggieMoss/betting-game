	// GuessingGame is a JS Object
$(document).ready(function(){
BettingGame = {
 	money: 100, 
  start: function(){
    if(this.money > 1 ){
  	  var number = Math.floor((Math.random() * 10) + 1);
      var bet = $("#bet").val();
      var guess = $("#guess").val();
      var test = 1
      console.log(bet);
      console.log(guess);
      console.log(test);
    if(guess !== number) {
    		if (guess == (number + 1) || guess == (number - 1)) {
          $("#response").text("So close! You were off by one! Keep your bet... this time.");
    		} else {
      		$("#response").text("Oops! The number was " + number + "! You lose your bet!");

          this.money -= bet};

    } else {
      $("#response").text("Jackpot! You got it! You've doubled your money!")
      this.money = this.money * 2
    }
    console.log(this.money);
  } else {
    $("#response").text("Uh-oh. Looks like you're out of cash. Game over.")
  }
  $(".money").text(this.money)
    
  },
}
 
$("button").on('click', function(){ 
  console.log("Hello");
	BettingGame.start();
  $( "modal" ).dialog( "open" );
  // var bet = +$("#bet").val();
  //     var guess = +$("#guess").val();
   // this gets called as soon as the page loads
});

$(".money").text(this.money)
});