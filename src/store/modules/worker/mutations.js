export default {
  SAVE_USER_INFO (state, payload) {
    state.userInfo = payload;
  },
  ADD_SKILLS(state,payload) {
    state.userInfo.skills = payload.payload;
  },
  ADD_LOCATION(state, payload) {
    state.userInfo.location = payload.payload;
  },
  ADD_LICENSES_TO_USER_INFO(state, payload){ 
    state.userInfo.licenses = payload;
  }
}
