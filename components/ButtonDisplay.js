const Button = ({ dark, light }) => {
  const handleClick = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("show");
    sidebar.classList.toggle("col-md-2");
    sidebar.classList.toggle("col-md-12");
    sidebar.classList.toggle("bg-dark");
    sidebar.firstChild.classList.toggle("transparent");
  };

  return (
    <button className={`btn btn-${dark ? "dark" : light ? "light" : "success"} invisible`} onClick={handleClick}>
      <i className="bi bi-list"></i>
    </button>
  );
};

export default Button;
