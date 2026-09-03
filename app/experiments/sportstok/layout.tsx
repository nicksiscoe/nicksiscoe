import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SportsTok",
  description: "see whats happening in sports",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
