// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
var problemToolTip = document.getElementById('problemToolTip');
var brandsToolTip = document.getElementById('brandsToolTip');
var problem = document.getElementById('problem');
var brands = document.getElementById('brands');
var tipTimer;

brands.addEventListener('mouseover',function(){
	tipTimer = setTimeout(showBrandsTip, 100);
});

brands.addEventListener ('mouseout', function(){
  clearTimeout(tipTimer);
  brandsToolTip.style.opacity = 0;
});

function showBrandsTip(){
  brandsToolTip.style.opacity = 1;
  brandsToolTip.style.transition = 'all .5s';
};

problem.addEventListener('mouseover',function(){
	tipTimer = setTimeout(showProblemTip, 100);
});

problem.addEventListener ('mouseout', function(){
  clearTimeout(tipTimer);
  problemToolTip.style.opacity = 0;
});

function showProblemTip(){
  problemToolTip.style.opacity = 1;
  problemToolTip.style.transition = 'all .5s';
};
	
})