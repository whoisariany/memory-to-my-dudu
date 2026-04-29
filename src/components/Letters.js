const colorMap = {
  terracotta: "hsl(9, 47%, 57%)",
  rose: "hsl(9, 35%, 70%)",
  gold: "hsl(45, 65%, 52%)",
  celeste: "hsl(195, 60%, 70%)",
  verde: "hsl(120, 40%, 65%)",
};

const lettersData = [
  {
    number: "01",
    title: "Carta 1: Ábrela ahora mismo",
    preview: "léeme despacio",
    rotate: "rotate-[-3deg]",
    color: "terracotta",
    body: `Mi Dudu,\n\nSi estás leyendo esto es porque acabas de abrir este pequeño detalle de papel digital que preparé solo para ti, quería regalarte algo que no se terminara en un solo momento, algo que pudiera acompañarte en diferentes momentos de tu vida, incluso cuando no puedo estar ahí físicamente para sostener tu mano\n Me tomé el tiempo de escribir cada una de estas cartas porque a veces siento que no logro expresarte todo lo que significas para mi, quería que tuvieras un pedacito de mi corazón guardado en estos sobres aunque siempre llevas mi corazón contigo porque te pertenece, listo para que lo saques cuando lo necesites\n Pero antes de que la curiosidad te gane, necesito decirte las reglas de este pequeño juego entre los dos. Confío en ti, así que prométeme que las vas a cumplir (por el dedito):\n Regla número uno: Solo puedes abrir un sobre a la vez, y  cuando se cumpla la condición que dice en la parte de afuera asi como los sobres de tu cumpleaños :) \n Regla número dos: Léelas con calma, sin prisa, imaginando que soy yo quien te las está diciendo al oído\n Regla número tres: Guárdalas, así podrás volver a ellas siempre que necesites un abrazo en forma de palabras\n Te amo muchísimo, mi duducito, más de lo que las palabras pueden explicar y expresar`,
    signature: "tu Bubu, siempre"
  },
  {
    number: "02",
    title: "Carta 2: Ábrela cuando me extrañes",
    preview: "una lista incompleta.",
    rotate: "rotate-[2deg]",
    color: "rose",
    body: `Si decidiste abrir este sobre, es porque la distancia o el tiempo sin vernos te están pesando un poquito hoy, y quiero que sepas algo súper importante, mi amor: en el momento exacta que estás leyendo esto, yo también te estoy extrañando con toda mi alma/n Ojalá pudiera teletransportarme, estar junto a ti, abrazarte muy fuerte y darte muchos besos. Pero como la magia todavía no nos permite hacer eso :(, dejé esta carta aquí con la esperanza de que cuando la leas, sientas que estoy un poquito más cerquita de ti\n Extraño hasta nuestras cosas más simples, como salir a comer, como pasar tiempo el uno al otro sin hacer nada\n Quiero que respires, cierres los ojos un segundo y recuerdes la última vez que nos vimos, recuerda lo bien que la pasamos, lo mucho que nos reímos y lo mucho que nos queremos\n Mira las fotitos que te dejé mas abajo, quiero que sonrias, mi amor. Cada minuto que pasa, cada segundo, es un pasito más cerca para volver a vernos, aguanta un poquito más, que pronto estaré ahí para darte todos los besos acumulados que nos faltan`,
    signature: "con todo, Bubu"
  },
  {
    number: "03",
    title: "Carta 3: Ábrela cuando hayas tenido un mal día",
    preview: "entre nosotros dos.",
    rotate: "rotate-[-1deg]",
    color: "gold",
    body: `Si abriste esto es porque algo no se siente bien hoy, el mundo afuera a veces puede ser ruidoso, injusto y agotador, y me duele en el alma saber que estás pasando por un momento pesado. Ojalá pudiera estar ahí ahora mismo para escucharte, para quitarte todo ese estrés del dia y abrazarte hasta que todo lo malo desaparezca :(\n Quiero recordarte algo, mi amor: yo te veo, veo lo mucho que lo intentas, lo mucho que te esfuerzas cada día por alcanzar tus metas, veo lo bueno que eres con todos, todo el esfuerzo que le pones a tu trabajo, tus estudios y todos los problemas\n Pero muchas veces la vida no se trata de no equivocarse o de no tener días donde simplemente quieres tirar la toalla, solo sé tu mismo, mi amor, ya es más que suficiente, eres suficiente hoy, fuiste suficiente ayer y serás suficiente mañana\n Un día dificil no define la increíble persona que eres, eres inteligente, eres fuerte, tienes un corazón inmenso y una capacidad que admire tanto para salir adelante, estoy infinitamente orgullosa del hombre en el que te estás convirtiendo\n Respira, suelta un rato el peso del mundo, estoy aquí, mandandote muchos animos y creyendo en ti siempre\n Hoy fue un mal día, pero no es una mala vida. Necesitas ese descansa, cierra los ojos, y mañana lo intentamos de nuevo, juntos. Siempre juntos`,
    signature: "xoxo"
  },
  {
    number: "04",
    title: "Carta 4: Ábrela cuando quieras saber cuánto te amo",
    preview: "entre nosotros dos.",
    rotate: "rotate-[-1deg]",
    color: "celeste",
    body: `A veces me asusta lo mucho que te amo, es un sentimiento tan grande, tan profundo y tan sincero, que a menudo siento que las palabras no me alcanzan para explicarte la inmensidad de lo que me haces sentir\n Si abriste este sobre es porque hoy necesitas que te recuerde lo importante que eres para mí, llegaste a mi vida para llenarla de luz, de risas y de una tranquilidad que no sabía que necesitaba tanto, justo cuando menos lo esperaba. Eres mi refugio, mi lugar seguro, la persona a la que quiero correr a contarle las buenas noticias y en la que quiero apoyarme cuando las cosas salen mal\n Te amo por las cosas grandes, pero me enamoro de ti todos los días por las cosas pequeñas, me enamora la manera tan dulce en la que me tratas, me enamora la paciencia que me tienes cuando me frustro, y cómo siempre encuentras la forma de hacerme reír con alguna de tus ocurrencias\n Me encanta cómo me haces sentir protegida, cuidada y sobre todo, me encanta cómo me haces sentir libre para ser yo misma, sin filtros ni miedos, eres el mejor compañero de equipo que la vida me pudo haber dado\n Quiero que nunca, bajo ninguna circunstancia, dudes de lo que siento por ti. Te amo con cada parte de mí, con toda mi alma, te amo en tus días buenos y te amo todavía más en tus días malos. Gracias por existir, por ser tú mismo, por cruzarte en mi camino y por decidir quedarte`, 
    signature: "tuya, toda la vida"
  },
  {
    number: "05",
    title: "Carta 5: Las cosas que me encantan de ti",
    preview: "entre nosotros dos.",
    rotate: "rotate-[-1deg]",
    color: "verde",
    body: `Podría escribir libros enteros detallando cada pequeña cosa que me fascina de ti, pero como el espacio en este lugar es limitado, decidí hacerte un pequeño resumen, quiero que guardes esta carta como un recordatorio para esos días en los que se te olvide lo absolutamente increíble y maravilloso que eres\n Me encanta tu sonrisa, es mi vista favorita en todo el planeta. Cuando sonríes, parece que todo a mi alrededor se ilumina, y tienes ese superpoder de hacerme sonreír a mí también, sin importar mi estado de ánimo\n Me encanta tu sentido del humor, amo que compartamos el mismo nivel de tontería, que podamos reírnos de la nada y que siempre, pero siempre, sepas exactamente qué decir para cambiar mi humor\n Me encanta tu forma de abrazarme, tus abrazos son como magia, cuando me rodeas con tus brazos el estrés desaparece, el ruido del mundo se apaga y me siento en el lugar más seguro del universo\n Me encanta tu mente, admiro muchísimo cómo te enfocas en las cosas que quieres, la inteligencia que tienes y las ganas que le pones a todo lo que haces, inspiras a las personas que te rodean, y me inspiras a mí todos los días\n Me encantan tus ojos, podría perderme mirándolos por horas enteras mientras hablamos de cualquier cosa\n Pero sobre todo, me encanta el simple y absoluto hecho de que eres tú. Con tus virtudes, con tus manías, con tus talentos y tus defectos, no cambiaría absolutamente nada de ti, porque encajas a la perfección conmigo. Me encantas completo\n\nVer una sorpresita <a href="https://heyzine.com/flip-book/1373a141fa.html" target="_blank" rel="noopener noreferrer" class="text-terracotta underline hover:no-underline">aquí</a>.`,
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