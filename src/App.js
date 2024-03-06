import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrRestaurant } from "react-icons/gr";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GrRestaurant></GrRestaurant>
          <Logo to={"/"}>Learn to COOK BRO!</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem
  font-weight:400;
  font-family: "Montserrat", cursive;
  `;

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0rem;
  svg {
    font-size: 1.7rem;
  }
`;
export default App;
