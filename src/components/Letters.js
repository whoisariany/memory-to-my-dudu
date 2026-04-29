const colorMap = {
  terracotta: "hsl(9, 47%, 57%)",
  rose: "hsl(9, 35%, 70%)",
  gold: "hsl(45, 65%, 52%)",
};

// Aquí está todo el contenido de tus cartas originales
const lettersData = [
  {
    number: "01",
    title: "Para cuando dudes de ti",
    preview: "léeme despacio.",
    rotate: "rotate-[-3deg]",
    color: "terracotta",
    body: `Mi Dudu,\n\nSi abriste esto es porque algo no se siente bien hoy. Quiero recordarte algo: yo te veo. Veo lo difícil que intentas, lo bueno que eres con todos antes que contigo mismo, lo mucho que cargas en silencio.\n\nNo tienes que ser perfecto. Nunca te pedí eso. Solo te pedí que fueras tú — y eso ya es más que suficiente para mí.\n\nRespira. Estoy aquí. Mañana lo intentamos de nuevo, juntos.`,
    signature: "tu Bubu, siempre"
  },
  {
    number: "02",
    title: "Las cosas que me encantan de ti",
    preview: "una lista incompleta.",
    rotate: "rotate-[2deg]",
    color: "rose",
    body: `Cómo te ríes con todo el cuerpo.\nCómo me explicas las cosas con paciencia, como si fuera la primera vez.\nTu forma de abrazar — esa que me hace olvidar a qué hora era.\nCuando cantas mal y no te importa.\nTu cara concentrada cuando piensas en algo importante.\nCómo dices mi nombre cuando estás contento.\nQue me elegiste. Que me sigues eligiendo.\n\nPodría seguir hasta llenar el cuaderno. Lo haré. Esta es solo la página uno.`,
    signature: "con todo, Bubu"
  },
  {
    number: "03",
    title: "Lo que sueño contigo",
    preview: "entre nosotros dos.",
    rotate: "rotate-[-1deg]",
    color: "gold",
    body: `Sueño con desayunos lentos un domingo cualquiera.\nCon un viaje en el que nos perdamos de verdad y nadie nos extrañe.\nCon una casa con plantas que sobrevivan, una cocina con olor bueno, y risas escapándose por la ventana.\nCon verte mayor, con canas, con esa misma mirada con la que me ves ahora.\n\nNo tengo prisa. Solo quiero llegar ahí — contigo, sin atajos.`,
    signature: "tuya, sin fecha de vencimiento"
  }
];

export function initLetters() {
  const container = document.getElementById('letters-container');
  const modal = document.getElementById('letter-modal');
  const modalContent = document.getElementById('letter-modal-content');

  if (!container || !modal || !modalContent) return;

  // 1. Renderizar los 3 sobres cerrados
  container.innerHTML = lettersData.map((letter, index) => {
    const sealColor = colorMap[letter.color];
    return `
      <button
        data-index="${index}"
        class="letter-btn group relative w-full max-w-[320px] aspect-[4/3] ${letter.rotate} hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
        aria-label="Abrir carta ${letter.number}: ${letter.title}"
      >
        <div class="absolute inset-0 paper-card group-hover:shadow-paper-lg transition-shadow duration-700 overflow-hidden"
             style="background: linear-gradient(135deg, hsl(38 40% 92%) 0%, hsl(42 36% 94%) 100%)">
          <div class="absolute inset-x-0 top-0 h-1/2"
               style="clip-path: polygon(0 0, 100% 0, 50% 100%); background: linear-gradient(180deg, hsl(38 35% 88%) 0%, hsl(38 30% 84%) 100%); border-bottom: 1px solid hsl(14 30% 70% / 0.4)"></div>
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div class="relative h-14 w-14 rounded-full flex items-center justify-center shadow-paper"
                 style="background: radial-gradient(circle at 30% 30%, ${sealColor}, hsl(9 50% 35%))">
              <span class="text-xl">♥</span>
              <span class="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10"></span>
            </div>
          </div>
          <div class="absolute bottom-4 left-0 right-0 text-center font-script text-sm text-ink/60">
            Para mi Dudu · N°${letter.number}
          </div>
        </div>
        <div class="absolute inset-x-0 -bottom-7 text-center text-[11px] uppercase tracking-[0.2em] text-ink-faded opacity-0 group-hover:opacity-100 transition-opacity">
          Toca para abrir
        </div>
      </button>
    `;
  }).join('');

  // 2. Lógica para abrir el Modal (la carta)
  const openModal = (index) => {
    const letter = lettersData[index];
    const sealColor = colorMap[letter.color];

    modalContent.innerHTML = `
      <div class="absolute -top-3 -right-3 h-16 w-16 rounded-full flex items-center justify-center text-[10px] uppercase tracking-widest font-display text-paper rotate-12"
           style="background: ${sealColor}; box-shadow: 0 4px 12px hsl(12 16% 20% / 0.25)">
        <span class="text-center leading-tight">Bubu<br/>&amp; Dudu</span>
      </div>

      <button id="close-modal-btn" class="absolute top-3 left-3 text-ink-faded hover:text-terracotta transition-colors text-sm" aria-label="Cerrar carta">
        ✕ cerrar
      </button>

      <div class="px-8 py-12 sm:px-14 sm:py-16">
        <div class="text-[11px] uppercase tracking-[0.3em] text-terracotta mb-2">Carta N° ${letter.number}</div>
        <h3 class="font-display text-3xl sm:text-4xl text-ink mb-1">${letter.title}</h3>
        <p class="font-script text-xl text-rose-deep mb-6">${letter.preview}</p>
        <div class="font-body text-ink/85 leading-[1.9] text-[17px] whitespace-pre-line">${letter.body}</div>
        <div class="mt-10 text-right">
          <p class="font-script text-2xl text-terracotta">— ${letter.signature}</p>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    // Forzar un reflow para que la animación funcione al reabrir
    void modalContent.offsetWidth; 
    modalContent.classList.add('animate-letter-rise');

    // Cerrar al clickear el botón "cerrar"
    document.getElementById('close-modal-btn').addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  };

  // Cerrar al clickear fuera de la carta (en el fondo oscuro)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Asignar los clicks a los 3 sobres
  document.querySelectorAll('.letter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(btn.getAttribute('data-index'));
    });
  });
}