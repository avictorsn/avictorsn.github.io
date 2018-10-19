$(document).ready(function(){

   $(".visible_tab").click(function(){
   		$(this).find(".hidden_div").slideToggle("slow");
   });

}); 

/*

if($(this).find(".hidden_div").css("display") == "none"){
   			$(this).find(".hidden_div").fadeIn(450);
   		}
   		else{
   			$(".hidden_div").fadeOut(300);
   		}

*/