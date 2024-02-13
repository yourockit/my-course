(() => {
  const targetLink = document.querySelector("[data-link]");
  const link = targetLink.dataset.link;

  targetLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.innerHTML = `<div class="loader">
      <div class="loader-inner">
          <img src="./images/loader-volvo.gif"/>
      </div>
  </div>`;
    setTimeout(() => {
      window.location.href = link;
    }, 2000);
  });
})();
