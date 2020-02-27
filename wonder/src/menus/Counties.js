import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Counties.css';

class Counties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownOpen: false,
        };
    }

    toggle2 = () => {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen,
        })
    }

    render() {
        const { dropDownOpen } = this.state;

        return (
        <div className="counties-container">
                <h1>
                Choose counties
                <Dropdown isOpen={dropDownOpen} toggle={this.toggle2}>
                <DropdownToggle caret>
                Counties
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
                <DropdownItem>All</DropdownItem>
                <DropdownItem>Appling</DropdownItem>
                <DropdownItem>Atkinson</DropdownItem>
                <DropdownItem>Bacon</DropdownItem>
                <DropdownItem>Baker</DropdownItem>
                <DropdownItem>Baldwin</DropdownItem>
                <DropdownItem>Banks</DropdownItem>
                <DropdownItem>Barrow</DropdownItem>
                <DropdownItem>Bartow</DropdownItem>
                <DropdownItem>Ben Hill</DropdownItem>
                <DropdownItem>Berrien</DropdownItem>
                <DropdownItem>Bibb</DropdownItem>
                <DropdownItem>Bleckley</DropdownItem>
                <DropdownItem>Brantley</DropdownItem>
                <DropdownItem>Brooks</DropdownItem>
                <DropdownItem>Bryan</DropdownItem>
                <DropdownItem>Bulloch</DropdownItem>
                <DropdownItem>Burke</DropdownItem>
                <DropdownItem>Butts</DropdownItem>
                <DropdownItem>Calhoun</DropdownItem>
                <DropdownItem>Camden</DropdownItem>
                <DropdownItem>Candler</DropdownItem>
                <DropdownItem>Carroll</DropdownItem>
                <DropdownItem>Catoos</DropdownItem>
                <DropdownItem>Charlton</DropdownItem>
                <DropdownItem>Chatham</DropdownItem>
                <DropdownItem>Chattahoochee</DropdownItem>
                <DropdownItem>Chattooga</DropdownItem>
                <DropdownItem>Cherokee</DropdownItem>
                <DropdownItem>Clarke</DropdownItem>
                <DropdownItem>Clay</DropdownItem>
                <DropdownItem>Clayton</DropdownItem>
                <DropdownItem>Clinch</DropdownItem>
                <DropdownItem>Cobb</DropdownItem>
                <DropdownItem>Coffee</DropdownItem>
                <DropdownItem>Colquitt</DropdownItem>
                <DropdownItem>Columbia</DropdownItem>
                <DropdownItem>Cook</DropdownItem>
                <DropdownItem>Coweta</DropdownItem>
                <DropdownItem>Crawford</DropdownItem>
                <DropdownItem>Fulton</DropdownItem>
                <DropdownItem>Forsyth</DropdownItem>
                <DropdownItem>Gwinnett</DropdownItem>
                <DropdownItem>Jones</DropdownItem>
                <DropdownItem>Lanier</DropdownItem>
                </DropdownMenu>
                </Dropdown>
                </h1>
            </div>
        );
    }
}

export default Counties;
