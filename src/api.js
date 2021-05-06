import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyBlVYUieQoBR1R1s1Vz-ZlTfi3E98tNewA',//api key for rohitparakhus
      // key: 'AIzaSyB8aVOiN6b2xqUqtOloG0AW6qwXq38521g',//api key for rohitparakh4
   },
})

export default request
