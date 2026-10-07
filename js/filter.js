document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.card');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Активная кнопка
      buttons.forEach(function (b) {
        b.classList.remove('is-active');
      });
      btn.classList.add('is-active');

      var filter = btn.getAttribute('data-filter');

      // Фильтрация карточек
      cards.forEach(function (card) {
        var categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.indexOf(filter) !== -1) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
});
