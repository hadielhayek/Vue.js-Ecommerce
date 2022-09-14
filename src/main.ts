import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import "./style/main.scss";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

createApp(App).use(store).mount("#app");
