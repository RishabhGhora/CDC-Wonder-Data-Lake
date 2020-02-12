import React, { Component } from 'react';
import {
  Collapse,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import '../../styles/Demographic.css';

class Demographic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      dropDownOpen: false,
      dropDown2Open: false,
      dropDown3Open: false,
      gender: 'All',
      demographic: 'All Demographics',
    }

  }
  toggle = () => {
    this.setState({
      collapse: !this.state.collapse,
    })
  };
  
  toggle2 = () => {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen,
    })
  }

  toggle3 = () => {
    this.setState({
      dropDown2Open: !this.state.dropDown2Open,
    })
  }
  
  toggle4 = () => {
    this.setState({
      dropDown3Open: !this.state.dropDown3Open,
    })
  }
  updateGender = (gender) => {
    this.setState({
      gender: gender,
    })
  }

  render() {
    const { collapse, dropDownOpen, dropDown2Open,dropDown3Open,  demographic } = this.state;
    return (
      <div className="demographic-container">
        <Button color="primary" onClick={this.toggle} style={{ fontSize: '20px', height: '45px', marginBottom: '1rem', width: '400px', textAlign: 'left' }}>
            Demographics 
            {collapse ? <p className="plus-button">-</p> : <p className="plus-button">+</p> }

          </Button>
        <h5>Current filters: {demographic}</h5>
        <Collapse
          isOpen={collapse}
        >
          <div className ="demographic-card">
                <h1>
                Choose gender
                <Dropdown isOpen={dropDownOpen} toggle={this.toggle2}>
                <DropdownToggle caret>
                gender
                </DropdownToggle>
                <DropdownMenu >
                <DropdownItem onClick={() => this.updateGender('All')}>All</DropdownItem>
                <DropdownItem onClick={() => this.updateGender('All')}>Male</DropdownItem>
                <DropdownItem onClick={() => this.updateGender('All')}>Female</DropdownItem>
                </DropdownMenu>
                </Dropdown>
                </h1>
                <h2>
                Choose age
                <Dropdown isOpen={dropDown2Open} toggle={this.toggle3}>
                <DropdownToggle caret>
                ages
                </DropdownToggle>
                <DropdownMenu >
                <DropdownItem>All</DropdownItem>
                <DropdownItem>85+</DropdownItem>
                <DropdownItem>75-85</DropdownItem>
                <DropdownItem>65-75</DropdownItem>
                <DropdownItem>55-65</DropdownItem>
                <DropdownItem>45-55</DropdownItem>
                <DropdownItem>35-45</DropdownItem>
                <DropdownItem>25-35</DropdownItem>
                <DropdownItem>15-25</DropdownItem>
                <DropdownItem>5-15</DropdownItem>
                <DropdownItem>0-5</DropdownItem>
                </DropdownMenu>
                </Dropdown>
                </h2>
                <h3>
                Choose ethnicity
                <Dropdown isOpen={dropDown3Open} toggle={this.toggle4}>
                <DropdownToggle caret>
                ethnicities
                </DropdownToggle>
                <DropdownMenu >
                <DropdownItem>All</DropdownItem>
                <DropdownItem>African American</DropdownItem>
                <DropdownItem>American Indian</DropdownItem>
                <DropdownItem>Asian</DropdownItem>
                <DropdownItem>Hispanic</DropdownItem>
                <DropdownItem>White</DropdownItem>
                </DropdownMenu>
                </Dropdown>
                </h3>
          </div>
        </Collapse>
      </div>
    );
  }
  
}

export default Demographic;