import axios from "axios";

// https://vuex.vuejs.org/en/actions.html

export default {
  async getProjects (context) {
    const response = await fetch('/api/v1/projects');
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
    context.commit("setProjects", myJson);
  }
}
  