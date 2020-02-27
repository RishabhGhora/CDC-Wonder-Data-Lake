import React, { Component } from 'react';
import { Collapse, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Subcategory.css';

class Subcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      dropDownOpen: false,
      subcategory: 'All Cancer',
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
  };

  updateSubcategory = (name) => {
    this.setState({
      subcategory: name,
    })
    this.props.updateType(name);
  }

  render() {
    const {collapse, subcategory, dropDownOpen} = this.state;
    return (
      <div className="subcategory-container">
        <Button color="primary" onClick={this.toggle} style={{ fontSize: '20px', height: '45px', marginBottom: '1rem', width: '400px', textAlign: 'left' }}>
            Subcategory 
            {collapse ? <p className="plus-button">-</p> : <p className="plus-button">+</p> }

          </Button>
        <h5>Current filters: {subcategory} </h5>
        <Collapse
          isOpen={collapse}
        >
          <div className ="subcategory-card">
                <h1>
                Choose type
                <Dropdown isOpen={dropDownOpen} toggle={this.toggle2}>
                <DropdownToggle caret>
                subcategories
                </DropdownToggle>
                <DropdownMenu 
                    modifiers={{
                    setMaxHeight: {
                    enabled: true,
                    order: 890,
                    fn: (data) => {
                    return {
                        ...data,
                        styles: {
                        ...data.styles,
                        overflow: 'auto',
                        maxHeight: 200,
                        },
                    };
                    },
                    },
                }}>
                <DropdownItem onClick={() => this.updateSubcategory('All Cancer')}>All Cancer</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Adrenal Gland Cancer')}>Adrenal Gland</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Bladder Cancer')}>Bladder</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Bone Cancer')}>Bone</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Brain Cancer')}>Brain</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Breast Cancer')}>Brease</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Cervical Cancer')}>Cervical</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Gastric Cancer')}>Gastric</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Kidney Cancer')}>Kidney</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Liver Cancer')}>Liver</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Lung Cancer')}>Lung</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Oral Cancer')}>Oral</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Pancreatic Cancer')}>Pancreatic</DropdownItem>
                <DropdownItem onClick={() => this.updateSubcategory('Skin Cancer')}>Skin Cancer</DropdownItem>
                </DropdownMenu>
                </Dropdown>
                </h1>
                </div>
        </Collapse>
      </div>
    );
  }
  
}

export default Subcategory;