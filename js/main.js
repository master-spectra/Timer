window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	// Добавляем переменные 
	let	deadline 		= '2020-09-3',
		time 			= Math.round((Date.parse(deadline) - Date.parse(new Date()))),
		allTime			= document.querySelectorAll('.time'),
		dayValue,
		hoursValue,
		minutesValue,	
		secondsValue, 	
		day,
		hours,
		minutes,
		seconds;

// Создаем функцию по рассчету времени
	function calcTime() {
		setTimeout(function test() { // задаем задержку в времени на выполнение действий
			// добавляем значения переменным

			time 						= Math.round((Date.parse(deadline) - Date.parse(new Date()))),
			dayValue					= document.querySelector('.day'),
			hoursValue  				= document.querySelector('.hours'),
			minutesValue 				= document.querySelector('.minutes'),
			secondsValue 				= document.querySelector('.seconds'),
			day 						= Math.round((time / 1000 / 60 / 60 / 24) % 60)
			hours 						= Math.round((time / 1000 / 60 / 60) % 60)
			minutes 					= Math.round((time / 1000 / 60) % 60),
			seconds 					= Math.round((time / 1000) % 60), 
			dayValue.textContent		= day;
			hoursValue.textContent 		= hours;
			minutesValue.textContent 	= minutes;
			secondsValue.textContent 	= seconds;
			
			// Прописоваем условия для удобства воспринимания информации 
			allTime.forEach(function(item) {
				if (item.textContent < 10) {
					item.textContent = '0' + item.textContent;
				}
			});

			setTimeout(test, 1000); // создаем рекурсивный setTimeout
		}, 10);
	};

	calcTime() // вызываем функцию 
});