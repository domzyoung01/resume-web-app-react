import styled from "@emotion/styled";

const Header = styled.header({
  backgroundColor: "#101119",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "Rubik, Sans-Serif",
  fontWeight: 500,
  margin: "0, 356px",
});

const Nav = styled.nav({
  display: "flex",
  gap: "20px",
});

const NavLink = styled.a({
  color: "#FCF7FF",
  textDecoration: "none",
  "& hover": {
    textDecoration: "underline",
  },
});

const BrandLink = styled.a({
  color: "#FCF7FF",
  fontSize: "16px",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

export function HeaderComponent() {
  return (
    <Header>
      <BrandLink href="/">Dominic Zen Young</BrandLink>
      <Nav>
        <NavLink href="/resume">Resume</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Nav>
    </Header>
  );
}
