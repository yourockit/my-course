(() => {
  const targetLink = document.querySelector("[data-link]");
  const link = targetLink.dataset.link;

  targetLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.innerHTML = `loading...`;
    // setTimeout(() => {
    window.location.href = link;
    // }, 2000);
  });
})();
