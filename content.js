const hideDistractingElements = () => {
  const hideSelectors = [
    'ytd-rich-grid-renderer',
    'ytd-rich-section-renderer',
    '#sections',
    '#guide',
    '#comments',
    '#related',
    'ytd-mini-guide-renderer',
    'ytd-reel-shelf-renderer',
    'ytd-reel-item-renderer'
  ];

  hideSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.display = 'none';
    });
  });

  // If on Shorts page
  if (window.location.href.includes('/shorts/')) {
    document.querySelectorAll('ytd-reel-video-renderer').forEach(el => el.remove());
    document.body.innerHTML = '<div style="color:white;font-size:24px;text-align:center;padding-top:50px;">Shorts are blocked for focus ✋</div>';
    document.body.style.backgroundColor = '#000';
    document.body.style.overflow = 'hidden';
  }
};

// MutationObserver to watch DOM changes
const observer = new MutationObserver(hideDistractingElements);
observer.observe(document.body, { childList: true, subtree: true });

// Initial run
hideDistractingElements();

// SPA navigation fix – Listen to YouTube navigation events
window.addEventListener('yt-navigate-finish', () => {
  setTimeout(hideDistractingElements, 500); // Delay to allow content to load
});
