import './style.css';
import { initReveal } from './utils/reveal.js';
import { initFloatingPetals } from './components/FloatingPetals.js';
import { initDateCounter } from './components/DateCounter.js';
import { initLetters } from './components/Letters.js';
import { initTimeline } from './components/Timeline.js';
import { initGallery } from './components/Gallery.js';
import { initPhrases } from './components/Phrases.js';     // <- NUEVO
import { initSurprise } from './components/Surprise.js';   // <- NUEVO

document.addEventListener('DOMContentLoaded', () => {
  initFloatingPetals('petals-container', 12);
  initDateCounter('date-counter-container');
  initLetters();
  initTimeline('timeline-container');
  initGallery('gallery-container');
  initPhrases('phrases-container');  
  initSurprise('surprise-container'); 
  
  initReveal(); 
});