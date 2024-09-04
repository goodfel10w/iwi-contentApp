

export interface News {
  title: string; // Titel der News
  description: string; // Kurzbeschreibung der News
  urlToImage: string; // URL zum Bild
  content: string; // Hauptinhalt der News
  source: {
    id: string | null; // ID der Quelle (kann null sein)
    name: string; // Name der Quelle
  };
  publishedAt: string; // Veröffentlichungsdatum im ISO 8601 Format
  url: string; // URL zur vollständigen News
}
