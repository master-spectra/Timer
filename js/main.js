window.addEventListener('DOMContentLoaded', function(e) {
	'use strict';

	// Добавляем переменные 
	let 
		time = 15,
		timeValue = document.querySelector('.timer');

	setTimeout(function test() { // ставим таймер на выполнение 
		if (time > 0) {
			timeValue.textContent = --time; // выводим в timeValue перменную time с изменение в 1 каждую сек
			setTimeout(test, 1000); // делаем рекурсивный timeOut дабы функция выполнялась без задержки  
		};
	}, 1000);
});