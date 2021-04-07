import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchMenu = (category) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });

  axios
    .get(
      `http://localhost:3001/menu?${
        category !== null ? `category=${category}` : ""
      }`
    )

    // .get(
    //   `/menu?${category !== null ? `category=${category}` : ''}
    //   }`,
    // )
    .then(({ data }) => {
      dispatch(setMenu(data));
    });
};

export const setMenu = (items) => ({
  type: "SET_MENU",
  payload: items,
});
