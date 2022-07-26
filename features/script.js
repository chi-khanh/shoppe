window.addEventListener(
  "message",
  (e) => {
    const { header, footer } = JSON.parse(e.data) || {};

    // set iframe header's height
    const iframeHeader = document.getElementById("iframe-header");
    iframeHeader.style.height = `${header?.style?.height}px`;

    // set iframe footer's height
    const iframeFooter = document.getElementById("iframe-footer");
    iframeFooter.style.height = `${footer?.style?.height}px`;
  },
  false
);
