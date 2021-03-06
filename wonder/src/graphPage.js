import React, { Component, useEffect} from 'react';
import './graphPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import Subcategory from './menus/Subcategory.js';
import Location2 from './menus/Location2.js';
import Dates from './menus/Dates.js';
import Demographics from './menus/Demographic.js';
import firebase from 'firebase';
import 'firebase/storage';
import firebaseConfig from '../src/Firebase/firebase.js';
import { SphereSpinner } from "react-spinners-kit";
import LineChart from './LineChart.js';
import { Button } from 'reactstrap';

firebase.initializeApp(firebaseConfig);

class GraphPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'All States',
      type: 'All Cancer',
      year: '2018',
      allStates: null,
      georgia: null,
      california: null,
      twenty10: null,
      lung: null,
      data: null,
      cases: {},
      firstData: null,
    }
    this.updateLocation = this.updateLocation1
}



updateLocation1 = (state) => {
  const {allStates, georgia, california} = this.state;
  if (state == 'All States') {
    this.setState({
      location: state,
      data: allStates,
    });
  } else if (state == 'Georgia, all counties') {
    this.setState({
      location: state,
      data: georgia,
    });
  } else if (state == 'California, all counties') {
    this.setState({
      location: state,
      data: california,
    })
  }
}
updateType = (type) => {
  if (type == 'Lung Cancer') {
    this.setState({
      type: type,
      data: this.state.lung,
    })
  } else {
    this.setState({
      type: type,
      data: this.state.allStates,
    })
  }

}
updateYear = (year) => {
  if (year == '2010') {
    this.setState({
      year: year,
      data: this.state.twenty10,
    })
  } else if (year == '2018') {
    this.setState({
      year: year,
      data: this.state.allStates,
    })

  }  else {
    this.setState({
      year: year
    })
  }


}
componentDidMount() {

  fetch("/get_data").then(response =>
    response.json().then(data => {
      console.log(data)
      this.setState({
        firstData: data
      })
    }))
  console.log('hello')



  const storage = firebase.storage();
  const storageRef = storage.ref();
  storageRef.child('data/allStates.json').getDownloadURL().then(url => {
    this.makeRequest(url)
  });
  storageRef.child('data/georgia.json').getDownloadURL().then(url => {
    this.makeRequest(url)
  });
  storageRef.child('data/california.json').getDownloadURL().then(url => {
    this.makeRequest(url)
  });
  storageRef.child('data/2010.json').getDownloadURL().then(url => {
    this.makeRequest(url)
  });
  storageRef.child('data/lung.json').getDownloadURL().then(url => {
    this.makeRequest(url)
  });




}

makeRequest = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onload = function(e){
      if (xhr.readyState === 4){
        if (xhr.status === 200){
          var data = xhr.response
        } else {
          console.error(xhr.statusText)
        }
      }
    }
    xhr.onreadystatechange = () => {
      var data = xhr.response;
      if (data != null) {
        for( let i = 0; i < data.length; i++) {
          var dates = data[i].Date.split(',');
          var date = dates[0].substring(0, 3) + ' ' + dates[1] + ' ' + dates[2] + ' 00:00:00' + ' GMT-0500 (Eastern Standard Time)';
          date = new Date(date);
          data[i].Date = date;
        }
        if (url.includes('allStates.json')) {
          this.setState({
            allStates: data,
            data: data,
          })
        } else if (url.includes('georgia.json')) {
          this.setState({
            georgia: data,
          })
        } else if (url.includes('california.json')) {
          this.setState({
            california: data,
          })
        } else if (url.includes('2010.json')) {
          this.setState ({
            twenty10: data,
          })
        } else if (url.includes('lung.json')) {
          this.setState({
            lung: data,
          })
        }

      }

    }
    xhr.open('GET', url);
    xhr.send();

}

clearFilters = () => {
  this.setState({
    location: 'All States',
    type: 'All Cancer',
    year: '2018',
    data: this.state.allStates,
  })
}


  render() {
    const { location, type, data, year, firstData}  = this.state;
    console.log(data)
    console.log(firstData)
    return (
      <div className="graphPage">
        <img className="logo" src={require('./wonder-logo.png')} />
        <img className="home" src={require('./home.png')} />
        <h1 className="graph-title">{type} Cases in {location}</h1>
        <h2 className="graph-year">{year}</h2>
        <LineChart className="graph" data={data} />
        <Button color="primary" className="export-button" style={{ fontSize: '20px', height: '45px', marginBottom: '1rem', width: '200px', textAlign: 'center'}}>
          Export
        </Button>
        <Button color="primary" className="clear-button" onClick={this.clearFilters} style={{ fontSize: '20px', height: '45px', marginBottom: '1rem', width: '200px', textAlign: 'center'}}>
          Clear
        </Button>
        <Subcategory updateType = {this.updateType} />
        <Location2 updateLocation = {this.updateLocation1}/>
        <Dates updateYear = {this.updateYear}/>
        <Demographics />
        { data == null ? <div className="loader"><SphereSpinner
                size={50}
                color="#2980b9"
                loading={true}
            /></div> : null}
      </div>
    );


  }

}


export default GraphPage;
