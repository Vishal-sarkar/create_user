import React, {useEffect, useState} from "react";
import base from "../api/base";



function Verified({data}) {
  const [userId, setUserId] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [city, setCity] = useState([]);
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    base('Table 1').find(data, function(err, record) {
      if (err) { console.error(err); return; }
      setUserId(record.fields.UserID);
      setName(record.fields.Name);
      setEmail(record.fields.EmailID);
      setMobile(record.fields.Mobile);
      setCity(record.fields.City);
      setBooking(record.fields.Bookings);
  });

  });

  return (
    <div className="container">
      <h1>OTP verified successfully</h1>
      <h2>UserID: {userId}</h2>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Mobile: {mobile}</h2>
      <h2>City: {city}</h2>
      <h2>Booking: {booking}</h2>
    </div>
  );
}

export default Verified;
