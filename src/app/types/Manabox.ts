export const ManaboxColumns = [
  "Name",
  "Set code",
  "Set name",
  "Collector number",
  "Foil",
  "Rarity",
  "Quantity",
  "ManaBox ID",
  "Scryfall ID",
  "Purchase price",
  "Misprint",
  "Altered",
  "Condition",
  "Language",
  "Purchase price currency",
] as const;
export type ManaboxColumn = (typeof ManaboxColumns)[number];

export interface ManaboxRow {
  Name: string;
  "Set code": string;
  "Set name": string;
  "Collector number": number;
  Foil: "normal" | "foil";
  Rarity: "common" | "uncommon" | "rare" | "mythic" | "land" | "token";
  Quantity: number;
  "ManaBox ID": string;
  "Scryfall ID": string;
  "Purchase price": number;
  Misprint: boolean;
  Altered: boolean;
  Condition: "near_mint";
  Language: "en" | "jp";
  "Purchase price currency": "USD";
}
