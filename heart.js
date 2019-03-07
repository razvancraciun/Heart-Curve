window.onload = () => {
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	ctx.translate(canvas.clientWidth / 2, canvas.clientHeight / 2);
	ctx.strokeStyle = '#FF0000';
	ctx.lineWidth = 2;
	ctx.fillStyle = 'red';

	let i = 0;
	ctx.beginPath();
	let r = 15;
	let y = -r * (13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i));
	ctx.moveTo(0, y);
	var loop = setInterval(() => {
		if (i > 2 * 3.1415) {
			i = 0;
			r -= 1;
			if (r == 0) {
				clearInterval(loop);
			}
		}
		let x = r * 16 * Math.pow(Math.sin(i), 3);
		let y = -r * (13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i));
		ctx.lineTo(x, y);
		ctx.moveTo(x, y);
		i += 0.005;
		ctx.stroke();
	}, 1);
	ctx.fill();
};
