import Vue from "vue";
import VueRouter from "vue-router";
import InputFile from "@/components/input/InputFile.vue";
import InputVueDropZone from "@/components/inputVueDropZone/InputVueDropZone.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inputfile",
    component: InputFile
  },

  {
    path: "/vuedropzone",
    name: "home",
    component: InputVueDropZone
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
