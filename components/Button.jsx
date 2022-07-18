import classnames from "classnames";

export default function Button({ href, className, variant, children, pill }) {
  const variants = {
    "outline-yellow": `border border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-500`,
    yellow: "bg-yellow-500 hover:bg-yellow-600 text-black",
    black: "bg-black hover:bg-opacity-90 text-white",
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href={href}
      className={classnames(
        "transition py-1 px-6 font-semibold text-lg inline-block",
        pill && "rounded-full",
        pickedVariant,
        className
      )}
    >
      {children}
    </a>
  );
}
