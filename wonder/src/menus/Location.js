import React, { Component, useState } from 'react';
import { Collapse, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Subcategory.css';

const Location = (props) => {
  
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState('All States');
  
    
  
    const toggle = () => setCollapse(!collapse);
  
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle2 = () => setDropdownOpen(prevState => !prevState);
  
    return (
      <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem', width: '400px', }}>
            Location 
          </Button>
        <h5>Current filters: {status}</h5>
        <Collapse
          isOpen={collapse}
          
        >
          <div className ="Card">
          <h1>
            Choose state
            <Dropdown isOpen={dropdownOpen} toggle={toggle2}>
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
          <DropdownItem onClick={() => setStatus('All States')}>All</DropdownItem>
          <DropdownItem onClick={() => setStatus('Alabama')}>Alabama</DropdownItem>
          <DropdownItem onClick={() => setStatus('Alaska')}>Alaska</DropdownItem>
          <DropdownItem onClick={() => setStatus('Georgia')}>Georgia</DropdownItem>
          <DropdownItem onClick={() => setStatus('Florida')}>Florida</DropdownItem>
          <DropdownItem onClick={() => setStatus('New York')}>New York</DropdownItem>
        </DropdownMenu>
      </Dropdown>
            
          </h1>
          </div>
          
        </Collapse>
      </div>
    );
  }

export default Location;