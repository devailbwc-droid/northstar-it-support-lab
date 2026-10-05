# Northstar IT Support Lab

Double-click `Launch.cmd` or `Northstar IT Lab.html` to use the simulator in your regular browser, outside GPT. The standalone HTML contains the entire app and can be copied anywhere. No installation, server, GPT account or internet connection is required. `index.html` also works with its adjacent source files. For development, run `node server.js` to serve http://localhost:8741. All commands, people, devices and administrative actions are simulated; this does not administer your computer.

Start with INC-1047. Read the ticket, talk to the requester, investigate using the tools, make a change, and verify with the requester before documenting the resolution. The optional orientation explains controls without revealing the fix. Seven scenarios cover accounts, permissions, DNS, Group Policy, onboarding, and offboarding. Each ticket has its own environment and action history. Progress saves in this browser. Export a JSON backup before changing browsers or clearing browser data.

Command syntax examples are in the terminal's `help` output. Commands are a deliberately limited educational subset, not a complete shell. Messages and calls are scripted interactions, not live audio or AI chat. Wrong changes can interrupt access or violate least privilege. Reset a ticket to try again.

Exported Markdown distinguishes simulated experience from work performed in a real production environment. Review your notes before publishing; never represent this simulator as employment or actual Windows Server administration.

## Extend

`app.js`: edit the `scenarios` array and environment, command, verification and action handlers. `style.css`: presentation. `index.html`: app shell. `server.js`: dependency-free static server bound only to localhost. Use `node test.js` to run scenario and safety checks. Use `node build.js` after editing sources to regenerate the standalone app.
