// variables
const BASE_URL = "/Volumes/ChiKhanh/work/shoppe";
const account = {
  dashboard: `/${BASE_URL}/pages/account/dashboard/index.html`,
};

// compute href for tab-list
const mapLinkHref = () => {
  const links = document.querySelectorAll('[rule="link"]');

  for (const link of links) {
    const href = link.getAttribute("href");
    console.log(link, href);
    link.setAttribute("href", `${BASE_URL}/${href}`);
  }
};

const onLoad = () => {
  mapLinkHref();
};

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

const onNavigate = (event) => {
  postToParent({
    header: {
      navigate: {
        url: `${BASE_URL}/${event?.currentTarget?.getAttribute("href")}`,
      },
    },
  });
};
