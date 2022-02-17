/* eslint-disable react/no-unescaped-entities */
export default function SectionTitle({ className, children }) {
  const addClassName = className ? ` ${className}` : "";
  return <h2 className={`xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-body ${addClassName}`}>{children}</h2>;
}
