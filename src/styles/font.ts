export const fontFamily = 'Pretendard'

const fontStyle = (size: number, weight: number) => 
  `
  font-size: ${size}px;
  font-weight: ${weight};
`;

export const font = {
  Heading1: fontStyle(64, 700),
  Heading2: fontStyle(48, 700),
  Heading3: fontStyle(32, 700),
  Heading4: fontStyle(24, 700),
  Heading5: fontStyle(20, 700),
  Heading6: fontStyle(18, 700),
  SubTitle1: fontStyle(16, 600),
  SubTitle2: fontStyle(14, 600),
  Body1: fontStyle(16, 500),
  Body2: fontStyle(14, 500),
  ButtonLarge: fontStyle(15, 600),
  ButtonMedium: fontStyle(14, 600),
  ButtonSmall: fontStyle(13, 600),
  Caption: fontStyle(12, 500),
  Label: fontStyle(12, 700),
} as const

export const typoGraphy = {
  weight: {
    light: 400,
    regular: 500,
    medium: 600,
    bold: 700,
  },
  size: {
    s1: 12,
    s2: 13,
    s3: 14,
    s4: 15,
    m1: 16,
    m2: 18,
    m3: 20,
    m4: 24,
    l1: 28,
    l2: 32,
    l3: 48,
    l4: 64,
  },
} as const

export type fontKeyOfType = keyof typeof font;