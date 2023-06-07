import { MobileNavigation } from "./MobileNavigation";
import { NonMobileNavigation } from "./NonMobileNavigation";

export function NavBar() {
  return (
    <div>
      <MobileNavigation />
      <NonMobileNavigation />
    </div>
  );
}
