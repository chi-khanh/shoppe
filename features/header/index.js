const setActiveNav = () => {
  // get activeNav from url
  const urlParams = new URLSearchParams(window.location.search);
  const activeNav = urlParams.get("activeNav");

  // Loop all nodes
  const allNode = document.getElementsByTagName("*");
  for (const curNode of allNode) {
    const navId = curNode.dataset.navId;
    // compare [data-nav-id] with [activeNav]
    if (navId === activeNav) {
      // Add "active" class to display
      curNode.classList.add("active");
      break;
    }
  }
};

const postToParent = (params) =>
  parent.postMessage(JSON.stringify(params), "*");

const onHeaderLoad = () => {
  // load mode from localStorage
  const mode = localStorage.getItem("mode");
  if (!mode) localStorage.setItem("mode", "light");

  postToParent({ header: { mode } });
  updateMode(mode);

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

const onChangeMode = () => {
  const mode = localStorage.getItem("mode");

  updateMode(mode === "light" ? "dark" : "light")
};

const updateMode = (mode) => {
  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");

  if (mode === "light") {
    localStorage.setItem("mode", "light");

    // update light-icon class
    lightIcon.classList.remove("d-none");
    lightIcon.classList.add("d-block");

    // update dark-icon class
    darkIcon.classList.remove("d-block");
    darkIcon.classList.add("d-none");

  } else {
    localStorage.setItem("mode", "dark");

    // update light-icon class
    lightIcon.classList.remove("d-block");
    lightIcon.classList.add("d-none");

    // update dark-icon class
    darkIcon.classList.remove("d-none");
    darkIcon.classList.add("d-block");
  }

  postToParent({ header: { mode } });
} 