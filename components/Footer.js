const Footer = ({transparent, dark, light}) => (
    <footer className={`text-center ${transparent ? "transparent" : dark ? "bg-dark text-light" : light ? "bg-light" : "bg-success"}`}>
        <div className="container py-4">
            <h1>&copy; Janyel Marrero Portfolio</h1>
            <p>2020 - {new Date().getFullYear()}</p>
            <p>All raights Reserved</p>
        </div>
    </footer>
)

export default Footer