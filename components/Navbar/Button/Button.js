export default function Button({ className, variant, children }) {
  const addClassName = className ? ` ${className}` : "";
  const variants = {
    white: `bg-white text-primary`,
    yellow: `bg-yellow-500 text-primary`,
  };
  const pickedVariant = variants[variant];
  return (
    <a
      className={`text-lg py-3 px-10 rounded-2.5xl inline-block ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
