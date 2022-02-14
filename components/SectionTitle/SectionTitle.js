/* eslint-disable react/no-unescaped-entities */
export default function SectionTitle({ className, children }) {
  const addClassName = className ? ` ${className}` : "";
  return <h2 className={`text-4xl font-body ${addClassName}`}>{children}</h2>;
}
