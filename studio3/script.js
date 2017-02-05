var suggestion=0;

document.addEventListener("DOMContentLoaded", function(event) {

    console.log("catch22");
    var catch22 = document.getElementById("catch22");
    var paperGirls = document.getElementById("paperGirls");
    var paperGirls2 = document.getElementById("paperGirls2");
    var luminaries = document.getElementById("luminaries");
    var hotel=document.getElementById("hotel");
    var yellowButton=document.getElementById("yellowButton");
    var close=document.getElementById("close");
    var close2=document.getElementById("close2");
	var close3=document.getElementById("close3");
	var close4=document.getElementById("close4");
    var catch22Text=document.getElementById("catch22Text");
    var luminariesText=document.getElementById("luminariesText");
	var hotelText=document.getElementById("hotelText");
	var paperGirlsText=document.getElementById("paperGirlsText");

    catch22.addEventListener('mouseover', function() {
        catch22.style.webkitTransform = 'rotate(10deg)';
        if (suggestion<10){
          yellowButton.style.display="block";
          suggestion+=1;
          console.log(suggestion);
        }
    })

    catch22.addEventListener('mouseout', function() {
        catch22.style.webkitTransform = 'rotate(0deg)';
        yellowButton.style.opacity="10 2s";
    })

    paperGirls.addEventListener('mouseover', function() {
        paperGirls.style.webkitTransform = 'rotate(10deg)';
    })

    paperGirls.addEventListener('mouseout', function() {
        paperGirls.style.webkitTransform = 'rotate(0deg)';
    })

    paperGirls2.addEventListener('mouseover', function() {
        paperGirls2.style.webkitTransform = 'rotate(10deg)';
    })

    paperGirls2.addEventListener('mouseout', function() {
        paperGirls2.style.webkitTransform = 'rotate(0deg)';
    })

    hotel.addEventListener('mouseover', function() {
        hotel.style.webkitTransform = 'rotate(10deg)';
    })

    hotel.addEventListener('mouseout', function() {
        hotel.style.webkitTransform = 'rotate(0deg)';
    })

    luminaries.addEventListener('mouseover', function() {
        luminaries.style.webkitTransform = 'rotate(10deg)';
    })

    luminaries.addEventListener('mouseout', function() {
        luminaries.style.webkitTransform = 'rotate(0deg)';
    })

    luminaries.addEventListener('click',function(){
      luminariesText.style.display="block";
    })

    catch22.addEventListener('click', function(){
      catch22Text.style.display="block";
    })
	
	paperGirls.addEventListener('click',function(){
		paperGirlsText.style.display="block";
	})
	
	paperGirls2.addEventListener('click',function(){
		paperGirlsText.style.display="block";
	})
	
	hotel.addEventListener('click',function(){
		hotelText.style.display="block";
	})

    close.addEventListener("click", function(){
      catch22Text.style.display="none";
    })

    close2.addEventListener('click', function(){
      luminariesText.style.display="none";
    })
	
	close3.addEventListener('click', function(){
      hotelText.style.display="none";
    })
	
	close4.addEventListener('click', function(){
      paperGirlsText.style.display="none";
    })

});
