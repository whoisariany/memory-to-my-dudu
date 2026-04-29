const PHOTOS = [
  { src: "/src/assets/couple-1.jpg", caption: "momentos de nuestra historia favorita", rotate: "rotate-[-3deg]" },
  { src: "/src/assets/couple-2.jpg", caption: "salidas inesperadas", rotate: "rotate-[2deg]" },
  { src: "/src/assets/couple-3.jpg", caption: "besos sin fin", rotate: "rotate-[-1.5deg]" },
  { src: "/src/assets/couple-4.jpg", caption: "dias innolvidables", rotate: "rotate-[3deg]" },
];

export function initGallery(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 max-w-6xl mx-auto">`;

  PHOTOS.forEach((photo, index) => {
    const offset = index % 2 === 0 ? "sm:translate-y-6" : "sm:-translate-y-4";

    html += `
      <div class="reveal group ${photo.rotate} ${offset} hover:rotate-0 hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <div class="relative bg-[hsl(0_0%_98%)] shadow-paper hover:shadow-paper-lg transition-shadow duration-700" style="padding: 12px 12px 56px 12px;">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 rotate-[-4deg] z-10"
               style="background: hsl(45 65% 75% / 0.55); border-left: 1px dashed hsl(45 65% 60% / 0.3); border-right: 1px dashed hsl(45 65% 60% / 0.3);">
          </div>
          
          <div class="aspect-square overflow-hidden bg-paper-warm">
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy" width="800" height="800" class="w-full h-full object-cover" style="filter: sepia(0.08) saturate(0.95);" />
          </div>
          
          <p class="absolute bottom-3 left-0 right-0 text-center font-script text-xl text-ink/75">
            ${photo.caption}
          </p>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}