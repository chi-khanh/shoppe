const postToParent = (params) =>
  parent.postMessage(JSON.stringify(params), "*");

const onNavigateToParent = (event) => {
  event.preventDefault();

  postToParent({
    header: {
      navigate: {
        url: `${BASE_URL}/${event?.currentTarget?.getAttribute("href")}`,
      },
    },
  });
};

const closeCart = (event) => {
  const pageMainElement = document.querySelector(".page-main");
  const backArrowElement = document.getElementById("back-arrow");
  if (event.target === pageMainElement || event.target === backArrowElement) {
    postToParent({ header: { cart: { isOpen: false } } });
  }
};
