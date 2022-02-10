import Vue from "vue";
import Router from "vue-router";
import PosComponent from "@/components/page/PosComponent";
import Store from "@/components/page/Store";
import Goods from "@/components/page/Goods";
import Member from "@/components/page/Member";
import Statistics from "@/components/page/Statistics";
import Improvements from "@/components/page/Improvements";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Goods",
      component: Goods
    },
    {
      path: "/pos",
      name: "PosComponent",
      component: PosComponent
    },
    {
      path: "/store",
      name: "Store",
      component: Store
    },
    {
      path: "/goods",
      name: "Goods",
      component: Goods
    },
    {
      path: "/member",
      name: "Member",
      component: Member
    },
    {
      path: "/statistics",
      name: "Statistics",
      component: Statistics
    },
    {
      path: "/improvements",
      name: "Improvements",
      component: Improvements
    },
  ]
});
