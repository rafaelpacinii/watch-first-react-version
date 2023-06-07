import { NavLinks } from "./NavLinks";
import { CommonNavStyles, NonMobileNav } from "./styles";

export function NonMobileNavigation() {
  return (
    <CommonNavStyles>
      <NonMobileNav className="non-mobile-navbar">
        <NavLinks />
      </NonMobileNav>
    </CommonNavStyles>
  );
}
