export const getBarks = (user) => {
    return $.ajax({
      method: "GET",
      url: "/api/barks",
      data: {
        user_id: user.id,
      },
    });
  };

export const get10Barks = () => {
    return $.ajax({
        method: "GET",
        url: "/api/barks/get10",
    });
}
  
  export const getBark = (id) => {
    return $.ajax({
      method: "GET",
      url: `api/barks/${id}`,
    });
  };
  
  export const createBark = (bark) => {
    return $.ajax({
      method: "POST",
      url: `api/barks`,
      data: {
        bark,
      },
    });
  };
  
  export const updateBark = (bark) => {
    return $.ajax({
      method: "PATCH",
      url: `api/barks/${bark.id}`,
      data: {
        bark,
      },
    });
  };
  
  export const deleteBark = (bark) => {
    return $.ajax({
      method: "DELETE",
      url: `api/barks/${bark.id}`,
      data: {
        bark,
      },
    });
  };
  