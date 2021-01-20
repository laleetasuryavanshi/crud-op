import React, { useState } from "react";
import axios from "axios";
import UserService from "../services/UserService";

function UpdateBookComponent(props) {
    const [book, setBook] = useState({
      bid: props.id,
      bname: "",
      bauthor: "",
      bprice: "",
    });


   let componentDidMount=()=>{
        UserService.getBookById(book.bid).then( (res) =>{
            let b = res.data;
            setBook({...book,bname:b.bname,
            bauthor:b.bauthor,
            bprice:b.bprice});
        });
    }
    let stopSubmission = (e) => {
        const URI = "http://localhost:8080/books";
        e.preventDefault();
        let b = {
            bid:book.bid,
          bname: book.bname,
          bauthor: book.bauthor,
          bprice: book.bprice,
        };
        console.log(b);
        axios




        
          .put(URI + '/' + book.bid, book)
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
    
        setBook({bname:'',bauthor:'',bprice:''})
    
      };
    
    return (
        <div>
          <h3>UPDATE HERE</h3>
    
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

export default UpdateBookComponent