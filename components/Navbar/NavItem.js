import classnames from "classnames";

export default function NavItem({ href, scheme, children }) {
  const schemes = {
    light: "text-opacity-60 hover:text-opacity-100",
    dark: "text-black",
  };

  const pickedScheme = schemes[scheme];

  return (
    <li>
      <a
        href={href}
        className={classnames(
          "text-lg transition font-semibold p-3 rounded-full focus:outline-none focus:bg-indigo-500 focus:text-white",
          pickedScheme
        )}
      >
        {children}
      </a>
    </li>
  );
}
