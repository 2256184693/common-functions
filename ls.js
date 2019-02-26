export default {
  /**
   * @param type (String)
   * @param key (String)
   * @param val (String)
   */
  set(type, key, val) {
    const myVal = JSON.stringify(val);
    type.setItem(key, myVal);
    return true;
  },
  /**
   * @param type (String)
   * @param key (String)
   * @param value (String)
   */
  get(type, key) {
    const myVal = type.getItem(key);
    if (myVal === undefined) {
      return '';
    }
    return JSON.parse(myVal);
  },
  /**
   * @param key (String)
   */
  delete(key) {
    return window.localStorage.removeItem(key);
  },
  clear() {
    return window.localStorage.clear();
  }
};
