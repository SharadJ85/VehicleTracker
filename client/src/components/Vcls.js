import React, { Component } from 'react';



class Vcls extends Component {
  constructor(props) {
    super();
    this.state = {
      vehicles: []
    };
  }

  componentDidMount() {
    fetch('/v1/vehicles')
      .then(res => res.json())
      .then(vehicles => this.setState({ vehicles }, () => console.log('vehicles fetched...', vehicles)));

  }


  render() {
    return (<div>
      <div>
        <table>
          <thead>
            <tr>
              <th>LICENCE PLATE</th>
              <th>STATUS</th>
              <th>OPERATOR</th>
              <th>VEHICLE TYPE</th>
              <th>LOCATION</th>
              <th>SPEED</th>
              <th>LAST UPDATE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.vehicles.map(vehicles =>
              <tr>
                <td> {vehicles.licence_plate}</td>
                <td> {vehicles.status}</td>
                <td> {vehicles.operator}</td>
                <td> {vehicles.vehicle_type}</td>
                <td> {vehicles.location}</td>
                <td> {vehicles.speed}</td>
                <td> {vehicles.last_update}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default Vcls;
