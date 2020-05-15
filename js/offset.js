const shiftWindow = function() { scrollBy(0, -80) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);