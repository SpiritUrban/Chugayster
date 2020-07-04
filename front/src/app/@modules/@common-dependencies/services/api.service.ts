import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

if(location.hostname == 'localhost') var url = 'http://localhost'; //dev
else var url = ''; //production

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  // test
  test = () => this.http.get('https://api.github.com/users').toPromise();

  // front
  getJson = (path) => this.http.get('./assets' + path).toPromise();

  // back
  register = (userData) => this.http.post(url + '/api/auth/register', userData, httpOptions).toPromise();
  login = (userData) => this.http.post(url + '/api/auth/login', userData, httpOptions).toPromise();
  logout = () => this.http.post(url + '/api/auth/logout', httpOptions).toPromise();

  editUser = (updatedField) => this.http.put(url + '/user', updatedField, httpOptions).toPromise();

  sendVerificationMail = () => this.http.post(url + '/api/auth/send-verification-mail', httpOptions).toPromise();

  
  changePassword = (info) => this.http.put(url + '/change-password', info, httpOptions).toPromise();



  // auth info ???
  // register = (userData) => this.http.get('http://localhost:49001/api/auth/info', userData).toPromise();

  // login(userData) {
  //   return this.http.post(url + '/login', userData, httpOptions).toPromise();
  // }

  // register(userData) {
  //   return this.http.post(url + '/register', userData, httpOptions).toPromise();
  // }

  // getProduct(id) {
  //   return this.http.get(url + '/product/' + id).toPromise(); //productID
  // }

  // getTodos() {
  //   return this.http.get<Todo[]>(url + '/todos') //leave becouse we don't use it
  // }

  // setTodos(todos) {
  //   return this.http.post<Todo[]>(url + '/todos', todos, httpOptions) //leave becouse we don't use it
  // }

  getSessionInfo() {
    return this.http.get(url + '/session-info').toPromise();
  }
  
  // getProducts(): any {
  //   return this.http.get(url + '/products').toPromise(); 
  // }

  // // search() {
  // //   return this.http.get(url + '/search'); // dont know
  // // }
  // getUsers() {
  //   return this.http.get(url + '/users').toPromise();
  // }
  // setCategories(productCategories) {
  //   return this.http.post(url + '/categories', productCategories, httpOptions).toPromise();
  // }
  // getCategories() {
  //   return this.http.get(url + '/categories').toPromise();
  // }
  // addProduct(newProduct) {
  //   return this.http.post(url + '/products', newProduct, httpOptions).toPromise();
  // }
  // upload(obj) {
  //   return this.http.post(url + '/upload2', obj, httpOptions).toPromise();
  // }
  // addUserStatistic(obj) {
  //   return this.http.post(url + '/user-statistic', obj, httpOptions).toPromise();
  // }
  // addVoute(obj) {
  //   return this.http.post(url + '/user-voute', obj, httpOptions).toPromise();
  // }
  // megaSearch(queryString) {
  //   return this.http.get(`${url}/mega-search${queryString}`).toPromise();
  // }
  // editProduct(product) {
  //   return this.http.put(url + '/edit-product', product, httpOptions).toPromise();
  // }
  // contactsMail(mail) {
  //   return this.http.post(url + '/contacts-mail', mail, httpOptions).toPromise();

  // }

  // getAdminNotifications() {
  //   return this.http.get(url + '/admin-notifications',httpOptions).toPromise();
  // }
  // getAdminMessages(currentPage, sizePage) {
  //   return this.http.get(url + '/admin-messages/' + currentPage + '?size=' + sizePage, httpOptions).toPromise();
  // }

  // moveToArchiveAdminMessages(_id) {
  //   return this.http.put(url + '/move-to-archive-admin-messages', { _id }, httpOptions).toPromise();
  // }

  // moveToTransactionArchive(_id) {
  //   return this.http.put( url + '/transaction-archive', { _id }, httpOptions ).toPromise();
  // }

  // moveToTransactionFromArchive(_id) {
  //   return this.http.put( url + '/archive-to-transaction', { _id }, httpOptions ).toPromise();
  // }

  // getAdminMessagesFromArchive(currentPage, sizePage) {
  //   return this.http.get(url + '/admin-messages-archive/' + currentPage + '?size=' + sizePage, httpOptions).toPromise();
  // }
  // getTransactionsFromArchive(currentPage, sizePage) {
  //   return this.http.get(url + '/admin-transactions-archive/' + currentPage + '?size=' + sizePage, httpOptions).toPromise();

  // }  

  // getUniversalSearch(currentPage, queryString) {
  //   return this.http.get(`${url}/universal-search/${currentPage}${queryString}`, httpOptions).toPromise();

  // }

  createFingerPrint(systemInfo) {
    console.log(systemInfo)
    return this.http.post(url + '/session', systemInfo, httpOptions).toPromise(); 
  }
  
  getUserInfoIfLogged() {
    return this.http.get(url + '/get-user-info-if-logged', httpOptions).toPromise();
  }
  // getAll(model, currentPage, sizePage) {
  //   return this.http.get(`http://localhost:3000/all/${model}/${currentPage}?size=${sizePage}` , httpOptions).toPromise();
  // }  

}