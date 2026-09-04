"use strict";

/**
 * Creates a DOM element and adds class name and text
 * @param {string} tag
 * @param {string} [className]
 * @param {string} [text]
 * @returns {HTMLElement} created element
 */
function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) element.classList.add(className);
  if (text) element.textContent = text;

  return element;
}

/**
 * Creates input with id, placeholder
 * @param {string} type
 * @param {string} id
 * @param {string} placeholder
 * @returns {HTMLInputElement} created input
 */
function createInput(type, id, placeholder) {
  const input = document.createElement("input");

  input.setAttribute("type", type);
  input.setAttribute("id", id);
  input.setAttribute("placeholder", placeholder);

  return input;
}

/**
 * Creates radio button with title, description
 * @param {string} id
 * @param {string} value
 * @param {boolean} isChecked
 * @param {string} title
 * @param {string} description
 * @returns {HTMLDivElement} created role box
 */
function createRoleBox(id, value, isChecked, title, description) {
  const roleBox = createElement("div", "role-box");
  const roleText = createElement("label", "role-text");
  const roleTitle = createElement("span", "role-title", title);
  const roleDesc = createElement("span", "role-desc", description);
  const radio = document.createElement("input");

  radio.setAttribute("type", "radio");
  radio.setAttribute("id", id);
  radio.setAttribute("name", "acc_type");
  radio.setAttribute("value", value);

  if (isChecked) radio.setAttribute("checked", "");

  roleText.setAttribute("for", id);
  roleText.append(roleTitle, roleDesc);
  roleBox.append(radio, roleText);

  return roleBox;
}

// header
const container = createElement("div", "reg-container");
const header = createElement("div", "reg-header");
const headerTitle = createElement("h1", null, "CREATE AN ACCOUNT");
const headerText = createElement("p", null, "We always keep your name and email address private.");

header.append(headerTitle, headerText);

// inputs
const form = document.createElement("form");
const inputData = createElement("div", "input-data");
const inputOptions = [
  ["text", "first-name", "First name"],
  ["text", "last-name", "Last name"],
  ["text", "display-name", "Display Name"],
  ["email", "email", "Email Address"],
  ["password", "pass", "Password"],
  ["password", "pass-confirm", "Password Confirmation"],
];

inputOptions.forEach(([type, id, placeholder]) => {
  inputData.append(createInput(type, id, placeholder));
});

// radio buttons
const roleSelect = createElement("div", "role-select");

roleSelect.append(
  createRoleBox(
    "buyer",
    "buyer",
    true,
    "Join As a Buyer",
    "I am looking for a Name, Logo or Tagline for my business, brand or product.",
  ),
  createRoleBox(
    "seller",
    "seller",
    false,
    "Join As a Creative or Marketplace Seller",
    "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.",
  ),
);

// checkbox
const marketingCheck = createElement("div", "marketing-check");
const marketingInput = document.createElement("input");
const marketingLabel = createElement(
  "label",
  null,
  "Allow Squadhelp to send marketing/promotional offers from time to time",
);

marketingInput.setAttribute("type", "checkbox");
marketingInput.setAttribute("id", "marketing");
marketingLabel.setAttribute("for", "marketing");
marketingCheck.append(marketingInput, marketingLabel);

// submit button
const submitBtn = createElement("button", "submit-btn", "Create account");
submitBtn.setAttribute("type", "submit");

form.append(inputData, roleSelect, marketingCheck, submitBtn);
container.append(header, form);
document.body.append(container);
