import styled from "styled-components";
import React from "react";
import { useState } from "react";   // ADDED



const Nav = styled.nav`

  position: fixed;

  top: 12px;
  left: 12px;
  right: 12px;

  min-height: 60px; 

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
@media (max-width: 768px) {
  justify-content: center;
  padding: 12px 16px;
}

`;

const NavItem = styled.div`
    cursor: pointer;
    position: relative;
    padding-bottom: 6px;
    transition: color 0.3s ease;

    color: ${({ $isActive }) =>
        $isActive ? "#22c55e" : "white"};


    &:hover {
        color: #22c55e;
    }


`;

const Menu = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    width: auto;
    align-items: center;
    margin-top: 10px;
  }
`;
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 22px;
position: absolute;

top: 18px;
left: 20px;
transform: none;
position: absolute;
z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;


const Navbar = ({ activeSection, setActiveSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);   // ADDED

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
            <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </Hamburger>

            <Menu $open={menuOpen}>
                <NavItem
                    $isActive={activeSection === "hero"}
                    onClick={() => {
                        scrollToSection("hero");
                        setMenuOpen(false);
                    }}
                >
                    Home
                </NavItem>

                <NavItem
                    $isActive={activeSection === "about"}
                    onClick={() =>{ scrollToSection("about"); setMenuOpen(false);}}
                >
                    About
                </NavItem>

                <NavItem
                    $isActive={activeSection === "skills"}
                    onClick={() => {scrollToSection("skills");setMenuOpen(false);}}
                >
                    Skills
                </NavItem>

                <NavItem
                    $isActive={activeSection === "experience"}
                    onClick={() => {scrollToSection("experience");setMenuOpen(false);}}
                >
                    Experience
                </NavItem>

                <NavItem
                    $isActive={activeSection === "contact"}
                    onClick={() => {scrollToSection("contact");setMenuOpen(false);}}
                >
                    Contact
                </NavItem>
            </Menu>
        </Nav>
    );
}

export default Navbar;