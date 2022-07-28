const postToParent = (params) =>
  parent.postMessage(JSON.stringify(params), "*");

const onFooterLoad = () => {
  postToParent({ footer: { style: { height: document.body.scrollHeight } } });

  window.addEventListener("resize", () =>
    postToParent({ footer: { style: { height: document.body.scrollHeight } } })
  );
};

const onClickSubmitMail = () => {
  const input = document.querySelector(".footer-mail-newsletter-input");
  alert(input.value);
};
