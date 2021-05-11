const Col = ({ children, col, bg, margin, padding }) => (
  <div className={`col-md-${col} ${bg ? `bg-${bg}` : ""} ${margin} ${padding}`}>{children}</div>
);

export default Col;
