
/* Hard coded in 2 arrays to start with */
var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };


/* function for onclick of buttons */
window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
    $("name").focus();
};

/* to add data to the array */
function addScore() {

    /* create vars to hold the name and score from input */
    var name=$('name').value;
    var score=$('score').value;

    /* minor input validation for name and score
     * if name is null or score null, unexpected score or if score is NaN
     * this could/should have a trim function to remove whitespace
     * alert to prompt user input is invalid
     * */
    if(name=="" || score=="" || score < 0 || score > 100 || isNaN(score))alert("You must add a name and a valid score")
    else {
        /* if input passes validation checks store in var */
        name = $("name").value;
        score = $("score").value;
        /* add score and name to array scores and names */
        names.push(name);
        scores.push(score);
    }
    $('name').focus();

    displayResults();
    displayScores();
}//end addscore funtion

/* this function displays the average and highest scores from the array */
function displayResults() {
    //storage vars
    var avg = 0.0, highest = 0;

    //for each to average and collect the highest score
    for (var i = 0; i < scores.length; i++) {
        avg += parseFloat(scores[i]);

        if (parseInt(scores[highest]) <= parseInt(scores[i]))
            highest = i;
    }

    //compute average
    avg = avg / scores.length;

    //display section
    $("results").innerHTML = "<h2> Results" + "</h2>";
    $("results").innerHTML += "<p> Average score = " + avg.toFixed(4); + "</p>";
    $("results").innerHTML += "<p> High Score = " + names[highest] + " with a score of " + scores[highest] + "</p>";

}//end display results function

//displayScore function
function displayScores() {

    var str = "<table>";
    str += "<tr align='left'><th>Name</th><th>Score</th></tr>";

    for (var i = 0; i < scores.length; i++) {
        str += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }

    str += "</table>";

    $("scores_table").innerHTML = "<h2> Scores" + "</h2>";
    $("scores_table").innerHTML += str;

}//end displayScores function



