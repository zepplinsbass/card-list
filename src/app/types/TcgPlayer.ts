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
export type TrimmedTcgPlayerRow = Pick<
  TcgPlayerRow,
  "TCGplayer Id" | "Add to Quantity" | "TCG Marketplace Price"
>;
