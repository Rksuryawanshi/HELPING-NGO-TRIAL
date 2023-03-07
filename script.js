const modal = document.querySelector(".modal1");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnCloseModal2 = document.querySelector("button.close");
const btnsOpenModal = document.querySelector(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
btnCloseModal2.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
