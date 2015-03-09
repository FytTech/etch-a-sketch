var SIZE = 800;
var starting_color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
var $checkbox = $('input[name=border]');
var $dropdown = $('#mode');

$(document).ready( function(){
	
	createGrid(16,16);
});

function createGrid(numberOfRows, numberOfCols) {
	if (numberOfRows < 250) { 
		
		for (var row = 1; row <= numberOfRows; row++) {
			for (var col = 1; col <= numberOfCols; col++) {
				$('#container').append('<div class="square row'+row + ' col'+col+'"> </div>');
			};
		};

		var pixelSize = Math.floor(SIZE / numberOfRows) - 2;

		$(".square").css("width", pixelSize);
		$(".square").css("height", pixelSize);	
		
		if ( $checkbox.is(':checked') ) {
			$(".square").css('border', '1px dotted black');
		}
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
	var mode = $dropdown.val();
	
	switch(mode) {
		case 'regular': 
			$cell.css('background-color', starting_color);
			break;
		case 'random': 
			$cell.css('background-color', '#' + (Math.random() * 0xFFFFFF << 0).toString(16));
			break;
		case 'darken': 
			$cell.css('background-color', shadeRGBColor($cell.css('background-color'), -0.1));
			break;	
		case 'lighten': 
			$cell.css('background-color', shadeRGBColor($cell.css('background-color'), 0.1));
			break;		
	}
}

function borderCheck() {
	if ( $checkbox.is(':checked') ) {
		$(".square").css('border', '1px dotted black');
	} else {
		$(".square").css('border', 'none');
	}
};

$checkbox.change(borderCheck);

// function from http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeRGBColor(color, percent) {
    var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
    return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
}

