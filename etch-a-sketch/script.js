function createGrid(x) {
	for (var row = 0; row < x; row++){
		for (var column = 0; column < x; column++){
			$("#box").append("<div class='grid'></div>");
		};
	};
	$(".grid").width(960/x);
	$(".grid").height(960/x);
};

function clearGrid() {
	$(".grid").remove();
};

function newGrid() {
	clearGrid();
	var addSquares = prompt("Please enter a number between 1 and 64 for a new grid.");
	if (addSquares % 1 === 0) {
		if (addSquares > 0 && addSquares < 65) {
			createGrid(addSquares);
		} else {
			newGrid();
		};
	} else {
		alert("Please only use whole numbers.")
		newGrid();
	};
};

$(document).ready(function() {
	createGrid(16);
	$(".grid").hover(function(){
		$(this).css("background", "black");
	});
	$("button").click(function(){
		newGrid();
		$(".grid").hover(function(){
			$(this).css("background", "black");
		});
	});
});