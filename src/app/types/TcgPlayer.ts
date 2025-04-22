export const TcgPlayerColumns = [
  "TCGplayer Id",
  "Product Line",
  "Set Name",
  "Product Name",
  "Title",
  "Number",
  "Rarity",
  "Condition",
  "TCG Market Price",
  "TCG Direct Low",
  "TCG Low Price With Shipping",
  "TCG Low Price",
  "Total Quantity",
  "Add to Quantity",
  "TCG Marketplace Price",
  "Photo URL",
] as const;
export type TcgPlayerColumn = (typeof TcgPlayerColumns)[number];

export interface TcgPlayerRow {
  "TCGplayer Id": string;
  "Product Line": string;
  "Set Name": string;
  "Product Name": string;
  Title: string;
  Number: number;
  Rarity: "C" | "L" | "M" | "R" | "T" | "U";
  Condition: "Near Mint";
  "TCG Market Price": number;
  "TCG Direct Low": number;
  "TCG Low Price With Shipping": number;
  "TCG Low Price": number;
  "Total Quantity": number;
  "Add to Quantity": number;
  "TCG Marketplace Price": number;
  "Photo URL": string;
}

export const ExternalTcgPlayerColumns = [
  "Product ID",
  "Quantity",
  "Set",
  "Set Code",
  "Name",
  "Printing",
  "Condition",
  "Language",
] as const;
export type ExternalTcgPlayerColumn = (typeof ExternalTcgPlayerColumns)[number];
export interface ExternalTcgPlayerRow {
  "Product ID": string;
  Quantity: number;
  Set: string;
  "Set Code": string;
  Name: string;
  Printing: "Foil" | "Normal";
  Condition: "Near Mint";
  Language: "English" | "Japanese";
}
