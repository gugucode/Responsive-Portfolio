var starWarGame = {
    name: "Star War Game",
    url: "https://gugucode.github.io/unit-4-game/"
};

var hangman = {
    name: "Hangman",
    url: "https://gugucode.github.io/Word-Guess-Game/"
};

var trivialGame = {
    name: "Trivial Game",
    url: "https://gugucode.github.io/TriviaGame/"
};

var projects = [trivialGame,starWarGame,hangman];

function printProjectsName(){
    for(var i=0; i<projects.length; i++){
        var list = $("<li>")
        list.css("list-style-type","none");
        var link = $("<a>");
        link.attr("value",projects[i].url).text(projects[i].name);
        $("#projects").append(list.append(link));
    }
}

$(document).ready(function(){
    // print all projects' link
    printProjectsName();

    // set iframe src attribute
    $("iframe").attr("src",projects[0].url);

    // when a tag is clicked, reset iframe's src attribute
    $("#projects").on("click","a",function(){
        $("iframe").attr("src",$(this).attr("value"));
    });
})
