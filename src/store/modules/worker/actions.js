import Signup from '../../../api/Signup'
import _user from '../../mutation-types/User';

export default {
  createUser({ commit, dispatch }, payload) {
      Signup.createUserAPI(
        payload,
        (success) => {
        console.log(success)
        payload.workerId = success.workerId;
        commit("SAVE_USER_INFO", payload);
      },
      () => dispatch(),
    );
  },
  getAllUsers({}, payload) {
      Signup.getAllUsersAPI(
            payload,
            (success) => {
                console.log(success)
            }
        );
  },
  addSkills({commit, dispatch}, payload) {
    Signup.addSkillsAPI(
      payload,
      (success) =>{ 
        commit("ADD_SKILLS",{success: success, payload: payload});
      },
      ()=> dispatch(),
    );
  },
  addLocation({commit, dispatch}, payload) {
    Signup.addLocationAPI(
      payload,
      (success) => {
        commit('ADD_LOCATION', {success: success, payload: payload})
      },
      ()=> dispatch(),
    );
  },
  addLicensesToUserInfo({commit, dispatch}, payload) {
      commit('ADD_LICENSES_TO_USER_INFO', payload)
    
  }
}