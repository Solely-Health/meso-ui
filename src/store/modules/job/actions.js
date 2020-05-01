import Discover from '../../../api/Discover';
import _user from '../../mutation-types/User';

export default {
  getAllPositions({commit, dispatch}, payload){
    Discover.getAllPositionsAPI(
      (success)=> {
        console.log(success);
        commit("SET_DISCOVER_JOBS", success);
      },
      () => dispatch(),
    );
  },
}