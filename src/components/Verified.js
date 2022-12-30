import React, {useEffect} from "react";
import base from "../api/base";

function Verified() {
    let mobile;
  useEffect(() => {
    base("Table 1")
      .select({
        maxRecords: 1,
        view: "Grid view",
      })
      .eachPage(function page(records, fetchNextPage) {
        records.forEach(function (record) {
            mobile = record.get("Mobile");
            console.log(mobile);
        //   console.log("Retrieved", record.get("Mobile"));
        //   console.log("Retrieved", record.get("Name"));
        //   console.log("Retrieved", record.get("EmailID"));
        //   console.log("Retrieved", record.get("City"));
        //   console.log("Retrieved", record.get("Bookings"));
        //   console.log("Retrieved", record.get("UserID"));
        });
        fetchNextPage();
      });
  });
  return (
    <div className="container">
      <h1>OTP verified successfully</h1>
    </div>
  );
}

export default Verified;
