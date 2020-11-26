import flats from "../flats";

export const SET_FLATS = "SET_FLATS";
export const SELECT_FLAT = "SELECT_FLAT";

export function setFlats() {
  // Static data from local js file
  // return {
  //   type: "SET_FLATS",
  //   payload: flats
  // };

  // Fetch Method 1
  // return fetch(
  //   "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     return {
  //       type: "SET_FLATS",
  //       payload: data,
  //     };
  //   });

  // Fetch Method 2
  const promise = fetch(
    "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
  ).then((response) => response.json());
  return {
    type: SET_FLATS,
    payload: promise,
  };
}

export function selectFlat(flat) {
  return {
    type: SELECT_FLAT,
    payload: flat,
  };
}
