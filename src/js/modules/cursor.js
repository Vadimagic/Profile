import { gsap } from 'gsap';

const cursor = () => {
	let mouseX, mouseY, posX, posY;
	const body = document.querySelector('body')

	body.addEventListener('mousemove', e => {
		mouseCoords(e);
		cursor.classList.remove('hidden');
		aura.classList.remove('hidden');
	})

	body.addEventListener('mouseout', e => {
		cursor.classList.add('hidden');
		aura.classList.add('hidden');
	})

	const cursor = document.getElementById('cursor'),
			aura = document.getElementById('aura'),
			links = document.getElementsByTagName('a');

	links.forEach(link => {
		link.addEventListener('mouseover', () => {
			cursor.classList.add('active');
			aura.classList.add('active');
		})

		link.addEventListener('mouseout', () => {
			cursor.classList.remove('active');
			aura.classList.remove('active');
		})
	})

	//default position
	mouseX = 0, mouseY = 0, posX = 0, posY = 0;

	function mouseCoords(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	}

	gsap.to({}, .01, {
		repeat: -1, // repeat animation
		onRepeat: () => {
			// how much the aura remains
			posX += (mouseX - posX) / 4;
			posY += (mouseY - posY) / 4;

			gsap.set(cursor, {
				css: {
					left: mouseX,
					top: mouseY
				}
			})

			gsap.set(aura, {
				css: {
					left: posX - 24,
					top: posY - 24
				}
			})
		}
	})
}

export default cursor