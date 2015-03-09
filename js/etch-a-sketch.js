var SIZE = 800;

$(document).ready( function(){
	
	console.log("running");
	
	createGrid(16,16);
});

function createGrid(numberOfRows, numberOfCols) {
	if (numberOfRows < 500) { 
		for (var row = 1; row <= numberOfRows; row++) {
			for (var col = 1; col <= numberOfCols; col++) {
				$('#container').append('<div class="square row'+row + ' col'+col+'"> </div>');
			};
		};

		var pixelSize = Math.floor(SIZE / numberOfRows) - 2;

		$(".square").css("width", pixelSize);
		$(".square").css("height", pixelSize);

		$('.square').hover(onHover);	
	}
}

function onButtonClick(input) {
	
	var squares_per_side = prompt("How many squares per side do you want the new grid? (less than 500)");
	console.log("squares_per_side " , squares_per_side);
	
	$(".square").remove();

	createGrid(squares_per_side,squares_per_side);
};

function onHover() {

	var $cell = $(this);

	console.log('hovered' , $cell);
	$(this).addClass('painted');
}

