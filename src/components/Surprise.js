const COLORS = [
  "hsl(9, 47%, 57%)",
  "hsl(14, 53%, 82%)",
  "hsl(9, 35%, 70%)",
  "hsl(45, 65%, 60%)",
];

export function initSurprise(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let pressed = 0;
  let revealed = false;

  let heartsContainer = document.getElementById('hearts-container');
  if (!heartsContainer) {
    heartsContainer = document.createElement('div');
    heartsContainer.id = 'hearts-container';
    heartsContainer.className = 'pointer-events-none fixed inset-0 z-50';
    document.body.appendChild(heartsContainer);
  }

  const render = () => {
    if (!revealed) {
      container.innerHTML = `
        <div class="relative text-center">
          <p class="font-script text-2xl text-ink-faded mb-6">psst… no presiones este botón</p>
          <button id="surprise-btn" class="group relative inline-flex items-center justify-center px-10 py-5 font-display text-lg text-paper bg-terracotta hover:bg-[hsl(9,47%,52%)] transition-all duration-500 active:scale-95 shadow-paper-lg hover:shadow-[0_30px_60px_hsl(9_47%_50%_/_0.4)]" style="border-radius: 4px;">
            <span class="relative z-10">No presiones esto ♥</span>
            <span class="absolute inset-0 ring-1 ring-paper/30 ring-offset-2 ring-offset-terracotta" style="border-radius: 4px;"></span>
          </button>
          ${pressed > 0 ? `<p class="mt-6 font-script text-xl text-terracotta animate-fade-up">¡oye! te dije que no… (otra vez?)</p>` : ''}
        </div>
      `;

      document.getElementById('surprise-btn').addEventListener('click', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        // Generar 24 corazones
        for (let i = 0; i < 24; i++) {
          const tx = (Math.random() - 0.5) * 600;
          const ty = -150 - Math.random() * 350;
          const size = 14 + Math.random() * 22;
          const color = COLORS[i % COLORS.length];

          const heart = document.createElement('span');
          heart.className = 'absolute';
          heart.style.left = `${cx}px`;
          heart.style.top = `${cy}px`;
          heart.style.width = `${size}px`;
          heart.style.height = `${size}px`;
          heart.style.color = color;
          heart.style.animation = 'heart-burst 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards';
          heart.style.setProperty('--tx', `${tx}px`);
          heart.style.setProperty('--ty', `${ty}px`);
          heart.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 21s-7-4.5-9.5-9C.8 8.5 2.5 4.5 6.5 4.5c2 0 3.5 1.2 4.5 2.5C12 5.7 13.5 4.5 15.5 4.5c4 0 5.7 4 4 7.5C19 16.5 12 21 12 21z" /></svg>`;
          
          heartsContainer.appendChild(heart);
          setTimeout(() => heart.remove(), 1800);
        }

        pressed++;
        if (pressed >= 2) revealed = true;
        render(); 
      });
    } else {
      container.innerHTML = `
        <div class="relative text-center">
          <div class="animate-fade-up max-w-xl mx-auto paper-card px-8 py-12 relative rotate-[-1deg]" style="background: hsl(42 42% 96%);">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold/80 text-ink text-[10px] uppercase tracking-[0.3em] font-body rotate-2">
              secreto descubierto
            </div>
            <p class="font-script text-3xl sm:text-4xl text-terracotta leading-tight mb-4">te amo, mi Dudu.</p>
            <p class="font-display italic text-lg text-ink/80">
              Este es solo un pequeño recordatorio de todo lo que significas para mí <br />
              Quiero que sepas que me doy cuenta de cada pequeño y gran esfuerzo que haces a diario, y mi pecho se llena de orgullo al verte avanzar, <br />
              Me haces tan feliz simplemente por ser tú: con tus virtudes, tus metas y esa forma tan especial que tienes de iluminar mis días <br />
              Elegirte fue lo más fácil del mundo, y volvería a hacerlo cada mañana por el resto de mi vida, porque tú eres mi lugar feliz, mi paz y mi alegría constante. <br />
              Prometo estar aquí para aplaudir tus logros, para sostenerte cuando te canses y para amarte incondicionalmente en cada paso del camino. <br />
              Gracias por ser tú, por compartir tu vida conmigo y por hacerme sentir tan amada cada día. <br />
              Eres mi inspiración, mi refugio, mi persona favorita y el amor de mi vida. <br />
            </p>
            <p class="font-script text-xl text-rose-deep mt-6">— always yours, Bubu</p>
          </div>
        </div>
      `;
    }
  };

  render();
}