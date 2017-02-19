// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
var title=document.getElementById('title');
var answer;
var correctBox=document.getElementById('correct');
var wrongBox=document.getElementById('wrong');
var nextButton=document.getElementById('nextButton');

document.getElementById("field1a").onclick = function() {checkAnswer()};
document.getElementById("field1b").onclick = function() {checkAnswer()};
document.getElementById("field1c").onclick = function() {checkAnswer()};
document.getElementById("field1d").onclick = function() {checkAnswer()};

document.getElementById("field2a").onclick = function() {checkAnswer2()};
document.getElementById("field2b").onclick = function() {checkAnswer2()};
document.getElementById("field2c").onclick = function() {checkAnswer2()};
document.getElementById("field2d").onclick = function() {checkAnswer2()};

document.getElementById("field3a").onclick = function() {checkAnswer3()};
document.getElementById("field3b").onclick = function() {checkAnswer3()};
document.getElementById("field3c").onclick = function() {checkAnswer3()};
document.getElementById("field3d").onclick = function() {checkAnswer3()};


title.addEventListener('mouseover',function(){
	title.className="animated rubberBand";
})

function checkAnswer(){
	showAnswer.className="displayBlock";
}

function checkAnswer2(){
	showAnswer2.className="displayBlock";
}

function checkAnswer3(){
	showAnswer3.className="displayBlock";
}

function correctAns(){
	correctBox.className="displayBlock animated bounceInLeft";
}

function wrongAns(){
	wrongBox.className="displayBlock animated bounceInLeft";
}
});
