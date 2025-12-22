
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-[#FFF7E3] to-[#FFFDF6]">
      {children}
    </div>
  );
};

export default DashboardLayout;