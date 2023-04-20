export interface PageProps {
  label: string;
  href: string;
}

// First Array is actual page copies
// Second array is test pages
export const pages = [
  [{ label: "NVIDIA", href: "/css/pages/nvidia" }],
  [
    { label: "Centering", href: "/css/playground/playground" },
    { label: "Custom Switch", href: "/css/playground/switch" },
  ],
];
