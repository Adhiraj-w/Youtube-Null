document.addEventListener("DOMContentLoaded", () => {
    const reloadBtn = document.getElementById("reload");
  
    if (reloadBtn) {
      reloadBtn.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs.length > 0) {
            chrome.tabs.reload(tabs[0].id);
          }
        });
      });
    }
  });
  