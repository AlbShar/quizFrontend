const getIdUser = <T extends string>(key: T): T => {
    return JSON.parse(localStorage.getItem(key) || "");
};

export { getIdUser };
