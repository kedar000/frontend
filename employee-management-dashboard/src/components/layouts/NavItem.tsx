import { NavLink } from "react-router-dom";

type NavItemProps = {
  to: string;
  children: React.ReactNode;
};
function NavItem({ to, children }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={to === "/dashboard"}
      className={({ isActive }) =>
        `list-group-item list-group-item-action border-0 py-3 ${
          isActive
            ? "active bg-primary text-white fw-bold"
            : "bg-dark text-white"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
