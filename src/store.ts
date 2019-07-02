import Vue from 'vue'
import Vuex from 'vuex'
import {userInfo,goodList,cartPage} from '@/store/model.ts'
import axios from '@/global/axios.ts'
import {API} from '@/global/api.ts'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listData:[{id:0,message:"首页"},{id:1,message:"男装"},{id:2,message:"生鲜"},{id:3,message:"母婴"},{id:4,message:"硕码"},{id:5,message:"食品"}],
    pageLoad: !0,
    homeBanner: [],
    list:[],
    shopgoodlist:[],
    TitleList:"",
    cateList:[],
    //商品详情信息
    goodList,
    cartPage,
    userInfo
  },
  mutations: {
    setPageLoad(state, load) {
      setTimeout(() => {
        state.pageLoad = load;
      }, 1000);
    },
    setUser(state, info) {
      state.userInfo = info;
    },
    setHomeBanner(state, list) {
      state.homeBanner = list;
    },
    setHomeList(state, list) {
      state.list = list
    },
    setShopgoodlist(state,list){
      state.shopgoodlist =list
    },
    setGoodList(state,list) {
      // 商品详情页信息
      state.goodList = list
    },
    setCateList(state, erlist) {
      state.cateList = erlist;
    },
    setTitleList(state, title) {
      state.TitleList = title;
    },
  },
  actions: {
    initUserInfo (context) {
      if (context.state.userInfo.id !== 0) {
        return !1;
      };
      axios.get(API.user,{}).then((res:any)=>{
        context.commit('setUser', res.data) 
      }).catch((err) =>{
        console.log(err+'请求有误')
      })
      context.commit('setPageLoad',!1)
    },
    initHomePage (context) {
      if(context.state.homeBanner.length === 0){
        axios.get(API.banner,{}).then((res:any)=>{
          context.commit('setHomeBanner', res.data)
        }).catch((err) =>{
          console.log(err+'请求有误')
        })
      }
      if(context.state.list.length === 0){
        axios.get(API.list,{}).then((res:any) =>{
          // console.log(res.data)
          context.commit('setHomeList', res.data)
        }).catch((err) =>{
          console.log(err+'请求有误')
        })
      }
      if(context.state.shopgoodlist.length === 0) {
        axios.get(API.shopgoodlist,{}).then((res:any) =>{
          context.commit('setShopgoodlist',res.data)
        })
      }
      context.commit('setPageLoad',!1)
    },
    interShopDeatil (context,gid) {
      axios.get(API.goodList,{params:{gid}}).then((res:any) =>{
         console.log(res)
         context.commit('setGoodList',res.data)
      })
      context.commit('setPageLoad',!1)
    },
    intercartPage(context,Lid) {
      axios.get(API.cartPage, { params: { Lid } }).then((response: any) => {
        context.commit('setCateList', response.data.data);
        context.commit('setTitleList', response.data.title);
      });
      context.commit('setPageLoad', !1);
    }
  }
})
