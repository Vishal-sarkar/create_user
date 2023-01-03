import React, {useRef} from "react";
// import base from "../api/base";
// import './CreateUser.css';
import base from "../api/base";

function CreateUser({ data }) {
  const idRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  const bookingRef = useRef();

  const addUser = (e) => {
    e.preventDefault();
    const ID = Number(idRef.current.value);
    const Name = nameRef.current.value;
    const Email = emailRef.current.value;
    const Phone = Number(phoneRef.current.value);
    const City = cityRef.current.value;
    const Book = bookingRef.current.value;
    base("Table 1").create(
        { 
            "Mobile": Phone,
            "Name": Name,
            "EmailID": Email,
            "City": City,
            "Bookings": Book,
            "UserID": ID
          
        },
        function(err, record){
            if (err) {
                console.error(err);
                return;
              }
              prompt(record.getId());
        });
    console.log(Phone);
  };

  return (
    <div className="container">
      <h1>User Does not exist</h1>
      <form>
        <h2>
          UserId: <input type="number" name="id" id="id" ref={idRef} />
        </h2>
        <h2>
          Name: <input type="text" name="name" id="name" ref={nameRef} />
        </h2>
        <h2>
          Email: <input type="email" name="email" id="email" ref={emailRef} />
        </h2>
        <h2>
          Phone: <input type="number" name="phone" id="phone" ref={phoneRef} />
        </h2>
        <h2>
          City: <input type="text" name="city" id="city" ref={cityRef} />
        </h2>
        <h2>
          Bookings:{" "}
          <input type="text" name="bookings" id="bookings" ref={bookingRef} />
        </h2>
        <p>Click to create one</p>
        <button className="active" onClick={addUser} type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
