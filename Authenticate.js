import Cookie from "js-cookie";
// import React from "react";
class Authenticate {
  constructor() {
    this.authenticated = false;
  }
  isAuthenticated() {
    if (Cookie.get("authenticated")) {
      return true;
    } else {
      return this.authenticated;
    }
  }
}
export default new Authenticate();
