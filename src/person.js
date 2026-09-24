"use strict";

/**
 * Creates a person with the given props
 * @param {Object} props
 * @param {string} props.firstName
 * @param {string} props.lastName
 * @param {string} props.nickName
 * @param {string} props.email
 */
class Person {
  constructor({ firstName, lastName, nickName, email }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.email = email;
  }
}

export default Person;
