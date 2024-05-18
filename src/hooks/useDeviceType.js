import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(
    typeof window !== "undefined" ? (window.innerWidth <= 600 ? 'mobile' : 'desktop') : undefined
  );

  useEffect(() => {
    if (typeof window === "undefined") return; // Early return if server-side

    const handleResize = () => {
      const newDeviceType = window.innerWidth <= 600 ? 'mobile' : 'desktop';
      setDeviceType(newDeviceType);
    };

    handleResize(); // Initialize with the correct value on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};

export default useDeviceType;
