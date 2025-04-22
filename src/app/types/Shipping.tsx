export const ShippingInfoColumns = [
  'FirstName',
  'LastName',
  'Address1',
  'Address2',
  'City',
  'State',
  'PostalCode',
  'Country',
] as const
export type ShippingInfoColumn = typeof ShippingInfoColumns[number]

export type ShippingInfoRow = Record<ShippingInfoColumn, string>
