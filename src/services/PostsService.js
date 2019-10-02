import Api from '@/services/Api'

export default {
  addUser (params) {
    console.log(params);
    return Api().post('/signup', params);
  },
  postUser (params){
    console.log(params);
    return Api().post('/login', params);
  },
  postUser1(params){
    console.log(params);
    return Api().post('/forgot/password', params);
  },
  fetchCities(params){
    console.log(params);
    return Api().post('/cities', params);
  }
}