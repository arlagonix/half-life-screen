// https://bobbyhadz.com/blog/react-open-link-in-new-tab#:~:text=tab%20in%20React-,To%20open%20a%20link%20in%20a%20new%20tab%20in%20React,loaded%20into%20a%20new%20tab.
const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default openInNewTab;
