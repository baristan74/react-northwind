import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history =useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")

  }

  function handleSignIn(){
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" /> : <SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
