/** Beeldbank uit de Blauwhoed-huisstijl (public/brand). Gekoppeld op track-slug. */
export const brandImages = {
  hero: { src: "/brand/hero.jpg", alt: "Luchtfoto van een groene woonwijk met nieuwbouwtorens aan de horizon" },
  fundament: { src: "/brand/impressie-up.jpg", alt: "Impressie van een groene woontoren aan het water" },
  toepassen: { src: "/brand/project-amsterdam.jpg", alt: "Luchtfoto van een gemengd stedelijk ontwikkelgebied in Amsterdam" },
  workflows: { src: "/brand/werkwijze.jpg", alt: "Gestileerd maquettebeeld van een woonbuurt" },
  multiplier: { src: "/brand/project-artikel.jpg", alt: "Team van collega's in overleg aan een tafel" },
  community: { src: "/brand/community-moestuin.jpg", alt: "Bewoners werken samen in een buurtmoestuin" },
  waterfront: { src: "/brand/project-exterieur.jpg", alt: "Nieuwbouwappartementen aan het water met een historische havenkraan" },
} as const;

export type BrandImageKey = keyof typeof brandImages;
const trackOrder: BrandImageKey[] = ["fundament", "toepassen", "workflows", "multiplier"];

export function trackImage(slug: string, index = 0) {
  return brandImages[(slug in brandImages ? slug : trackOrder[index % trackOrder.length]) as BrandImageKey];
}
