export type OverrideType = 'color' | 'dimension'; //@TODO: Add more types

export const OverrideNameToTypeMap = {
  'subtitle-text-color': 'color',
  'elevated-container-color': 'color',
  'outlined-container-color': 'color',
  'outlined-outline-color': 'color',
  'title-text-line-height': 'dimension',
  'subtitle-text-line-height': 'dimension',
  'subtitle-text-size': 'dimension',
  'outlined-outline-width': 'dimension',
};

export type OverrideName = keyof typeof OverrideNameToTypeMap;

export type Override = {
  name: string;
  value: string;
};
