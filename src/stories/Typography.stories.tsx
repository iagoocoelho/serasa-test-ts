import type { Meta, StoryObj } from "@storybook/react";
import Typography from "../components/typography/typography";

const meta = {
  title: "Design System/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Clique em "show code" para avaliar e/ou copiar o componente */
export const Demonstration: Story = {
  args: {
    size: "display",
    children: "Lorem Ipsun",
    $centerText: false,
  },
  argTypes: {
    size: {
      description: "Escolha os possíveis tamanhos tipográficos",
      options: [
        "display",
        "headingL",
        "headingM",
        "headingS",
        "headingXS",
        "subheading",
        "bodyM",
      ],
      control: { type: "radio" },
    },
    children: {
      description: "Aceita qualquer tag html e/ou componente react",
    },
    $centerText: {
      description: "Opcional: Centraliza o texto em sua tag parente.",
    },
    $spacingY: {
      description: "Opcional: Espaçamento somente na altura",
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};
