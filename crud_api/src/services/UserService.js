import axios from 'axios'
const GET_URL='http://localhost:8080/books';
class UserService{
    getUsers(){
       return axios.get('http://localhost:8080/books/author/Raj');
    }
    createEmployee(books){
        return axios.post(GET_URL, books);
    }
    getBookById(bookid){
        return axios.get(GET_URL + '/' + bookid);
    }
}
export default new UserService();