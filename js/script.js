
// 1.Анимация на блок - курсы Нетология

// let netologyCourse = document.querySelector('.netology-course');
// let netologyCourse80 = document.querySelector('.netology-course-80');
// let netologyCourseHtml = document.querySelector('.netology-course-html');
// let netologyCourseJs = document.querySelector('.netology-course-js');
// let netologyCourseJsBr = document.querySelector('.netology-course-js-br');


// netologyCourse.addEventListener('click', function(e) {
// 	// e.currentTarget.style.opacity = 0;
// 	// e.currentTarget.style.display = 'none';
// 	e.currentTarget.style.opacity = 0;

// 	e.currentTarget.style.position = 'absolute';
// 	e.currentTarget.style.visibility = 'hidden';

// 	netologyCourse80.style.position = 'static';
// 	netologyCourseHtml.style.position = 'static';
// 	netologyCourseJs.style.position = 'static';
// 	netologyCourseJsBr.style.position = 'static';

// 	netologyCourse80.style.visibility = 'visible';
// 	netologyCourseHtml.style.visibility = 'visible';
// 	netologyCourseJs.style.visibility = 'visible';
// 	netologyCourseJsBr.style.visibility = 'visible';

// 	netologyCourse80.style.opacity = 1;
// 	netologyCourseHtml.style.opacity = 1;
// 	netologyCourseJs.style.opacity = netologyCourseJsBr.style.opacity = 1;1;
	
// })






// 2. Плавная смена - фото


	// const myPhoto = document.getElementsByClassName('about-me__my-photo')[0];

	// let i = 0;

	// const arrSrc = [
	// 	'images/my-comp.jpg',
	// 	'images/моя фотография.jpg'
	// ]

	// function changePhoto() {
	// 	myPhoto.src = arrSrc[i];
	// 	i++;
	// 	if(i > 1) {
	// 		i = 0;
	// 	}
	// 	myPhoto.style.transition = 'opacity 2s';
	// 	myPhoto.style.opacity = 1;
	// }

	// 	// меняем каждые 1 сек
	// setInterval(function() {
	// 	myPhoto.style.transition = 'opacity 5s';
	// 	myPhoto.style.opacity = 0;
	// }, 5000)

	// // меняем каждые 1 сек
	// setInterval(function() {
	// 	changePhoto();
	// }, 10000)




// 3. Быстрая смена - фото


	// const myPhoto = document.getElementsByClassName('about-me__my-photo')[0];

	// let i = 0;

	// const arrSrc = [
	// 	'images/my-comp.jpg',
	// 	'images/моя фотография.jpg'
	// ]

	// function changePhoto() {
	// 	myPhoto.src = arrSrc[i];
	// 	i++;
	// 	if(i > 1) {
	// 		i = 0;
	// 	}
	// }


	// setInterval(function() {
	// 	changePhoto();
	// }, 7000)


	// 4. Смена фоток по клику по стрелкам

	const myPhoto = document.querySelector('.about-me__my-photo');
	const arrowRight = document.querySelector('.fa-arrow-right');
	const arrowLeft = document.querySelector('.fa-arrow-left');

	let i = 0;

	const arrSrc = [
	'images/моя фотография.jpg',
	'images/my-comp.jpg'
	]

	arrowLeft.addEventListener('click', function() {
		if(i === 0) {
			console.log('return');
			return;
		}
		i--;
		myPhoto.src = arrSrc[i];
		console.log(i);
	});

	arrowRight.addEventListener('click', function() {
		if(i === arrSrc.length - 1) {
			console.log('return');
			return;
		}
		i++;
		myPhoto.src = arrSrc[i];
	});
