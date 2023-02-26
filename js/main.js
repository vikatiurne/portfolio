const buttons = document.querySelectorAll('[data-filter]');
for (let button of buttons) {
  button.addEventListener('click', () => {
    let attr = button.getAttribute('data-filter');
      if (attr != 'all') {
          for (let box of document.querySelectorAll('.box')) {
              box.style.display = 'none';
          }
          for (let el of document.querySelectorAll(`.category-${attr}`)) {
              el.style.display = 'block'
          }
      } else {
          for (let box of document.querySelectorAll('.box')) {
              box.style.display = 'block';
          }
      }
  });
}
