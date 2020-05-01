export default {
  VERIFY_LICENSES (state, payload) {
    payload.forEach((license) => {
      license.valid = (Math.random() > .5 ? 0 : 1);
    });
    state.licenses = payload;
  },
  REMOVE_LICENSE(state, payload) {
    if (state.licenses.length > 1 ) {
      state.licenses.splice(payload, 1);
    }
  },
  SET_LICENSE_NUMBER(state, payload ) {
    state.licenses[payload.index].licenseNumber = payload.licenseNumber;
  },
  ADD_LICENSE(state) {
    state.licenses.push(
      {
        licenseNumber: null,
        checked: false,
        valid: -1,
        licenseType: {
            boardCode: 0,
            licenseName: 'Registered Nurse',
            licenseCode: 224,
        },
      },
    );
  },
};
