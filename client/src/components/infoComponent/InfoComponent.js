import React, { Component } from "react";
import { ListContainer, ListTitle } from "../weaponComponent/WeaponStyles";
import { InfoContainer, InfoParagraph, Link, Link2 } from "./InfoStyles";

class InfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ListContainer>
        <InfoContainer>
          <ListTitle>
            <i class="fas fa-info-circle" /> NYC Crime Complaints 2018 <br />{" "}
            Data Visualization
          </ListTitle>
          <InfoParagraph>
            This application was created to visualize NYPD's Complaint Data from
            2018. The data to create the layers was obtained from the DATA.GOV
            website.
            <br />
            <br />
            <Link
              href="https://catalog.data.gov/dataset?q=new+york+crime&sort=none&organization_type=City+Government&ext_location=&ext_bbox=&ext_prev_extent=-142.03125%2C8.754794702435605%2C-59.0625%2C61.77312286453148"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to check the data source
            </Link>
          </InfoParagraph>
          <InfoParagraph style={{ marginTop: "30px" }}>
            Tech-stack: React, Styled-Components, React-Mapbox-GL
          </InfoParagraph>
          <ListTitle>
            <i class="fas fa-user" /> About me
          </ListTitle>
          <InfoParagraph>Civil Engineer, GIS, Software Dev</InfoParagraph>
          <InfoParagraph>
            Love working with data, maps and software.
          </InfoParagraph>
          <InfoParagraph>
            Here is my{" "}
            <Link2
              href="https://github.com/lfsalazarcruz"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </Link2>
            . Follow me on{" "}
            <Link2
              href="https://twitter.com/LFernando_Sala"
              target="_blank"
              rel="noopener noreferrer"
            >
              TWITTER
            </Link2>
            . Check out my{" "}
            <Link2
              href="https://www.linkedin.com/in/lfernandosalazarc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </Link2>
            .
          </InfoParagraph>
        </InfoContainer>
      </ListContainer>
    );
  }
}

export default InfoComponent;
