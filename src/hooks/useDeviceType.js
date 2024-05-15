import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(
    typeof window !== "undefined" ? (window.innerWidth <= 600 ? 'mobile' : 'desktop') : undefined
  );

  useEffect(() => {
    // Early return if server-side (Next.js SSR)
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const newDeviceType = window.innerWidth <= 600 ? 'mobile' : 'desktop';
      setDeviceType(newDeviceType);
    };

    window.addEventListener("resize", handleResize);
    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};

export default useDeviceType;
