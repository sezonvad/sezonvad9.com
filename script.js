// Функции для открытия и закрытия модальных окон
function openModal(id) {
    document.getElementById(id).style.display = "block";
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  
  // Закрытие модального окна при клике вне области окна
  window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
      if (event.target === modals[i]) {
        modals[i].style.display = "none";
      }
    }
  }
  
  function hideIntro() {
    const intro = document.getElementById("intro-screen");
    intro.style.animation = "fadeOut 1s ease forwards";
  
    // Удаляем элемент после анимации
    setTimeout(() => {
      intro.remove();
    }, 1000);
  }
  