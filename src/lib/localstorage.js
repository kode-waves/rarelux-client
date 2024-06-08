class LocalStorage {
    static Get(name) {
        if (typeof localStorage !== 'undefined') {
            const response = localStorage.getItem(name);
            return response
          } else {
           return
          }
    }

    static Create(name, value) {
        if (typeof localStorage !== 'undefined') {
            const response =  localStorage.setItem(name, value);
            return response
          } else {
           return
          }
    }
    static Delete(name) {
        if (typeof localStorage !== 'undefined') {
            const response =  localStorage.removeItem(name);
            return response
          } else {
           return
          }
    }
}

const storage = LocalStorage;

export default storage