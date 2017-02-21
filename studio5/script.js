// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    var title = document.getElementById('title');

    document.getElementById("field1a").onclick = function() {
        checkAnswer()
    };
    document.getElementById("field1b").onclick = function() {
        checkAnswer()
    };
    document.getElementById("field1c").onclick = function() {
        checkAnswer()
    };
    document.getElementById("field1d").onclick = function() {
        checkAnswer()
    };

    document.getElementById("field2a").onclick = function() {
        checkAnswer2()
    };
    document.getElementById("field2b").onclick = function() {
        checkAnswer2()
    };
    document.getElementById("field2c").onclick = function() {
        checkAnswer2()
    };
    document.getElementById("field2d").onclick = function() {
        checkAnswer2()
    };

    document.getElementById("field3a").onclick = function() {
        checkAnswer3()
    };
    document.getElementById("field3b").onclick = function() {
        checkAnswer3()
    };
    document.getElementById("field3c").onclick = function() {
        checkAnswer3()
    };
    document.getElementById("field3d").onclick = function() {
        checkAnswer3()
    };


    title.addEventListener('mouseover', function() {
        title.className = "animated rubberBand";
    })

    function checkAnswer() {
        showAnswer1.className = "displayBlock";
    }

    function checkAnswer2() {
        showAnswer2.className = "displayBlock";
    }

    function checkAnswer3() {
        showAnswer3.className = "displayBlock";
    }

    document.getElementById('field1a').addEventListener('mouseover', function() {
        document.getElementById('field1a').className = "animated tada"
    });
    document.getElementById('field1b').addEventListener('mouseover', function() {
        document.getElementById('field1b').className = "animated tada"
    });
    document.getElementById('field1c').addEventListener('mouseover', function() {
        document.getElementById('field1c').className = "animated tada"
    });
    document.getElementById('field1d').addEventListener('mouseover', function() {
        document.getElementById('field1d').className = "animated tada"
    });

    document.getElementById('field2a').addEventListener('mouseover', function() {
        document.getElementById('field2a').className = "animated tada"
    });
    document.getElementById('field2b').addEventListener('mouseover', function() {
        document.getElementById('field2b').className = "animated tada"
    });
    document.getElementById('field2c').addEventListener('mouseover', function() {
        document.getElementById('field2c').className = "animated tada"
    });
    document.getElementById('field2d').addEventListener('mouseover', function() {
        document.getElementById('field2d').className = "animated tada"
    });

    document.getElementById('field3a').addEventListener('mouseover', function() {
        document.getElementById('field3a').className = "animated tada"
    });
    document.getElementById('field3b').addEventListener('mouseover', function() {
        document.getElementById('field3b').className = "animated tada"
    });
    document.getElementById('field3c').addEventListener('mouseover', function() {
        document.getElementById('field3c').className = "animated tada"
    });
    document.getElementById('field3d').addEventListener('mouseover', function() {
        document.getElementById('field3d').className = "animated tada"
    });

});
