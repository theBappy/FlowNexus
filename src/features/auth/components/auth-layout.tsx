import React from "react";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex min-h-svh  flex-col justify-center items-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-semibold"
        >
          <Image src="/logos/logo2.svg" alt="logo" width={30} height={30} />
          FlowNexus
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
