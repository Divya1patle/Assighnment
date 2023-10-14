// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 

  useEffect(() => {
    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);
  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Data Display</h1>
      <Table striped bordered hover>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td >{item.id}</td>
              <td >{item.name}</td>
              <td>{item.username}</td>
              <td >{item.email}</td>
              <td>Address:
                {`[Street: ${item.street}, Suite: ${item.suite}, City: ${item.city}, Zipcode: ${item.zipcode}]`},
                Geo:{`[Street: ${item.lat}, Suite: ${item.lng}]`}

              </td>
              <td key={index}>{item.phone}</td>
              <td key={index}>{item.website}</td>
              <td> {`[Name: ${item.name}, Suite: ${item.catchPhrase}, City: ${item.bs}]`}</td>

              <Button variant="danger" onClick={() => handleViewDetails(item)} style={{ backgroundColor: 'red', width: '106px', marginTop: '13px' }}>View Details</Button>{' '}
            </tr>
          ))}
        </tbody>
      </Table>
      <h2 style={{textAlign:'center', marginTop:'5%'}}>Details</h2>
      {selectedItem && (
<div style={{textAlign:'center',border:'1px solid black', width:'591px', marginLeft:'32%', marginBottom:'25%'}}>
        <div>
          <p >Id: {selectedItem.id}</p>
          <p style={{marginLeft:'25px'}}>Name: {selectedItem.name}</p>
          <p style={{marginLeft:'25px'}}>Username: {selectedItem.username}</p>
          <p style={{marginLeft:'25px'}}>Email: {selectedItem.email}</p>
          </div> 
           <p>Address: {`Street: ${selectedItem.street}, Suite: ${selectedItem.suite}, City: ${selectedItem.city}, Zipcode: ${selectedItem.zipcode}`},
          Geo: {`Street: ${selectedItem.lat}, Suite: ${selectedItem.lng}`}</p>
          <p>Phone Number:  {selectedItem.phone}</p>
          <p>Website: {selectedItem.website}</p>
          <p>Company: {`Name: ${selectedItem.name}, CatchPhrase: ${selectedItem.catchPhrase}, Bs: ${selectedItem.bs}`}</p>
        </div>
      )}
      
    </div>
  );
}



