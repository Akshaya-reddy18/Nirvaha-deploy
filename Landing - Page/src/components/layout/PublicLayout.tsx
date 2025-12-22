// layouts/PublicLayout.tsx
import Header from "../../components/Header";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
