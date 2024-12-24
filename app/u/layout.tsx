import Nav from "@/components/nav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex md:flex-row flex-col min-h-screen bg-[#FAFAFA] relative">
      <Nav />
      {children}
    </div>
  );
}
