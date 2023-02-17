const removePenaltyPoints = () => {
    if (localStorage.getItem("penalty-points")) {
        localStorage.removeItem("penalty-points");
      }
};

export default removePenaltyPoints;