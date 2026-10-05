// El jugador empieza con 0 XP. Cada misión da 15 XP. Repite hasta alcanzar o superar 100 XP y muestra la
// experiencia tras cada misión.

// la experiencia esta en 0 y las misiones también.
let exp = 0;
let mision = 0;
do {
    // incrementa las misiones en +1
  mision++;
  // incrementa la exp en +15
  exp += 15;
  alert(`Misión ${mision}: ${exp} XP`);
} while (xp < 100);   