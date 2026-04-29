const COLORS = [
  "hsl(9, 47%, 57%)",
  "hsl(14, 53%, 82%)",
  "hsl(9, 35%, 70%)",
  "hsl(45, 65%, 70%)",
];

export function initFloatingPetals(containerId, count = 12) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = '';
  for (let i = 0; i < count; i++) {
    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = 14 + Math.random() * 14;
    const drift = -150 + Math.random() * 300;
    const size = 10 + Math.random() * 12;
    const rotate = Math.random() * 360;
    const color = COLORS[i % COLORS.length];

    html += `
      <span
        class="absolute top-0 block"
        style="left: ${left}%; width: ${size}px; height: ${size}px; animation: petal-fall ${duration}s linear ${delay}s infinite; --drift: ${drift}px;"
      >
        <svg viewBox="0 0 20 20" fill="${color}" style="transform: rotate(${rotate}deg)">
          <path d="M10 2 C6 6 2 8 2 12 C2 16 6 18 10 18 C14 18 18 16 18 12 C18 8 14 6 10 2 Z" opacity="0.7" />
        </svg>
      </span>
    `;
  }
  container.innerHTML = html;
}