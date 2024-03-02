import styled from "styled-components";
import { ITypography } from "./typography";

export const typographySettings = {
  display: {
    fontWeight: 700,
    desktop: {
      fontSize: "3rem",
      line: "52px",
      letterSpacing: "-1.2px",
    },
    mobile: {
      fontSize: "2.5rem",
      line: "44px",
      letterSpacing: "-1.2px",
    },
  },

  headingL: {
    fontWeight: 700,
    desktop: {
      fontSize: "2.5rem",
      line: "44px",
      letterSpacing: "-1px",
    },
    mobile: {
      fontSize: "2rem",
      line: "36px",
      letterSpacing: "-1px",
    },
  },

  headingM: {
    fontWeight: 700,
    desktop: {
      fontSize: "2rem",
      line: "36px",
      letterSpacing: "-0.8px",
    },
    mobile: {
      fontSize: "1.5rem",
      line: "28px",
      letterSpacing: "-0.8px",
    },
  },

  headingS: {
    fontWeight: 700,
    desktop: {
      fontSize: "1.5rem",
      line: "28px",
      letterSpacing: "-0.6px",
    },
    mobile: {
      fontSize: "1.25rem",
      line: "24px",
      letterSpacing: "-0.6px",
    },
  },

  headingXS: {
    fontWeight: 700,
    desktop: {
      fontSize: "1.5rem",
      line: "24px",
      letterSpacing: "0px",
    },
    mobile: {
      fontSize: "1.125rem",
      line: "22px",
      letterSpacing: "0px",
    },
  },

  subheading: {
    fontWeight: 700,
    desktop: {
      fontSize: "1rem",
      line: "20px",
      letterSpacing: "0px",
    },
    mobile: {
      fontSize: "1rem",
      line: "20px",
      letterSpacing: "0px",
    },
  },

  bodyM: {
    fontWeight: 400,
    desktop: {
      fontSize: "1rem",
      line: "24px",
      letterSpacing: "0px",
    },
    mobile: {
      fontSize: "1rem",
      line: "24px",
      letterSpacing: "0px",
    },
  },
};

export const StyledTypography = styled.div<
  Pick<ITypography, "size" | "$centerText" | "$spacingY">
>`
  ${({ size }) => {
    if (size) {
      return `
          @media only screen and (max-width: 600px) {
            font-weight: ${typographySettings[size].fontWeight};
            font-size: ${typographySettings[size].mobile.fontSize};
            line-height: ${typographySettings[size].mobile.line};
            letter-spacing: ${typographySettings[size].mobile.letterSpacing};

            
            > * {
              font-weight: ${typographySettings[size].fontWeight};
              font-size: ${typographySettings[size].desktop.fontSize};
              line-height: ${typographySettings[size].desktop.line};
              letter-spacing: ${typographySettings[size]?.desktop.letterSpacing};
            }
          }

          @media only screen and (min-width: 601px) {
            font-weight: ${typographySettings[size].fontWeight};
            font-size: ${typographySettings[size].desktop.fontSize};
            line-height: ${typographySettings[size].desktop.line};
            letter-spacing: ${typographySettings[size]?.desktop.letterSpacing};

            > * {
              font-weight: ${typographySettings[size].fontWeight};
              font-size: ${typographySettings[size].desktop.fontSize};
              line-height: ${typographySettings[size].desktop.line};
              letter-spacing: ${typographySettings[size]?.desktop.letterSpacing};
            }
          }
        `;
    }
  }}


  ${({ $centerText }) => {
    if ($centerText) {
      return `text-align: center;`;
    }
  }}

  ${({ $spacingY, theme }) => {
    if ($spacingY) {
      return `margin: ${theme.spacing[$spacingY]} 0;`;
    }
  }}
`;
