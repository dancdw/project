/**
 * @author : wei
 * @description : 这个js依赖于jquery
 */

(function($) {
	$.extend({
		draw_line : function(_arry, _colour, line_width) {
			if (_arry.length > 0) {
				$("#out_canvas").prepend("<canvas id=\"canvas_custom_id\"></canvas>");
				var myCanvas = document.getElementById("canvas_custom_id");

				myCanvas.style.position = "absolute";
				myCanvas.style.top = 0;
				myCanvas.style.left = 0;
				var out_canvas = document.getElementById("out_canvas");
				myCanvas.height = 1500;
				myCanvas.width = out_canvas.clientWidth;

				var context = myCanvas.getContext("2d");
				context.strokeStyle = _colour; // "rgba(0,0,0,0.5)"
				context.lineWidth = line_width;

				var ball_size = $(".chart_table_td").height();
				for (i = 0; i < _arry.length - 1; i++) {
					var x = _arry[i+1].position().left;
					var y = _arry[i+1].position().top;
					context.moveTo(_arry[i].position().left+ball_size/2, _arry[i].position().top+ball_size-2);
					context.lineTo(x+ball_size/2, y+2);
					context.stroke();
				}
				
			}
		}
	});
})(jQuery);
