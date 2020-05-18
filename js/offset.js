const shiftWindow = function() { scrollBy(0, -130) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);