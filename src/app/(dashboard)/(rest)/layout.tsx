import { AppHeader } from "@/components/app-elements/app-header";
import { ReactNode } from "react";

const RestLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppHeader />
      <main className="flex-1">{children}</main>
    </>
  );
};

export default RestLayout;
