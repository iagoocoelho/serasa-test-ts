import styled from "styled-components";
import { TypographyProps } from "./typography";

const settings = {
  display: {
    fontWeight: "bold",
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
    fontWeight: "bold",
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
    fontWeight: "bold",
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
    fontWeight: "bold",
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
    fontWeight: "bold",
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
    fontWeight: "bold",
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

export const StyledTypography = styled.div<Pick<TypographyProps, "size">>`
  ${({ size }) => {
    if (size) {
      return `
          @media only screen and (max-width: 600px) {
            font-size: ${settings[size].mobile.fontSize};
            line-height: ${settings[size].mobile.line};
            letter-spacing: ${settings[size].mobile.letterSpacing};
          }

          @media only screen and (min-width: 601px) {
            font-size: ${settings[size].desktop.fontSize};
            line-height: ${settings[size].desktop.line};
            // eslint-disable-next-line no-extra-boolean-cast
            letter-spacing: ${settings[size]?.desktop.letterSpacing};
          }
        `;
    }
  }}
`;
