import React, { Component } from 'react';
import {
  Collapse,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import 'Styles/Dates.css';


class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      dropDownOpen: false,
      year: '2018',
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

  updateYear = (year) => {
    this.setState({
      year: year,
    });
    this.props.updateYear(year);
  }

  render() {
    const { collapse, dropDownOpen, year} = this.state;
    return (
      <div className="dates-container">
          <Button color="primary" onClick={this.toggle} style={{ fontSize: '20px', marginBottom: '1rem', height: '45px', width: '400px', textAlign: 'left'}}>
              Dates
          {collapse ? <p className="plus-button">-</p> : <p className="plus-button">+</p> }
          </Button>
          <h5>Current filters: {year}</h5>
          <Collapse isOpen={collapse} >
          <div className ="dates-card">
              <h1>
              Choose year 
              <Dropdown isOpen={dropDownOpen} toggle={this.toggle2}>
              <DropdownToggle caret>
              Year
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
              <DropdownItem onClick={() => this.updateYear('2018')}>2018</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2017')}>2017</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2016')}>2016</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2015')}>2015</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2014')}>2014</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2013')}>2013</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2012')}>2012</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2011')}>2011</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2010')}>2010</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2009')}>2009</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2008')}>2008</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2007')}>2007</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2006')}>2006</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2005')}>2005</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2004')}>2004</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2003')}>2003</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2002')}>2002</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2001')}>2001</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('2000')}>2000</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('1999')}>1999</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('1998')}>1998</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('1997')}>1997</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('1996')}>1996</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('1995')}>1995</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('1994')}>1994</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('1993')}>1993</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('1992')}>1992</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('1991')}>1991</DropdownItem>
              <DropdownItem onClick={() => this.updateYear('1990')}>1990</DropdownItem>
              </DropdownMenu>
              </Dropdown>
              </h1>
          </div>
          </Collapse>
        </div>
      );
  }


}

export default Dates;