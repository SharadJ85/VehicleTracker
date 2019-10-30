const express = require('express');
const app = express();

app.get('/v1/vehicles', (req, res) => {
    const vehicles = [
      {     
          "licence_plate": "KA08C78",
          "speed": 5,
          "lat": 12.9038820266724,
          "lon": 74.8129501342773,
          "location": " Indian Oil Tank Farm",
          "status": "moving",
          "last_update": 1565785406,
          "operator": "E",
          "vehicle_type": "Truck"
      },
      {   
          "licence_plate": "KA53D30",
          "speed": 0,
          "lat": 12.8353052139282,
          "lon": 75.2612915039062,
          "location": " Uppinangadi",
          "status": "stationary",
          "last_update": 1565785389,
          "operator": "V.VELMURUGAN",
          "vehicle_type": "Truck"
      },
      {   
          "licence_plate": "KA01AC4",
          "speed": 0,
          "lat": 12.9012079238892,
          "lon": 74.8128662109375,
          "location": " Indian Oil Tank Farm",
          "status": "stationary",
          "last_update": 1565785387,
          "operator": "MURUGAN",
          "vehicle_type": "Truck"
      },
      {   
          "licence_plate": "KA05AF1",
          "speed": 0,
          "lat": 12.915584564209,
          "lon": 74.8176651000977,
          "location": " Indian Oil Tank Farm",
          "status": "stationary",
          "last_update": 1565785382,
          "operator": "SRI",
          "vehicle_type": "Truck"
      },
      {   
          "licence_plate": "MH03CP3",
          "speed": 0,
          "lat": 19.0461521148682,
          "lon": 73.0287551879883,
          "location": " Thane - Belapur Rd",
          "status": "stationary",
          "last_update": 1565785382,
          "operator": "REEHAL",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "TN57BC5", 
          "speed": 19,
          "lat": 10.1956834793091,
          "lon": 76.3857574462891,
          "location": "Angamaly",         
          "status": "moving",
          "last_update": 1565785382,
          "operator": "D",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "WB39A27",
          "speed": 31,
          "lat": 23.2072238922119,
          "lon": 87.0085830688477,
          "location": " Dulalpur",
          "status": "moving",
          "last_update": 1565785382,
          "operator": "ROAD",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "PB10FF7",
          "speed": 23,
          "lat": 30.5237789154053,
          "lon": 75.8891906738281,
          "location": " Janta Nagar",
          "status": "moving",
          "last_update": 1565785382,
          "operator": "Cheema",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "RJ14GK4",
          "speed": 18,
          "lat": 24.5573444366455,
          "lon": 73.7349014282227,
          "location": " Adarsh Nagar",
          "status": "moving",
          "last_update": 1565785381,
          "operator": "Salasar",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "WB39868",
          "speed": 0,
          "lat": 23.4806957244873,
          "lon": 87.3934936523438,
          "location": " Rajbandh",
          "status": "stationary",
          "last_update": 1565785381,
          "operator": "ROAD",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "OD05AN2",
          "speed": 0,
          "lat": 20.2831058502197,
          "lon": 86.6291351318359,
          "location": " Paradeep",
          "status": "stationary",
          "last_update": 1565785381,
          "operator": "Om",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "WB39B52",
          "speed": 0,
          "lat": 23.4820995330811,
          "lon": 87.3942108154297,
          "location": " Amlajora",
          "status": "stationary",
          "last_update": 1565785381,
          "operator": "ROAD",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "RJ27GB6",
          "speed": 0,
          "lat": 24.3889923095703,
          "lon": 74.3868637084961,
          "location": " Bohera",
          "status": "stationary",
          "last_update": 1565785381,
          "operator": "Manika",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "HR61B05",
          "speed": 8,
          "lat": 29.5505218505859,
          "lon": 76.3870086669922,
          "location": " SH 11A",
          "status": "moving",
          "last_update": 1565785381,
          "operator": "Essar",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "GJ3W735",
          "speed": 0,
          "lat": 22.3510322570801,
          "lon": 69.8188018798828,
          "location": " Jogvad",
          "status": "moving",
          "last_update": 1565785381,
          "operator": "Nandkishor",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "RJ23GB5",
          "speed": 0,
          "lat": 22.3424243927002,
          "lon": 69.7744064331055,
          "location": " Zankhar",
          "status": "stationary",
          "last_update": 1565785381,
          "operator": "S",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "DN09Q93",
          "speed": 0,
          "lat": 27.4147758483887,
          "lon": 78.0377960205078,
          "location": " Kuktai",
          "status": "stationary",
          "last_update": 1565785381,
          "operator": "R.K.Bulk",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "HR55U65",
          "speed": 0,
          "lat": 22.3448581695557,
          "lon": 69.7637634277344,
          "location": " Zankhar",
          "status": "stationary",
          "last_update": 1565785381,
          "operator": "Mannat",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "GJ12AT6",
          "speed": 0,
          "lat": 22.4043254852295,
          "lon": 69.8754348754883,
          "location": " GJ 361140",
          "status": "stationary",
          "last_update": 1565785381,
          "operator": "Shri",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "RJ27GC0",
          "speed": 55,
          "lat": 22.6384677886963,
          "lon": 70.7286682128906,
          "location": " GJ 363650",
          "status": "moving",
          "last_update": 1565785380,
          "operator": "Manika",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "HR55P97",
          "speed": 0,
          "lat": 28.4440650939941,
          "lon": 76.8173446655273,
          "location": " HR 122506",
          "status": "stationary",
          "last_update": 1565785380,
          "operator": "SHRI",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "WB29B60",
          "speed": 0,
          "lat": 22.0639686584473,
          "lon": 88.0906066894531,
          "location": " Haldia",
          "status": "moving",
          "last_update": 1565785380,
          "operator": "Shukla",
          "vehicle_type": "Truck"
      },
      {
          "licence_plate": "KL07CG2",
          "speed": 0,
          "lat": 10.1709966659546,
          "lon": 78.4827423095703,
          "location": " Sadurvadamangalam",
          "status": "stationary",
          "last_update": 1565785380,
          "operator": "Mark",
          "vehicle_type": "Truck"
      }
  ];
    res.json(vehicles);

})
const port = 5000;

app.listen(port, () => console.log('Server started on port ' + port));
