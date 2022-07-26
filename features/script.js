var currentHeaderHeight = 0;

// header
const onHeaderLoad = (e) => {
  parent.postMessage(JSON.stringify({ height: document.body.scrollHeight }), "*");

  window.addEventListener("resize", () => {
    if (currentHeaderHeight !== document.body.scrollHeight) {
      currentHeaderHeight = document.body.scrollHeight;
      parent.postMessage(JSON.stringify({ height: document.body.scrollHeight }), "*");
    }
  });
};

// parent
window.addEventListener(
  "message",
  (e) => {
    const { height } = JSON.parse(e.data);

    const iframeHeader = document.getElementById("iframe-header");
    iframeHeader.style.height = `${height}px`;
  },
  false
);
