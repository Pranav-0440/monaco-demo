# Thing Description Editor Prototype

A lightweight prototype editor for **Web of Things Thing Descriptions (TD)** built using **Monaco Editor**.
This project was created to explore the architecture and editing concepts used in WoT tooling such as EdiTDor.

## Live Demo

https://dazzling-biscotti-c48c41.netlify.app/

---

## Overview

This prototype demonstrates how a modern developer tool can be built using Monaco Editor to edit and validate Thing Description JSON files.

It includes basic features such as:

* JSON editing using Monaco Editor
* Thing Description schema validation
* Autocomplete suggestions for TD fields
* Live preview of device structure
* JSON formatting
* Download/export functionality
* Light and dark theme switching

The project is designed as a learning prototype to understand the structure of WoT editing tools and how editors like EdiTDor integrate Monaco for JSON editing and validation.

---

## Features

### Monaco-based JSON Editor

A powerful in-browser editor powered by Monaco Editor, the same editor used in VS Code.

### Thing Description Schema Validation

Basic schema validation ensures required TD fields are present and JSON structure is correct.

### Autocomplete Suggestions

Suggestions for common TD fields including:

* title
* properties
* actions
* events

### Live Preview Panel

The preview panel parses the JSON and displays device information in a simplified human-readable format.

### JSON Formatting

Automatically format the JSON document using Monaco formatting capabilities.

### Download Functionality

Export the Thing Description JSON file directly from the editor.

### Theme Switching

Switch between light and dark themes.

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

## How to Run Locally

Clone the repository:

```
git clone https://github.com/Pranav-0440/td-editor-prototype.git
```

Navigate into the folder:

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

## Motivation

This project was created as a learning prototype to better understand:

* Monaco Editor integration
* JSON schema validation
* editor architecture used in Web of Things tooling
* developer tooling for Thing Descriptions

---