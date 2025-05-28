import { Link } from "react-router-dom"

export default function FooterComp() { 
    return (
        <footer className="bg-dark text-secondary d-flex flex-row flex-wrap justify-content-center align-items-center p-5">
            <div>
                <section className="d-flex flex-row align-items-center justify-content-center">
                    <Link to="https://www.instagram.com/dataprop.cl/" target="_blank"><i className="bi bi-instagram text-white"></i></Link>
                </section>
                <section>
                    <span className="me-1 text-white">Un evento organizado para llevar al corredor chileno al futuro</span>
                    <span>© 2025</span>
                </section>
            </div>
        </footer>
    )
}