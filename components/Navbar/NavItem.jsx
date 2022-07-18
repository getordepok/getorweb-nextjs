import classnames from "classnames";
import Link from "next/link";

export default function NavItem({ href, scheme, children }) {
  const schemes = {
    light: "text-opacity-60 hover:text-opacity-100",
    dark: "text-black",
  };

  const pickedScheme = schemes[scheme];

  return (
    <li>
      <Link
        href={href}
        className={classnames("text-lg transition font-semibold", pickedScheme)}
      >
        {children}
      </Link>
    </li>
  );
}
