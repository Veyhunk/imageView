(function(){
	var ctx = null;

	window.requestAnimFrame = (function(){
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequsestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback){
			window.setTimeout(callback, 1000/60);
		};
	})();

	var star = {
		radius: 0,
		step: 2*Math.PI/60,
		canvas: document.querySelector("canvas"),
		init: function(){
			ctx = this.canvas.getContext("2d");
			this.animate();

		},
		radialGradient: function(){
			if(this.radius>=2*Math.PI){
				this.radius = 0;
			}
			var radGrad=ctx.createRadialGradient((Math.cos(this.radius)*80+250),(Math.sin(this.radius)*80+250),15,250,250,1800);
				radGrad.addColorStop(0.0,"white");
				radGrad.addColorStop(0.05,"yellow");
			this.radius += this.step;
			return radGrad;
		},
		draw: function(){
			ctx.clearRect(0, 0, 500, 500);
			ctx.beginPath();
			ctx.moveTo(76,197);
			ctx.lineTo(421,197);  
			ctx.lineTo(143,399);  
			ctx.lineTo(248,71);  
			ctx.lineTo(356,399);  
			ctx.lineTo(76,197);
			ctx.fillStyle = this.radialGradient();
			ctx.closePath();
			ctx.lineWidth = 6;
			ctx.stroke();
			ctx.fill();
		},
		animate: function(){
			star.play = requestAnimFrame(star.animate);
			star.draw();
		}

	}; 
	
	window.onload = function(){
		star.init();
	}

}());