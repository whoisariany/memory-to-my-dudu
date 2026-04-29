const TARGET = new Date("2025-08-21T00:00:00");

function diff(now) {
  const ms = now.getTime() - TARGET.getTime();
  const past = ms >= 0;
  const abs = Math.abs(ms);
  const days = Math.floor(abs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((abs / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((abs / (1000 * 60)) % 60);
  const secs = Math.floor((abs / 1000) % 60);
  return { past, days, hours, mins, secs };
}

export function initDateCounter(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const render = () => {
    const now = new Date();
    const { past, days, hours, mins, secs } = diff(now);

    container.innerHTML = `
      <div class="inline-flex flex-col items-center gap-3">
        <div class="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-ink-faded">
          <span class="h-px w-8 bg-ink-faded/40"></span>
          ${past ? "Juntos desde" : "Faltan"}
          <span class="h-px w-8 bg-ink-faded/40"></span>
        </div>

        <div class="paper-card relative px-7 py-4 rotate-[-1deg] border border-gold/40">
          <div class="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-terracotta/15 border border-terracotta/30"></div>
          <div class="absolute -bottom-2 -right-2 h-4 w-4 rounded-full bg-terracotta/15 border border-terracotta/30"></div>

          <div class="flex items-end gap-4 sm:gap-6 tabular-nums">
            <div class="flex flex-col items-center min-w-[44px]">
              <span class="font-display text-3xl sm:text-4xl text-ink leading-none">${String(days).padStart(2, "0")}</span>
              <span class="mt-1 text-[10px] uppercase tracking-[0.2em] text-ink-faded">días</span>
            </div>
            <span class="font-display text-2xl text-rose-deep pb-4">·</span>
            <div class="flex flex-col items-center min-w-[44px]">
              <span class="font-display text-3xl sm:text-4xl text-ink leading-none">${String(hours).padStart(2, "0")}</span>
              <span class="mt-1 text-[10px] uppercase tracking-[0.2em] text-ink-faded">hrs</span>
            </div>
            <span class="font-display text-2xl text-rose-deep pb-4">·</span>
            <div class="flex flex-col items-center min-w-[44px]">
              <span class="font-display text-3xl sm:text-4xl text-ink leading-none">${String(mins).padStart(2, "0")}</span>
              <span class="mt-1 text-[10px] uppercase tracking-[0.2em] text-ink-faded">min</span>
            </div>
            <span class="font-display text-2xl text-rose-deep pb-4">·</span>
            <div class="flex flex-col items-center min-w-[44px]">
              <span class="font-display text-3xl sm:text-4xl text-ink leading-none">${String(secs).padStart(2, "0")}</span>
              <span class="mt-1 text-[10px] uppercase tracking-[0.2em] text-ink-faded">seg</span>
            </div>
          </div>

          <div class="mt-2 text-center font-script text-lg text-terracotta">
            21 · agosto · 2025
          </div>
        </div>
      </div>
    `;
  };

  render(); 
  setInterval(render, 1000); 
}