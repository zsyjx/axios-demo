<script setup>
import axios from "axios";
import ajax from "./http/index.js";
axios.defaults.baseURL = "http://demo.itlike.com/web/xlmc/api";
const getReq = () => {
  /*
  axios
    .get("http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  */
  // axios.post('http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001',{
  //  params:{
  //  'id':'lk0088'
  // }
  //}).then((res)=>{
  //  console.log(res.data);
  //}).catch((err)=>{
  //    console.log(err);
  // })
};

const getAll = () => {
  // axios.all([     /*get请求method参数可以忽略*/
  // axios({url:'/homeApi/categoriesdetail/lk001'}),
  //  axios({url:'/homeApi/categoriesdetail/lk002'})
  // ]).then((res)=>{
  //  console.log(res.length);  //返回的是数组，可以使用索引
  //  console.log(res[0].data);
  //  console.log(res[1].data);
  // }).catch((err)=>{
  //   console.log(err);
  // });
};

const getRep2 = () => {
  axios("http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001").then((res) => {
      console.log(res.data);
    }).catch(() => {
      console.log(err);
    });
}
 const getAll2 = ()=>{
       Promise.all([ /*因为不显式使用axios.all()，所以必须使用Promise替换*/
         /*get请求method参数可以忽略*/        
         ajax("http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001"),
         ajax("http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk002")
       ]).then((res)=>{
         console.log(res);//返回的是数组，可以使用索引
       }).catch((err)=>{
          console.log(err);
       });
    }


</script>

<template>
  <div>
    <h2>axios入门</h2>
    <button @click="getReq">请求</button> &nbsp;
    <button @click="getAll">并发</button> &nbsp;
    <button @click="getReq2">封装请求</button> &nbsp;
    <button @click="getAll2">并发请求</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
