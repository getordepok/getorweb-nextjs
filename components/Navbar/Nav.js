import classnames from "classnames";
import NavItem from "./NavItem";

export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6",
  };

  const pickedDir = dirs[dir];

  return (
    <ul className={classnames("flex", pickedDir)}>
      <NavItem scheme={scheme} href="#sejarah">
        SEJARAH
      </NavItem>
      <NavItem scheme={scheme} href="#kegiatan">
        KEGIATAN
      </NavItem>
      <NavItem scheme={scheme} href="#lapak">
        OIG
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        LAINNYA
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        WARTA JEMAAT
      </NavItem>
    </ul>
  );
}
