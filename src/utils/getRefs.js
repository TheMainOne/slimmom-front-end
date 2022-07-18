export const getRefs = () => ({
  htmlAndBody: document.querySelectorAll('[data-no-scroll]'),
  root: document.getElementById('root'),
  modalRoot: document.getElementById('modal-root'),
  mobileModalRoot: document.getElementById('mobile-modal-root'),
  mobileMenuRoot: document.getElementById('mobile-menu-root'),
});
