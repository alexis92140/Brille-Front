export interface INavlink {
  id: number;
  path: string;
  leftTitle?: string;
  rightTitle?: string;
  responsiveTitle?: string;
  dropdown: boolean;
}
