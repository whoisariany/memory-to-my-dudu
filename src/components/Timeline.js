const MILESTONES = [
  {
    date: "el día cero",
    title: "Cuando todo empezó",
    caption: "Esa conversación que se alargó hasta la madrugada y nos dejó con ganas de más",
  },
  {
    date: "21 · ago · 2025",
    title: "Nuestro día",
    caption: "El día que decidimos que esto era algo serio. Y que valía cada momento",
  },
  {
    date: "primera cita - 26 · ago · 2025",
    title: "Cena, risas y confesiones",
    caption: "El día que nos dimos cuenta de que esto era algo especial, y que queríamos seguir conociéndonos sin prisa pero sin pausa",
  },
  {
    date: "primera vez - 10 · ene · 2026",
    title: "Conexión más allá de las palabras",
    caption: "Ese dia en el que nos dejamos llevar por la química y la confianza, y descubrimos una nueva dimensión de nuestra relación",
  },
  {
    date: "y los que faltan",
    title: "Lo que viene",
    caption: "Páginas en blanco esperando ser escritas — contigo, sin prisa",
  },
];

export function initTimeline(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = `
    <div class="relative max-w-3xl mx-auto px-4">
      <div class="absolute left-[19px] sm:left-1/2 sm:-translate-x-1/2 top-2 bottom-2 w-px"
           style="background-image: linear-gradient(to bottom, hsl(9 47% 57% / 0.5) 50%, transparent 50%); background-size: 1px 12px;"
           aria-hidden="true"></div>
      <div class="space-y-14 sm:space-y-20">
  `;

  MILESTONES.forEach((m, index) => {
    const isLeft = index % 2 === 0;
    const rotation = index % 3 === 0 ? "rotate-[-1.5deg]" : index % 3 === 1 ? "rotate-[1deg]" : "rotate-[-0.5deg]";

    html += `
      <div class="reveal relative flex items-start gap-6 sm:gap-0 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}">
        <div class="absolute left-[12px] sm:left-1/2 sm:-translate-x-1/2 top-3 z-10">
          <div class="relative h-4 w-4 rounded-full bg-terracotta shadow-paper">
            <div class="absolute inset-0 rounded-full bg-terracotta animate-ping opacity-40"></div>
          </div>
        </div>

        <div class="pl-12 sm:pl-0 ${isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12"} sm:w-1/2">
          <div class="paper-card inline-block px-6 py-5 max-w-sm ${rotation} hover:rotate-0 transition-transform duration-700">
            <div class="font-script text-lg text-terracotta mb-1">${m.date}</div>
            <h3 class="font-display text-2xl text-ink mb-2 leading-tight">${m.title}</h3>
            <p class="text-[15px] text-ink-faded leading-relaxed">${m.caption}</p>
          </div>
        </div>

        <div class="hidden sm:block sm:w-1/2"></div>
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;
}