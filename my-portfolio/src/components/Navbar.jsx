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

  background: rgba(248, 248, 246, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-radius: 14px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);

  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);

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
  color: ${({ $isActive }) => ($isActive ? "#1a1a1a" : "#888")};
  font-weight: ${({ $isActive }) => ($isActive ? "500" : "400")};

  &:hover {
    color: #1a1a1a;
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
font-size: 26px;
transition: 0.2s ease;
user-select: none;
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
                {menuOpen ? "✕" : "☰"}
            </Hamburger>

            <Menu $open={menuOpen}>


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