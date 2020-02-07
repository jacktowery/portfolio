// LAX animations
// Recalculate on window resize
window.addEventListener("resize", function() {
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); 
    const vw = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	lax.updateElements()
});