(function() {
	function addToCartHanlder() {
		let $btns = $('[data-add-to-cart]');
		$btns.on('click', function(e){
			e.preventDefault();
			$.ajax({
				url: './fakedata/cartResponse.json',
				type: 'GET',
				dataType: 'json',
				success: (res) => {
					if (res.success) {
						$(e.target)
							.text('Добавлено')
							.removeClass('btn-primary')
							.addClass('btn-success');
						let currentCount = res.count + 1;
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
}());
