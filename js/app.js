'use strict';
function calculateCashback(specialCategoryPurchases, otherCategoryPurchases) {
    const specialCategoryPercent = 0.03;
    const otherCategoryPercent = 0.01;

    const specialCategoryCashback = specialCategoryPurchases * specialCategoryPercent;
    const otherCategoryCashback = otherCategoryPurchases * otherCategoryPercent;
    const totalCashback = specialCategoryCashback + otherCategoryCashback;
    const limit = 15000;
    return {
            specialCategoryCashback,
            otherCategoryCashback,
            totalCashback: totalCashback > limit ? limit : totalCashback,
        };
}
const cashback = calculateCashback(5000, 10000);
console.log(cashback);

function handleClick(evt) {
    evt.preventDefault();

    const specialAmountInputEl = document.getElementById('special-amount-input');
    const specialAmount = specialAmountInputEl.value;
    if (Number.isNaN(specialAmount)) {
      //  TODO: show error
    }
    if (!Number.isFinite(specialAmount)) {
        //  TODO: show error
    }
    const otherAmountInputEl = document.getElementById('other-amount-input');
    const otherAmount = otherAmountInputEl.value;
    if (Number.isNaN(otherAmount)) {
        //  TODO: show error
    }
    if (!Number.isFinite(otherAmount)) {
        //  TODO: show error
    }
    const result = calculateCashback(specialAmount, otherAmount);
    const specialCashbackEl = document.getElementById('special-cashback');
    specialCashbackEl.textContent = `${result.specialCategoryCashback} руб.`;
    const otherCashbackEl = document.getElementById('other-cashback');
    otherCashbackEl.textContent = `${result.otherCategoryCashback} руб.`;
    const totalCashbackEl = document.getElementById('total-cashback');
    totalCashbackEl.textContent = `${result.totalCashback} руб.`;

}
 const formEl = document.getElementById('cashback-form');
 formEl.onclick = handleClick;