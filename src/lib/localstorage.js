class LocalStorage {
    static Get(name) {
        if (typeof localStorage !== 'undefined') {
            const response = localStorage.getItem(name);
            return response
          } else {
            console.error("localStorage is not available in this environment");
          }
    }

    static Create(name, value) {
        if (typeof localStorage !== 'undefined') {
            const response =  localStorage.setItem(name, value);
            return response
          } else {
            console.error("localStorage is not available in this environment");
          }
    }
    static Delete(name) {
        if (typeof localStorage !== 'undefined') {
            const response =  localStorage.removeItem(name);
            return response
          } else {
            console.error("localStorage is not available in this environment");
          }
    }
}

const storage = LocalStorage;

export default storage