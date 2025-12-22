import { useEffect } from "react";
import { useRole } from "../contexts/RoleContext";
import DoctorAvailability from "../components/DoctorAvailability";

const DoctorAvailabilityPage = () => {
  const { setCurrentRole } = useRole();

  useEffect(() => {
    setCurrentRole('doctor');
  }, [setCurrentRole]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Doctor Availability</h1>
          <p className="text-muted-foreground mt-1">Manage your weekly schedule and appointment availability</p>
        </div>
      </div>
      
      <DoctorAvailability />
    </div>
  );
};

export default DoctorAvailabilityPage;