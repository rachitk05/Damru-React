import  { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        const navToggle = document.querySelector(".nav-toggle");
        const navLinks = document.querySelectorAll(".nav__link");

        navToggle.addEventListener("click", () => {
            document.body.classList.toggle("nav-open");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                document.body.classList.remove("nav-open");
            });
        });
    }, []);

    return null; // Navbar logic is incorporated into the Header component
}

export default Navbar;
