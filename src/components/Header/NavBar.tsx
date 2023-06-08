import { MobileNavigation } from "./MobileNavigation";
import { NonMobileNavigation } from "./NonMobileNavigation";

interface DeviceProps {
  currentDevice: string;
}

export function NavBar({ currentDevice }: DeviceProps) {
  return currentDevice == "desktop" ? (
    <NonMobileNavigation />
  ) : (
    <MobileNavigation />
  );
}
