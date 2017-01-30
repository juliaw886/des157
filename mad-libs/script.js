document.addEventListener("DOMContentLoaded", function(event) {

    console.log('reading');

    //capture the submit event
    document.f.onsubmit = process;

    //capture the reset event
    document.f.onreset = reset;

    console.log('checking...');

    function process() {
        //store all user inputs into corresponding variables
        var userHome = document.f.userHome.value;
        var userPlace = document.f.userPlace.value;
        var verb1 = document.f.verb1.value;
        var verb2 = document.f.verb2.value;
        var verb3 = document.f.verb3.value;
        var ball = document.f.ball.value;
        var typePerson = document.f.typePerson.value;
        var familyMember = document.f.familyMember.value;
        var rel1 = document.f.rel1.value;
        var rel2 = document.f.rel2.value;
        var smallTown = document.f.smallTown.value;
        var myMsg = document.getElementById("myMsg");

        //concantonate userHome to title of page after user submits input
        titleMsg.innerHTML = smallTown;

        //Change the titleMsg from displayNone to displayBlock
        titleMsg.style.display = "block";

        //put all inputs in an array
        var myArray = [userHome, userPlace, verb1, verb2, verb3, ball, typePerson, familyMember, rel1, rel2, smallTown];

        //find the length of the array
        arrayLength = myArray.length;
        //loop through the array to check for blanks
        for (var i = 0; i < arrayLength; i++) {
            if (myArray[i] == "") {
                alert("You left some blank!");
            }
        }

        //concantonate a message after user submits input
        myMsg.innerHTML = "In " + userHome + " born and raised, \n on the " + userPlace + " was where I spent most of my days " + verb1 + "n' out " + verb2 + "n' " + verb3 + "n' all cool and all shooting some " + ball + " outside of the school when a couple of  " + typePerson + " who were up to no good started making trouble in my neighborhood I got in one little fight and my " + familyMember + " got scared. She said: You're moving with your " + rel1 + " and " + rel2 + "in " + smallTown;
        //Change the message from displayNone to displayBlock
        myMsg.style.display = "block";
        //prevent the page from reloading
        return false;
    }

    //function clears field when reset is pressed
    function reset() {
        myMsg.style.display = "none";
    }
});
