import Vue from "vue";
import { ACTIONS } from "./constants";

const addNotification = ({ type, title, text }) => {
  Vue.notify({
    group: "app",
    position: "left",
    type,
    title,
    text
  });
};

const addErrorNotification = (_, { message }) => {
  addNotification({
    type: "error",
    title: "Error",
    text: message
  });
};

export default {
  [ACTIONS.ADD_ERROR_NOTIFICATION]: addErrorNotification
};
