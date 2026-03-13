# Thing Description Editor Prototype

A lightweight web-based JSON editor built using Monaco Editor.
This project demonstrates how structured device descriptions can be edited, validated, and visualized directly in the browser.

## Live Demo

https://dazzling-biscotti-c48c41.netlify.app/

---

## Overview

This prototype implements a browser-based code editor designed for editing structured JSON documents that describe devices and their capabilities.

The application combines a Monaco-powered editor with validation, autocomplete suggestions, and a visual preview panel that interprets the JSON structure.

---

## Features

### Monaco-Based Code Editor

A powerful in-browser editor powered by Monaco Editor (the same editor engine used in Visual Studio Code).

### JSON Schema Validation

Basic schema validation ensures the document structure is correct and required fields are present.

### Autocomplete Suggestions

The editor provides suggestions for common fields such as:

* title
* properties
* actions
* events

### Live Preview Panel

The preview panel parses the JSON content and displays a simplified representation of the device structure.

### JSON Formatting

Automatically format the document using built-in Monaco formatting capabilities.

### Download / Export

Download the current JSON document as a file.

### Theme Switching

Switch between light and dark editor themes.

---

## Project Structure

```
td-editor-prototype
│
├── index.html
├── style.css
├── script.js
└── tdSchema.js
```

---

## Technologies Used

* Monaco Editor
* JavaScript
* HTML
* CSS

---

## Running the Project Locally

Clone the repository:

```
git clone https://github.com/Pranav-0440/td-editor-prototype.git
```

Navigate into the project directory:

```
cd td-editor-prototype
```

Run a local server (example using live-server):

```
live-server
```

Then open:

```
http://127.0.0.1:8080
```

---