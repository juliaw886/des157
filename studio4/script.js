// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var numDays = document.getElementById('numDays');

    var numHours = document.getElementById('numHours');

    var numMin = document.getElementById('numMin');

    var today = new Date();

    var summer = new Date(2017,6,20);

    var timeDiff = Math.abs(today.getTime() - summer.getTime());

    var diffDays = Math.ceil(timeDiff/(1000*3600*24));

    console.log(diffDays);

    var diffHours = Math.ceil(timeDiff/(1000*3600));

    var diffMin = Math.ceil(timeDiff/(1000*60));

    var surf1 = document.getElementById('surf1');

    var surf2 = document.getElementById('surf2');

    var surf1Tip= document.getElementById('surf1Tip');

    var elements= document.getElementsByTagName('img');

    var tipID, tipTimer;

    console.log(elements);
    console.log(elements[0].id);

    for (var i=0;i<elements.length;i++){
      elements[i].addEventListener('mouseover', function(event){
        tipId = document.getElementById(this.id+'Tip');
        tipTimer=setTimeout(showTip,500);
      })

      elements[i].addEventListener('mouseout', function(event){
        clearTimeout(tipTimer);
        tipId.style.opacity=0;
      })
    }

    surf1.addEventListener('mouseover', function(){
      surf1.style.webkitTransform='rotate(10deg)';

    })

    surf1.addEventListener('mouseout', function(){
      surf1.style.webkitTransform='rotate(0deg)';
    })

    surf2.addEventListener('mouseover', function(){
      surf2.style.webkitTransform='rotate(-10deg)';
    })

    surf2.addEventListener('mouseout', function(){
      surf2.style.webkitTransform='rotate(0deg)';
    })

    function showTip() {
      tipId.style.display='block';
      tipId.style.transition = 'all 1s';
      tipId.style.opacity=1;
    }


    numDays.innerHTML = diffDays;

    numHours.innerHTML = diffHours;

    numMin.innerHTML = diffMin;

});
