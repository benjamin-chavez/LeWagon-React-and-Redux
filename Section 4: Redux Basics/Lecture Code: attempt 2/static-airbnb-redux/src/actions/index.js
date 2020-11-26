// Doing all your actions in one file like this is stylistic from le wagon. You could also do a seperate file for each action and export explicitly at the last line of each

import flats from "../flats";

export function setFlats() {
  // TODO: API Call! for now, this is just simulating the db

  return {
    type: "SET_FLATS",
    payload: flats,
  };
}

export function selectFlat(flat) {
  return {
    type: "SELECT_FLAT",
    payload: flat,
  };
}
