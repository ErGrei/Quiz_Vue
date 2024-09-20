import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users: [],
    currentUser: {},
  }),
  actions: {
    /**
     * Search for a user in the array of all users by name
     * @param {Object} objUser - object with the name of the user to search for
     * @returns {Object} - the user object, or undefined if not found
     */
    getUsers: function (objUser) {
      return this.users.find((user) => user.name === objUser.name);
    },

    /**
     * Set the current user and add it to the array of all users
     * @param {Object} objUser - the user object to set as the current user
     */
    settUsers: function (objUser) {
      this.users.push(objUser);
      this.currentUser = objUser;
    },
    addUser: function (objUser) {
      //   console.log("addUser component", obj);
      //   this.users.push(objUser);
      console.log(this.users);
      const existingUser = this.getUsers(objUser);
      console.log(existingUser);

      existingUser ? (this.currentUser = objUser) : this.settUsers(objUser);
      //   if (!existingUser) {
      //     this.settUsers(objUser);
      //   }
      console.log(this.users);
      //   if (existingUser) {
      //     currentUserId.value = existingUser.id;
      //   } else {
      //     currentUserId.value = this.user.id;
      //     this.users.push(user);
      //   }
      //   console.log(users.value);
    },
  },
});
