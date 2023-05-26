'use strict';

const ratingContainer = document.querySelector('.rating-container');
const thankYouContainer = document.querySelector('.thank-container');
const submitBtn = document.querySelector('.submit-btn');
const ratingBtn = document.querySelectorAll('.rating-btn');
const ratedNumber = document.querySelector('.rated-number')

const swapCard = function () {
    ratingContainer.classList.add('hidden');
    thankYouContainer.classList.remove('hidden');
}

submitBtn.addEventListener('click', swapCard);

for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener('click', function () {
        // this for loop removes the exsiting rating-btn-active classes from all rating-btn elements
        for (let j = 0; j < ratingBtn.length; j++) {
            if (ratingBtn[j].classList.contains('rating-btn-active')) {
                ratingBtn[j].classList.remove('rating-btn-active');
            }
        }

        // rating-btn-active only added for clickd btn
        if (!ratingBtn[i].classList.contains('rating-btn-active')) {
            ratingBtn[i].classList.add('rating-btn-active');
            ratedNumber.textContent = Number(ratingBtn[i].textContent);
        }
    })
}

