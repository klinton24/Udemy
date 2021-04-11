//document.querySelector("h1");
$("h1");

//document.querySelectorAll("button");
$("button");

//document.querySelector("h1").classList.add("big-title");
$("h1").addClass("big-title");

//Text Context
$("h1").text("Hello World");

//innerHTML
$("button").html("<em>Click me?</em>");

//find out attribute
console.log($("img").attr("src"));

//add attribute, like href
$("a").attr("href", "https://www.google.com");

//add event listener
$("h1").click(function() {
    $("h1").css("color", "gray");
})

/*
for (var i = 0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "blue";
    });
}
*/

$("button").click(function() {
    $("h1").css("color", "blue");
});

$("input").keydown(function(event) {
    $("h1").text(event.key);
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "red");
})

$("h1").before("<button>Before Button</button>");

$("h1").after("<button>After Button</button>");

$("h1").prepend("<button>Prepend Button</button>");

$("h1").append("<button>Append Button</button>");