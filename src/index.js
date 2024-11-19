import { replacePrompt, displayPrompt, handleInput } from './utils.js';

export const terminal = document.getElementById("terminal");
export let dir = "~";


export function processCommand(cmd) {
  if (!cmd) {
    return;
  }

  // remove currPrompt and replace input with p
  replacePrompt();

  // create response element and default message
  const response = document.createElement("p");
  response.classList.add("response");

  // set up local storage
  if (!localStorage.getItem("history")) {
    localStorage.setItem("history", []);
  }

  // process and handle input
  const splitCmd = cmd.split(' ');
  const command = splitCmd[0];
  const args = splitCmd.splice(1);
  handleInput(command, args, response)

  const history = localStorage.getItem('history');

  // show response in terminal
  terminal.appendChild(response);
  displayPrompt();
}

// on load
displayPrompt();