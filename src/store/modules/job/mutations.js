export default {
  SET_DISCOVER_JOBS (state, payload) {
    for(let position of payload.positions){
      [position["StartDate"], position["Start"]] = position.StartDateTime.split(' ');
      [position['EndDate'], position['End']] = position.EndDateTime.split(' ');
    }
    state.discoverJobs = payload.positions;
  },
}