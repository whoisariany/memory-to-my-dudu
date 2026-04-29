export function initReveal(threshold = 0.15) {
  const elements = document.querySelectorAll('.reveal');
  
  if (elements.length === 0) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold, rootMargin: "0px 0px -10% 0px" }
  );

  elements.forEach((el) => io.observe(el));
}