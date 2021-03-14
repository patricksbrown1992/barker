export const getBarksForUser = (id) => {
    return $.ajax({
      method: "GET",
      url: `/api/users/${id}`,
    });
  };