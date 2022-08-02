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

    // nagigate by header
    if (header?.navigate) {
      window.location.href = header.navigate.url;
    }

    // nagigate by tablist
    if (tablist?.navigate) {
      window.location.href = tablist.navigate.url;
    }
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
