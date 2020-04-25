import License from '../../../api/License'
import _user from '../../mutation-types/User';

export default {
    verifyLicenses({ commit, dispatch }, payload) {
      payload.licenses.forEach((license) => {
        license.firstName = payload.userInfo.firstName;
        license.lastName = payload.userInfo.lastName;
      });
      License.verifyLicenseAPI(
      payload,
      (success) => {        
        commit("VERIFY_LICENSES", payload.licenses)
      },
      () => dispatch(),
    );
  },
};