export default function Button({ className, variant, children }) {
  const addClassName = className ? ` ${className}` : '';
  const variants = {
    white: 'bg-white text-primary',
    yellow: 'bg-yellow-500',
  };
  const pickedVariant = variants[variant];
  return (
    <a
      href="replace"
      className={`xl:text-lg xl:py-3 xl:px-10 lg:text-lg lg:py-3 lg:px-8 md:px-6 md:text-md md:py-2.5 sm:px-6 sm:text-sm sm:py-2.5 rounded-2.5xl inline-block ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
