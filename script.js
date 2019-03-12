$("button").click(function(){
   var questionOne= $("#name").val();
   $(".namee").text(questionOne+" " + "will be" );
   
   var questionTwo= $("#age").val();
   $(".ages").html(parseInt(questionTwo)+41+" " + "years old and will have");

   var questionThree= $("#tv-show").val();
   $(".shows").html("seen" + " " + questionThree);
   
   var questionFour= $("#hour").val();
   $(".hours").html("for"+" "+parseInt(questionFour)*2132+ " " + "hours. Sleep deprivation is sooooo cute ;)");
   
   $("h2, input").css("display", "none");
   
   $("body").css("background-image", "url(http://33.media.tumblr.com/b656da42b95c1230665c67b720386ed2/tumblr_nbmkknOP3c1tq4of6o1_250.gif)");
   $("h1").text("By the Year 2060...");
});
 



    

