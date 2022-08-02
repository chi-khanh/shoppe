const setActiveNav = () => {
  // get activeNav from url
  const urlParams = new URLSearchParams(window.location.search);
  const activeNav = urlParams.get("activeNav");

  // Loop all nodes
  const allNode = document.getElementsByTagName("*");
  for (const curNode of allNode) {
    const tabId = curNode.dataset.tabId;
    // compare [data-tab-id] with [activeNav]
    if (tabId === activeNav) {
      // Add "active" class to display
      curNode.classList.add("active");
      break;
    }
  }
};

const postToParent = (params) =>
  parent.postMessage(JSON.stringify(params), "*");

const onTabListLoad = () => {
  setActiveNav();
};

const BASE_URL = "/Volumes/ChiKhanh/work/shoppe";

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
