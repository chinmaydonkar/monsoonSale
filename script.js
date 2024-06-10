function animateBanner() {
    const banner = document.querySelector('.animated');
    banner.style.opacity = banner.style.opacity === '0' ? '1' : '0';
  }
  
  setInterval(animateBanner, 500);

  const cardContainer = document.querySelector(".card-container");
  const cards = document.querySelectorAll(".card");
  const itemsPerPage = 10;
  let currentPage = 1;

  function showCards(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    cards.forEach((card, index) => {
      if (index >= startIndex && index < endIndex) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function createPagination() {
    const totalPages = Math.ceil(cards.length / itemsPerPage);
    const paginationContainer = document.querySelector(".pagination");

    // Clear previous pagination buttons
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.addEventListener("click", () => {
        currentPage = i;
        showCards(currentPage);
        updatePaginationButtons();
      });
      paginationContainer.appendChild(button);
    }

    updatePaginationButtons();
  }

  function updatePaginationButtons() {
    const paginationButtons = document.querySelectorAll(".pagination button");
    paginationButtons.forEach((button, index) => {
      if (index + 1 === currentPage) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  createPagination();
  showCards(currentPage);
