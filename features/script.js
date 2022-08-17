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
    const { header } = JSON.parse(e.data) || {};

    // mode
    if (header?.mode) {
      if (header.mode === "light") {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
      } else {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
      }
    }

    // nagigate by header
    if (header?.navigate) {
      window.location.href = header.navigate.url;
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
