import React, { Component } from "react";
import {
  ListContainer,
  ListTitle,
  MonthsContainer,
  MonthButton
} from "./WeaponStyles";

class WeaponComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      janData: props.janData,
      febData: props.febData,
      marData: props.marData,
      aprData: props.aprData,
      mayData: props.mayData,
      junData: props.junData,
      julData: props.julData,
      augData: props.augData,
      sepData: props.sepData,
      octData: props.octData,
      novData: props.novData,
      decData: props.decData
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.janData !== nextProps.janData) {
      this.setState({
        janData: nextProps.janData
      });
    }
    if (this.props.febData !== nextProps.febData) {
      this.setState({
        febData: nextProps.febData
      });
    }
    if (this.props.marData !== nextProps.marData) {
      this.setState({
        marData: nextProps.marData
      });
    }
    if (this.props.aprData !== nextProps.aprData) {
      this.setState({
        aprData: nextProps.aprData
      });
    }
    if (this.props.mayData !== nextProps.mayData) {
      this.setState({
        mayData: nextProps.mayData
      });
    }
    if (this.props.junData !== nextProps.junData) {
      this.setState({
        junData: nextProps.junData
      });
    }
    if (this.props.julData !== nextProps.julData) {
      this.setState({
        julData: nextProps.julData
      });
    }
    if (this.props.augData !== nextProps.augData) {
      this.setState({
        augData: nextProps.augData
      });
    }
    if (this.props.sepData !== nextProps.sepData) {
      this.setState({
        sepData: nextProps.sepData
      });
    }
    if (this.props.octData !== nextProps.octData) {
      this.setState({
        octData: nextProps.octData
      });
    }
    if (this.props.novData !== nextProps.novData) {
      this.setState({
        novData: nextProps.novData
      });
    }
    if (this.props.decData !== nextProps.decData) {
      this.setState({
        decData: nextProps.decData
      });
    }
  }

  updateParent(data, month) {
    this.props.updateParent(data, month);
  }

  displayData = event => {
    let month = event.target.value;
    console.log("month selected", month);

    switch (month) {
      case "1":
        let janData = !this.state.janData;
        this.updateParent(janData, month);
        break;
      case "2":
        let febData = !this.state.febData;
        this.updateParent(febData, month);
        break;
      case "3":
        let marData = !this.state.marData;
        this.updateParent(marData, month);
        break;
      case "4":
        let aprData = !this.state.aprData;
        this.updateParent(aprData, month);
        break;
      case "5":
        let mayData = !this.state.mayData;
        this.updateParent(mayData, month);
        break;
      case "6":
        let junData = !this.state.junData;
        this.updateParent(junData, month);
        break;
      case "7":
        let julData = !this.state.julData;
        this.updateParent(julData, month);
        break;
      case "8":
        let augData = !this.state.augData;
        this.updateParent(augData, month);
        break;
      case "9":
        let sepData = !this.state.sepData;
        this.updateParent(sepData, month);
        break;
      case "10":
        let octData = !this.state.octData;
        this.updateParent(octData, month);
        break;
      case "11":
        let novData = !this.state.novData;
        this.updateParent(novData, month);
        break;
      case "12":
        let decData = !this.state.decData;
        this.updateParent(decData, month);
        break;
    }
  };

  render() {
    return (
      <ListContainer>
        <ListTitle>
          <i class="fas fa-wave-square" /> NYC Weapon Complaints 2018
        </ListTitle>
        <p>Select month:</p>
        <p style={{ marginTop: "20px" }}>Year 2018</p>
        <MonthsContainer>
          <MonthButton value={"1"} onClick={e => this.displayData(e, "value")}>
            01
          </MonthButton>
          <MonthButton value={"2"} onClick={e => this.displayData(e, "value")}>
            02
          </MonthButton>
          <MonthButton value={"3"} onClick={e => this.displayData(e, "value")}>
            03
          </MonthButton>
          <MonthButton value={"4"} onClick={e => this.displayData(e, "value")}>
            04
          </MonthButton>
          <MonthButton value={"5"} onClick={e => this.displayData(e, "value")}>
            05
          </MonthButton>
          <MonthButton value={"6"} onClick={e => this.displayData(e, "value")}>
            06
          </MonthButton>
          <MonthButton value={"7"} onClick={e => this.displayData(e, "value")}>
            07
          </MonthButton>
          <MonthButton value={"8"} onClick={e => this.displayData(e, "value")}>
            08
          </MonthButton>
          <MonthButton value={"9"} onClick={e => this.displayData(e, "value")}>
            09
          </MonthButton>
          <MonthButton value={"10"} onClick={e => this.displayData(e, "value")}>
            10
          </MonthButton>
          <MonthButton value={"11"} onClick={e => this.displayData(e, "value")}>
            11
          </MonthButton>
          <MonthButton value={"12"} onClick={e => this.displayData(e, "value")}>
            12
          </MonthButton>
        </MonthsContainer>
      </ListContainer>
    );
  }
}

export default WeaponComponent;
