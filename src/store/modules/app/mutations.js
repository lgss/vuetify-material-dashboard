import { set, toggle } from '@/utils/vuex'

export default {
  setDrawer: set('drawer'),
  setImage: set('image'),
  setColor: set('color'),
  setProspectToProject: set('prospectToProject'),
  toggleDrawer: toggle('drawer'),
  setProjects: function(state, data) {
    state.projects = data.projects; //['project1','project2'...etc];
  }
}
