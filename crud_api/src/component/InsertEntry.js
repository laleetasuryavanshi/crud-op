import React, { useState } from "react";
import axios from "axios";

function InsertEntry() {
  const [book, setBook] = useState({
    bname: "",
    bauthor: "",
    bprice: "",
  });

  let stopSubmission = (e) => {
    const URI = "http://localhost:8080/books";
    e.preventDefault();
    let b = {
      bname: book.bname,
      bauthor: book.bauthor,
      bprice: book.bprice,
    };

    
    console.log(b);
    axios
      .post(URI, book)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

    setBook({bname:'',bauthor:'',bprice:''})

  };

  return (
    <div>
      <h3>Registration Form</h3>

      <form method="POST" onSubmit={stopSubmission}>
        <div className="form-group">
          <label>Book Name</label>
          <input
            type="text"
            value={book.bname}
            onChange={(e) => setBook({ ...book, bname: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Book Author</label>
          <input
            type="text"
            value={book.bauthor}
            className="form-control"
            onChange={(e) => setBook({ ...book, bauthor: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Book Price</label>
          <input
            type="text"
            value={book.bprice}
            className="form-control"
            onChange={(e) => setBook({ ...book, bprice: e.target.value })}
          />
        </div>
        <button className="btn btn-outline-info mt-3 ">Register</button>
      </form>
    </div>
  );
}

export default InsertEntry;