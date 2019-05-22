import React, { Component } from "react";
import { ListContainer, ListTitle } from "../weaponComponent/WeaponStyles";

class InfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ListContainer>
        <ListTitle>
          <i class="fas fa-wave-square" /> About
        </ListTitle>
      </ListContainer>
    );
  }
}

export default InfoComponent;
