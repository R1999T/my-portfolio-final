import styled from "styled-components";
import React from "react";



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

// const NavItem = styled.div`
//     cursor: pointer;
//     position: relative;
//     padding-bottom: 6px;
//     font-family: Arial;
//     transition: color 0.3s ease;

//     &:hover {
//         color: #22c55e;
//     }

//     &::after {
//         content: "";
//         position: absolute;
//         left: 0;
//         bottom: 0;
//         width: 0;
//         height: 2px;
//         background-color: #22c55e;
//         transition: width 0.3s ease;
//     }

//     &:hover::after {
//         width: 100%;
//     }
// `;
const NavItem = styled.div`
    cursor: pointer;
    position: relative;
    padding-bottom: 6px;
    transition: color 0.3s ease;

    color: ${({ $isActive }) =>
        $isActive ? "#22c55e" : "white"};

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;

        width: ${({ $isActive }) =>
            $isActive ? "100%" : "0"};

        height: 2px;
        background-color: #22c55e;
        transition: width 0.3s ease;
    }

    &:hover {
        color: #22c55e;
    }

    &:hover::after {
        width: 100%;
    }
`;



const Navbar = ({ activeSection, setActiveSection }) => {

    const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);

    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
        });
    }
};

    return (
        <Nav>

            <NavItem
                $isActive={activeSection === "hero"}
                onClick={() => scrollToSection("hero")}
            >
                Home
            </NavItem>

            <NavItem
                $isActive={activeSection === "about"}
                onClick={() => scrollToSection("about")}
            >
                About
            </NavItem>

            <NavItem
                $isActive={activeSection === "services"}
                onClick={() => scrollToSection("services")}
            >
                Services
            </NavItem>

            <NavItem
                $isActive={activeSection === "contact"}
                onClick={() => scrollToSection("contact")}
            >
                Contact
            </NavItem>

        </Nav>
    );
}

export default Navbar;