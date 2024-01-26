
    // Находим все товары
    const products = document.querySelectorAll('.item__product');

    // Находим модальную форму и кнопку для закрытия модального окна
    const modal = document.getElementById('myModal');
    const closeBtn = modal.querySelector('.close');

    // Обработчик клика на кнопке "Подробнее" для каждого товара
    products.forEach(product => {
        const viewDetailsBtn = product.querySelector('.product_btn');
        viewDetailsBtn.addEventListener('click', () => {
            // Получаем данные о товаре
        //  const productId = product.getAttribute('data-product-id');
            const productTitle = product.querySelector('h4').innerText;

            // Передаем данные в модальную форму
            const modalProductDetails = modal.querySelector('#modal-product-details');
            modalProductDetails.innerHTML = `
            <form action="#" id="form" class="form__contact">
            <h4>To order</h4>
            <div class="input__croup">
                <input type="hidden" class="input_date" name="productTitle" value="${productTitle}">
                <input type="text" class="input_date" name="name" placeholder="Name">
                <input type="text" class="input_date" name="lastName" placeholder="Second Name">
            </div>
            <input type="tel" id="phone_mask" class="input_date" name="phone" placeholder="Phone">
            <input type="email" class="input_date" name="email" placeholder="Email">
            <textarea class="input_date" name="message" cols="30" rows="7" placeholder="Type something"></textarea>
            
            <div class="bottom__action">
                <div class="policy__check">
                    <input type="checkbox" id="policy" name="interest" value="policy">
                    <label for="policy">I confirm the processing of my <a href="#" target="_blank">personal data</a></label>
                </div>
                <button type="submit" class="contact__btn">Send</button>
            </div>
        </form>
        `;

    });
});







