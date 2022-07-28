window.addEventListener(
  "message",
  (e) => {
    const { header, footer } = JSON.parse(e.data) || {};

    // set iframe header's height
    const iframeHeader = document.getElementById("iframe-header");
    iframeHeader.style.height = `${header?.style?.height}px`;

    if (header?.navigate) {
      window.location.href = header.navigate.url;
    }

    // set iframe footer's height
    const iframeFooter = document.getElementById("iframe-footer");
    iframeFooter.style.height = `${footer?.style?.height}px`;
  },
  false
);

const BASE_URL = "/Users/hophong/Desktop/khanh/shoppe";

const onNavigate = (event) => {
  postToParent({
    header: { navigate: { url: `${BASE_URL}/${event?.currentTarget?.getAttribute("href")}` } },
  });
};
