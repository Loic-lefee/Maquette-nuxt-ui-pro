<template>
  <div id="map" class="w-full h-[500px] rounded"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.heat' // ← plugin de heatmap

onMounted(() => {
  // Initialisation de la carte
  const map = L.map('map').setView([46.8, 2.2], 6) // centre France

  // Couche OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map)

  // Données pour la heatmap [lat, lng, intensité]
const heatPoints = [
  [48.8566, 2.3522, 1],   // Paris
  [43.2965, 5.3698, 1],   // Marseille
  [45.7640, 4.8357, 1],   // Lyon
  [43.6108, 3.8767, 1],   // Montpellier
  [47.2184, -1.5536, 1],  // Nantes
  [44.8378, -0.5792, 1],  // Bordeaux
  [49.4432, 1.0993, 1],   // Rouen
  [45.1885, 5.7245, 1],   // Grenoble
  [43.7102, 7.2620, 1],   // Nice
  [50.6292, 3.0573, 1],   // Lille
  [48.1173, -1.6778, 1],  // Rennes
  [48.5734, 7.7521, 1],   // Strasbourg
  [49.2583, 4.0317, 1],   // Reims
  [50.9500, 1.8500, 1],   // Calais
  [43.9493, 4.8055, 1],   // Avignon
  [46.5802, 0.3404, 1],   // Poitiers
  [44.9334, 4.8924, 1],   // Valence
  [43.5297, 5.4474, 1],   // Aix-en-Provence
  [43.1242, 5.9280, 1],   // Toulon
  [48.3904, -4.4861, 1],  // Brest
  [45.7722, 3.0819, 1],   // Clermont-Ferrand
  [49.4944, 0.1079, 1],   // Le Havre
  [47.4736, -0.5542, 1],  // Angers
  [43.2080, 0.7200, 1],   // Tarbes
  [43.0958, 0.0470, 1],   // Saint-Gaudens
  [45.7772, 3.0870, 1],   // Issoire
  [47.2488, -1.5597, 1],  // Rezé
  [47.5622, -0.3212, 1],  // Trélazé
  [43.6043, 1.4437, 1],   // Toulouse
  [48.6921, 6.1844, 1],   // Nancy
  [48.7665, 7.3574, 1],   // Haguenau
  [47.3220, 5.0415, 1],   // Dijon
  [44.1060, 4.1009, 1],   // Alès
  [44.1435, 4.8070, 1],   // Orange
  [46.2044, 5.2259, 1],   // Bourg-en-Bresse
  [46.8667, -1.8000, 1],  // La Roche-sur-Yon
  [45.0167, 1.1167, 1],   // Brive-la-Gaillarde
  [44.5630, 6.0793, 1],   // Gap
  [46.1856, 6.2376, 1],   // Annemasse
  [48.4472, 1.4890, 1],   // Chartres
  [43.4733, -1.5615, 1],  // Bayonne
  [48.7744, 2.0223, 1],   // Versailles
  [45.0428, 3.8858, 1],   // Le Puy-en-Velay
  [44.8013, -0.6210, 1],  // Mérignac
  [43.5500, 7.0167, 1],   // Cagnes-sur-Mer
  [47.7508, 7.3376, 1],   // Mulhouse
  [48.0771, 7.3585, 1],   // Colmar
  [44.0131, 1.3554, 1],   // Montauban
  [44.3526, 2.5734, 1],   // Rodez
  [48.0821, -1.6841, 1],  // Cesson-Sévigné
  [43.9265, 2.1480, 1],   // Albi
  [44.8372, -0.5761, 1],  // Pessac
  [47.4802, -0.5631, 1],  // Cholet
  [46.9906, 3.1591, 1],   // Nevers
  [48.7771, 2.0459, 1],   // Saint-Germain-en-Laye
  [49.1812, -0.3708, 1],  // Caen
  [50.3703, 3.0801, 1],   // Valenciennes
  [44.1008, 3.0787, 1],   // Mende
  [46.6716, 4.3650, 1],   // Montceau-les-Mines
  [48.6252, 1.8224, 1],   // Rambouillet
  [45.4338, 4.3903, 1],   // Saint-Étienne
  [43.3022, 5.3802, 1],   // Aubagne
  [45.7833, 3.0833, 1],   // Riom
  [47.3833, 0.6833, 1],   // Tours
  [43.6000, 1.4333, 1],   // Blagnac
  [47.3833, 0.6833, 1],   // Joué-lès-Tours
  [46.5833, 3.3333, 1],   // Moulins
  [45.75, 4.85, 1],       // Villeurbanne
  [44.9300, 4.9000, 1],   // Montélimar
  [44.4000, 4.4000, 1],   // Pierrelatte
  [14.6415, -61.0242, 1], // Martinique
  [16.265, -61.551, 1],   // Guadeloupe
  [12.5657, -61.7186, 1], // Saint-Vincent et Grenadines (proche DOM)
  [5.165, -52.641, 1],    // Cayenne (Guyane)
  [-21.1151, 55.5364, 1], // Saint-Pierre (La Réunion)
  [-20.8789, 55.4481, 1], // Saint-Denis (La Réunion)
  [-12.7794, 45.2279, 1], // Mayotte
  [-20.9333, 55.2833, 1], // Le Tampon (Réunion)
  [-20.9000, 55.5167, 1], // Saint-Paul (Réunion)
  [16.2361, -61.5265, 1], // Basse-Terre (Guadeloupe)
  [15.8667, -61.5833, 1], // Pointe-à-Pitre
  [14.6161, -61.0839, 1], // Fort-de-France (Martinique)
  [3.9014, -53.9715, 1],  // Saint-Laurent-du-Maroni
  [13.4432, -16.5814, 1], // Ziguinchor (simulé proche DOM)
  [17.9, -62.8333, 1],    // Saint-Barthélemy
  [18.0700, -63.0830, 1], // Saint-Martin
  [46.545, 0.5683, 1],    // Chasseneuil-du-Poitou
  [48.6844, 6.1840, 1],   // Vandoeuvre-lès-Nancy
  [48.5439, 7.7496, 1],   // Schiltigheim
  [44.9167, -0.6333, 1],  // Talence
  [45.8333, 1.2500, 1],   // Limoges
  [46.2167, 2.2167, 1],   // Montluçon
  [47.3167, 5.0167, 1],   // Chenôve
  [45.1667, 5.7167, 1],   // Échirolles
  [45.7500, 4.8333, 1],   // Oullins
  [43.9333, 5.0500, 1],   // Carpentras
  [44.9333, 4.9000, 1],   // Valréas
  [47.0833, 2.4000, 1],   // Bourges
  [48.8000, 2.1333, 1]    // Le Chesnay
];


  // Ajout de la heatmap
  L.heatLayer(heatPoints, {
  radius: 25,
  blur: 15,
  maxZoom: 10,
  gradient: {
  0.0: 'transparent',
  0.2: 'yellow',
  0.4: 'orange',
  0.6: 'red',
  0.8: '#800000',
  1.0: '#4b0000'
}
}).addTo(map)
})
</script>

<style scoped>
/* Fixe la taille du conteneur de la carte */
#map {
  height: 700px;
  width: 100%;
}
</style>