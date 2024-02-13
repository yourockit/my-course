(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const menuBodyRef = document.querySelector("[data-menu-body");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    menuBodyRef.classList.toggle("menu-open");
  });
})();

(() => {
  const targetLink = document.querySelector("[data-link]");
  const link = targetLink.dataset.link;

  targetLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.innerHTML = `<div class="loader">
    <div class="loader-inner">
        <img src="/images/loader-volvo.gif"/>
    </div>
</div>`;
    setTimeout(() => {
      window.location.href = link;
    }, 2000);
  });
})();
