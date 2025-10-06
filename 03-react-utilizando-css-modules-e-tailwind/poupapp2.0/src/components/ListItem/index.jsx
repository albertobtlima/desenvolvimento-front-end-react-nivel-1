export const ListItem = ({ children, className, ...props }) => {
  return (
    <li
      {...props}
      className={`border-b border-neutral-header pb-4 mb-4 last:border-none last:pb-0 last:mb-0 ${
        className || ""
      }`}
    >
      {children}
    </li>
  );
};
