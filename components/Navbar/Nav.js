import classnames from "classnames";
import Button from "../Button";
import NavItem from "./NavItem";

export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-center space-x-5 items-center",
    vertical: "flex-col space-y-6",
  };

  const pickedDir = dirs[dir];

  return (
    <ul className={classnames("flex", pickedDir)}>
      <NavItem scheme={scheme} href="#profile">
        Sejarah
      </NavItem>
      <NavItem scheme={scheme} href="#skills">
        Kegiatan
      </NavItem>
      <NavItem scheme={scheme} href="#projects">
        Lapak Jemaat
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        OIG
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        Lainnya
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        Warta Jemaat
      </NavItem>
      <Button href="#contact" pill variant="outline-yellow">
        HUBUNGI TU
      </Button>
    </ul>
  );
}
