import React, { Component } from 'react';
import {
    Collapse,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import '../../styles/Location.css';

import Counties from '../Counties/Counties.js';

class Location2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            dropDownOpen: false,
            showCounties: false,
            location: 'All States',
        };
        this.toggle = this.toggle()
        this.toggle2 = this.toggle2()
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

    updateLocation = (name) => {
        var showCounties  = false;
        if (name != 'All States') {
            name = name + ', all counties';
            showCounties = true;
        } else {
            showCounties = false;
        }
        this.setState({
            location: name,
            showCounties: showCounties,
        });
        this.props.updateLocation(name);
    }

    render() {
        const { collapse, dropDownOpen, location, showCounties} = this.state;

        return (
        <div className="location-container">
            <Button color="primary" onClick={this.toggle} style={{ fontSize: '20px', height: '45px', marginBottom: '1rem', width: '400px', textAlign: 'left'}}>
                Location 
                {collapse ? <p className="plus-button">-</p> : <p className="plus-button">+</p> }
            </Button>
            <h5>Current filters: {location}</h5>
            <Collapse isOpen={collapse} >
            <div className ="location-card">
                <h1>
                Choose state
                <Dropdown isOpen={dropDownOpen} toggle={this.toggle2}>
                <DropdownToggle caret>
                States
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
                <DropdownItem onClick={() => this.updateLocation('All States')}>All</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Alabama')}>Alabama</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Alaska')}>Alaska</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Arizona')}>Arizona</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Arkansas')}>Arkansas</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('California')}>California</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Colorado')}>Colorado</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Connecticut')}>Connecticut</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Delaware')}>Delaware</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Florida')}>Florida</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Georgia')}>Georgia</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Hawaii')}>Hawaii</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Idaho')}>Idaho</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Illinois')}>Illinois</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Indiana')}>Indiana</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Iowa')}>Iowa</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Kansas')}>Kansas</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Kentucky')}>Kentucky</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Louisiana')}>Louisiana</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Maine')}>Maine</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Maryland')}>Maryland</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Massachusetts')}>Massachusetts</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Michigan')}>Michigan</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Minnesota')}>Minnesota</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Mississippi')}>Mississippi</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Missouri')}>Missouri</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Montana')}>Montana</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Nebraska')}>Nebraska</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Nevada')}>Nevada</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('New Hampshire')}>New Hampshire</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('New Jersey')}>New Jersey</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('New Mexico')}>New Mexico</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('New York')}>New York</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('North Carolina')}>North Carolina</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('North Dakota')}>North Dakota</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Ohio')}>Ohio</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Oklahoma')}>Oklahoma</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Oregon')}>Oregon</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Pennsylvania')}>Pennsylvania</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Rhode Island')}>Rhode Island</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('South Carolina')}>South Carolina</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('South Dakota')}>South Dakota</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Tennessee')}>Tennessee</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Texas')}>Texas</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Utah')}>Utah</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Vermont')}>Vermont</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Virginia')}>Virginia</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Washington')}>Washington</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('West Virginia')}>West Virginia</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Wisconsin')}>Wisconsin</DropdownItem>
                <DropdownItem onClick={() => this.updateLocation('Wyoming')}>Wyoming</DropdownItem>
                </DropdownMenu>
                </Dropdown>
                </h1>
                { showCounties ? <Counties /> : null}
            </div>
            </Collapse>
          </div>
        );
    }
}

export default Location2;