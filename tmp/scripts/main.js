(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function () {
	function addToCartHanlder() {
		var $btns = $('[data-add-to-cart]');
		$btns.on('click', function (e) {
			e.preventDefault();
			$.ajax({
				url: './fakedata/cartResponse.json',
				type: 'GET',
				dataType: 'json',
				success: function success(res) {
					if (res.success) {
						$(e.target).text('Добавлено').removeClass('btn-primary').addClass('btn-success');
						var currentCount = res.count + 1;
						$('[data-cart-count]').text(currentCount);
					}
				}
			});
		});
	};

	function main() {
		addToCartHanlder();
	};

	main();
})();

},{}]},{},[1])

//# sourceMappingURL=main.js.map
