(function() {
	function addToCartHanlder() {
		$btns = $('[data-add-to-cart]');

		$btns.on('click', function(e){
			e.preventDefault();
			
			$.ajax({
				url: './fakedata/cartResponse.json',
				type: 'GET',
				dataType: 'html',
				success: (res) => {
					if (res.succes) {
						$btns
							.text('Добавлено')
							.removeClass('btn-primary')
							.addClass('btn-success');
							
						$('[data-cart-count]').text(res.count);
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
