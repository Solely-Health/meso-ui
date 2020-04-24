import Signup from '../../../api/Signup'
import _user from '../../mutation-types/User';

export default {
    createUser({ commit, dispatch }, payload) {
     Signup.createUserAPI(
      payload,
      (success) => {
        console.log(success)
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
}