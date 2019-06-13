import React, { Component } from "react";
import {
  ListContainer,
  ListTitle,
  MonthsContainer,
  MonthButton,
  MonthSpectrumContainer,
  SpectrumTitle,
  JanSpectrum,
  FebSpectrum,
  MarSpectrum,
  AprSpectrum,
  MaySpectrum,
  JunSpectrum,
  JulSpectrum,
  AugSpectrum,
  SepSpectrum,
  OctSpectrum,
  NovSpectrum,
  DecSpectrum,
  ScrollContainer,
  ScrollMessage
} from "./WeaponStyles";

const janWeaponData = require("../../data/012018.json");
const febWeaponData = require("../../data/022018.json");
const marWeaponData = require("../../data/032018.json");
const aprWeaponData = require("../../data/042018.json");
const mayWeaponData = require("../../data/052018.json");
const junWeaponData = require("../../data/062018.json");
const julWeaponData = require("../../data/072018.json");
const augWeaponData = require("../../data/082018.json");
const sepWeaponData = require("../../data/092018.json");
const octWeaponData = require("../../data/102018.json");
const novWeaponData = require("../../data/112018.json");
const decWeaponData = require("../../data/122018.json");

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
      decData: props.decData,
      containerHeight: 0,
      containerWidth: 0
    };
  }

  componentDidMount() {
    const height = this.divElement.clientHeight;
    const width = this.divElement.clientWidth;
    this.setState({ containerHeight: height, containerWidth: width });
  }

  componentDidUpdate(prevProps, prevState) {
    const height = this.divElement.clientHeight;
    const width = this.divElement.clientWidth;
    console.log("height", height);
    console.log("width", width);
    if (prevState.containerHeight !== height) {
      this.setState({ containerHeight: height });
    }
    if (prevState.containerWidth !== width) {
      this.setState({ containerWidth: width });
    }
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
      default:
        console.log("Select a month");
    }
  };

  // Counts items in JSON object
  renderCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count++;
    }
    return <p>{count}</p>;
  }

  // Render scroll message
  renderScroll(height, width) {
    if (height > 405 && width < 250) {
      return (
        <ScrollContainer>
          <ScrollMessage>scroll</ScrollMessage>
        </ScrollContainer>
      );
    } else if (height > 500 && width > 300) {
      return (
        <ScrollContainer>
          <ScrollMessage>scroll</ScrollMessage>
        </ScrollContainer>
      );
    }
  }

  render() {
    return (
      <ListContainer>
        <ListTitle>
          <i class="fas fa-wave-square" /> NYC Weapon Complaints 2018
        </ListTitle>
        <MonthSpectrumContainer
          ref={divElement => (this.divElement = divElement)}
        >
          <p style={{ marginBottom: "10px" }}>Select month:</p>
          <MonthsContainer>
            <MonthButton
              value={"1"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.janData
                  ? { backgroundColor: "#e035e0" }
                  : { backgroundColor: "#686868" }
              }
            >
              01
            </MonthButton>
            <MonthButton
              value={"2"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.febData
                  ? { backgroundColor: "#ffff00", color: "#000000" }
                  : { backgroundColor: "#686868" }
              }
            >
              02
            </MonthButton>
            <MonthButton
              value={"3"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.marData
                  ? { backgroundColor: "#F32100" }
                  : { backgroundColor: "#686868" }
              }
            >
              03
            </MonthButton>
            <MonthButton
              value={"4"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.aprData
                  ? { backgroundColor: "#E3F4B2", color: "#0C205F" }
                  : { backgroundColor: "#686868" }
              }
            >
              04
            </MonthButton>
            <MonthButton
              value={"5"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.mayData
                  ? { backgroundColor: "#491C49" }
                  : { backgroundColor: "#686868" }
              }
            >
              05
            </MonthButton>
            <MonthButton
              value={"6"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.junData
                  ? { backgroundColor: "#4436FB" }
                  : { backgroundColor: "#686868" }
              }
            >
              06
            </MonthButton>
            <MonthButton
              value={"7"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.julData
                  ? { backgroundColor: "#DDECEE", color: "#733C9A" }
                  : { backgroundColor: "#686868" }
              }
            >
              07
            </MonthButton>
            <MonthButton
              value={"8"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.augData
                  ? { backgroundColor: "#3DF9D7", color: "#1427AA" }
                  : { backgroundColor: "#686868" }
              }
            >
              08
            </MonthButton>
            <MonthButton
              value={"9"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.sepData
                  ? { backgroundColor: "#FCED00", color: "#3A0053" }
                  : { backgroundColor: "#686868" }
              }
            >
              09
            </MonthButton>
            <MonthButton
              value={"10"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.octData
                  ? { backgroundColor: "#7AD151", color: "#482475" }
                  : { backgroundColor: "#686868" }
              }
            >
              10
            </MonthButton>
            <MonthButton
              value={"11"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.novData
                  ? { backgroundColor: "#790622" }
                  : { backgroundColor: "#686868" }
              }
            >
              11
            </MonthButton>
            <MonthButton
              value={"12"}
              onClick={e => this.displayData(e, "value")}
              style={
                this.state.decData
                  ? { backgroundColor: "#0cff00", color: "#6d04f7" }
                  : { backgroundColor: "#686868" }
              }
            >
              12
            </MonthButton>
          </MonthsContainer>
          <SpectrumTitle
            style={{
              fontSize: "16px",
              marginTop: "30px",
              marginBottom: "20px"
            }}
          >
            <p>Month</p>
            <p>No. of complaints</p>
          </SpectrumTitle>
          {this.state.janData ? (
            <>
              <SpectrumTitle>
                <p>January 2018</p>
                {this.renderCount(janWeaponData)}
              </SpectrumTitle>
              <JanSpectrum />
            </>
          ) : null}
          {this.state.febData ? (
            <>
              <SpectrumTitle>
                <p>February 2018</p>
                {this.renderCount(febWeaponData)}
              </SpectrumTitle>
              <FebSpectrum />
            </>
          ) : null}
          {this.state.marData ? (
            <>
              <SpectrumTitle>
                <p>March 2018</p>
                {this.renderCount(marWeaponData)}
              </SpectrumTitle>
              <MarSpectrum />
            </>
          ) : null}
          {this.state.aprData ? (
            <>
              <SpectrumTitle>
                <p>April 2018</p>
                {this.renderCount(aprWeaponData)}
              </SpectrumTitle>
              <AprSpectrum />
            </>
          ) : null}
          {this.state.mayData ? (
            <>
              <SpectrumTitle>
                <p>May 2018</p>
                {this.renderCount(mayWeaponData)}
              </SpectrumTitle>
              <MaySpectrum />
            </>
          ) : null}
          {this.state.junData ? (
            <>
              <SpectrumTitle>
                <p>June 2018</p>
                {this.renderCount(junWeaponData)}
              </SpectrumTitle>
              <JunSpectrum />
            </>
          ) : null}
          {this.state.julData ? (
            <>
              <SpectrumTitle>
                <p>July 2018</p>
                {this.renderCount(julWeaponData)}
              </SpectrumTitle>
              <JulSpectrum />
            </>
          ) : null}
          {this.state.augData ? (
            <>
              <SpectrumTitle>
                <p>August 2018</p>
                {this.renderCount(augWeaponData)}
              </SpectrumTitle>
              <AugSpectrum />
            </>
          ) : null}
          {this.state.sepData ? (
            <>
              <SpectrumTitle>
                <p>September 2018</p>
                {this.renderCount(sepWeaponData)}
              </SpectrumTitle>
              <SepSpectrum />
            </>
          ) : null}
          {this.state.octData ? (
            <>
              <SpectrumTitle>
                <p>October 2018</p>
                {this.renderCount(octWeaponData)}
              </SpectrumTitle>
              <OctSpectrum />
            </>
          ) : null}
          {this.state.novData ? (
            <>
              <SpectrumTitle>
                <p>November 2018</p>
                {this.renderCount(novWeaponData)}
              </SpectrumTitle>
              <NovSpectrum />
            </>
          ) : null}
          {this.state.decData ? (
            <>
              <SpectrumTitle>
                <p>December 2018</p>
                {this.renderCount(decWeaponData)}
              </SpectrumTitle>
              <DecSpectrum />
            </>
          ) : null}
        </MonthSpectrumContainer>
        {this.renderScroll(
          this.state.containerHeight,
          this.state.containerWidth
        )}
      </ListContainer>
    );
  }
}

export default WeaponComponent;
