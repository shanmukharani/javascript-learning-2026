# JavaScript Learning Repository

This repository contains my practice and learning notes while studying core **JavaScript concepts**.
The focus is on understanding how JavaScript works in the browser, including DOM manipulation, event handling, and asynchronous programming.

---

## 📚 Topics Covered

* DOM Manipulation
* Event Handling
* Promises
* Async / Await
* JavaScript Event Loop
* Performance Basics
* Closures

---

# 🌐 DOM Manipulation

### Selecting Elements

Practiced different methods to select elements from the DOM:

* `getElementById()`
* `getElementsByClassName()`
* `querySelector()`
* `querySelectorAll()`

### Modifying Content

Learned how to change HTML and text content dynamically:

* `innerHTML`
* `innerText`
* `outerHTML`
* `textContent`

Compared how each method behaves when modifying HTML or plain text.

### Creating and Removing Elements

* `document.createElement()`
* `appendChild()`
* `insertAdjacentElement()`
* `removeChild()`

Learned how elements move in the DOM when appended to a new parent.

### Styling Elements Using JavaScript

* `.style`
* `.cssText`
* `.setAttribute()`
* `.classList`

Used these methods to dynamically apply CSS styling.

---

# 🎯 Event Handling

### Event Listeners

* Adding event listeners using `addEventListener()`
* Removing event listeners using `removeEventListener()`

### Event Object

Learned how to access event information using the **event object**.

### Preventing Default Behavior

Used:

* `event.preventDefault()`

to stop default browser actions such as form submissions or link navigation.

### Event Target

Used `event.target` to identify which element triggered the event.

---

# ⚡ Asynchronous JavaScript

### Promises

Practiced working with Promises:

* Creating a Promise
* `resolve()` and `reject()`
* Handling results using `.then()`
* Handling errors using `.catch()`

### Async / Await

Learned a cleaner way to work with asynchronous code:

* `async` functions
* `await` keyword
* Error handling using `try...catch`

---

# 🔁 JavaScript Event Loop

Studied how JavaScript manages asynchronous tasks.

Key components:

* **Call Stack**
* **Web APIs**
* **Callback Queue**
* **Microtask Queue**
* **Event Loop**

Understood how asynchronous code is executed without blocking the main thread.

---

# 🚀 Performance Concepts

Basic understanding of JavaScript performance:

* **Synchronous vs Asynchronous execution**
* **Non-blocking behavior**
* Importance of asynchronous programming for better performance

---

# 🛠 Practice Focus

This repository focuses on improving:

* DOM interaction
* Event-driven programming
* Understanding JavaScript runtime behavior
* Writing cleaner asynchronous code

---

---

# 🧠 Closures

Learned how JavaScript functions retain access to variables from their lexical scope even after the outer function has finished execution.

Key understandings:

* Functions can remember variables from their outer scope
* Closures help maintain state between function calls
* Useful for data encapsulation and controlled access to variables

---

# 📈 Learning Goal

To build a strong foundation in **JavaScript fundamentals** before moving into:

* APIs and Fetch
* Advanced JavaScript concepts
* Frontend frameworks
* Full-stack development

