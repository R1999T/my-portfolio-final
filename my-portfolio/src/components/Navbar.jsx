import styled from "styled-components";

const Nav = styled.nav`

  position: fixed;

  top: 12px;
  left: 12px;
  right: 12px;

  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 40px;

  /* Glass effect */

  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 14px;

  border: 1px solid rgba(255,255,255,0.2);

  box-shadow:
    0 8px 24px rgba(0,0,0,0.3);

  z-index: 1000;

`;

const NavItem = styled.button`

  background: transparent;
  border: none;

  color: white;

  font-size: 16px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    color: #22c55e;
  }

`;

const scrollToSection = (id) => {
    const section = document.getElementById(id);

    section.scrollIntoView({
        behavior: "smooth",
        inline: "start"
    });
};

function Navbar() {
    return (
        <Nav>

            <NavItem onClick={() => scrollToSection("hero")}>
                Home
            </NavItem>

            <NavItem onClick={() => scrollToSection("about")}>
                About
            </NavItem>

            <NavItem onClick={() => scrollToSection("services")}>
                Services
            </NavItem>

            <NavItem onClick={() => scrollToSection("contact")}>
                Contact
            </NavItem>

        </Nav>
    );
}

export default Navbar;