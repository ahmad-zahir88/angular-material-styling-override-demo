export type OverrideType = 'color'; //@TODO: Add more types

export const OverrideNameToTypeMap = {
  'subtitle-text-color': 'color',
  'elevated-container-color': 'color',
  'outlined-container-color': 'color',
  'outlined-outline-color': 'color',
};

export type OverrideName = keyof typeof OverrideNameToTypeMap;

export type Override = {
  name: string;
  value: string;
};
