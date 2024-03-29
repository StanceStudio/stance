import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: "UA-152783995-1" },
      appName: "stance",
    },
    app.router
  );
};
