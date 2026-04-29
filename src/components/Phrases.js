const PHRASES = [
  { text: "Cada día a tu lado se siente como una página nueva que no quiero dejar de escribir.", tag: "para los días normales" },
  { text: "No fue el momento exacto, fuiste tú haciendo del momento un para siempre.", tag: "el primer pensamiento" },
  { text: "Si me preguntan qué es la calma, voy a señalarte sin pensarlo dos veces.", tag: "mi lugar seguro" },
  { text: "Tú bailando, te quiero tanto. Solo eres lo que crees. Lo que quiero, por ti me muero", tag: "mi refugio" },
  { text: "Eres mi café de la mañana, mi risa boba del mediodía y mi paz toda la vida", tag: "confesión silenciosa" },
  { text: "Hay personas que llegan, otras que se quedan. Tú llegaste para hacerte hogar.", tag: "sin fecha de salida" },
];

export function initPhrases(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let currentIndex = 0;

  const render = () => {
    const phrase = PHRASES[currentIndex];
    
    const dots = PHRASES.map((_, idx) => `
      <span class="h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? "w-8 bg-terracotta" : "w-1.5 bg-rose-deep/40"}"></span>
    `).join('');

    container.innerHTML = `
      <div class="relative max-w-2xl mx-auto text-center">
        <div class="text-[11px] uppercase tracking-[0.3em] text-terracotta mb-3">${phrase.tag}</div>
        
        <div class="animate-fade-up min-h-[140px] flex items-center justify-center">
          <blockquote class="font-display italic text-2xl sm:text-3xl md:text-4xl text-ink leading-[1.3]">
            <span class="text-terracotta text-5xl font-display align-top mr-1 leading-none">“</span>
            ${phrase.text}
            <span class="text-terracotta text-5xl font-display align-bottom leading-none">”</span>
          </blockquote>
        </div>

        <button id="next-phrase-btn" class="mt-8 group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-ink-faded hover:text-terracotta transition-colors">
          otra frase
          <span class="inline-block w-10 h-px bg-current group-hover:w-16 transition-all duration-500"></span>
          <span class="font-script text-xl normal-case tracking-normal text-terracotta">♥</span>
        </button>

        <div class="mt-4 flex justify-center gap-1.5">
          ${dots}
        </div>
      </div>
    `;

    document.getElementById('next-phrase-btn').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % PHRASES.length;
      render(); 
    });
  };

  render();
}