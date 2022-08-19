# How does the browser fetch the desired result?

## What is the main functionality of the browser?

The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

## What are the High Level Components of a browser.

The browser's main components are:

- **The User Interface:** The user interface is referred to as a space where a user can have to interact with the browser, The user interface consists of various numbers of elements and buttons, such as address bar, next and back button, refresh, stop and bookmark option etc. which helps in making the user interaction with the browser more interactive.

- **The Browser Engine:** The browser engine behaves like a bridge between the user interface and the rendering engine.

- **The Rendering Engine:** It’s the responsibility of the rendering engine to display the content which is requested by the end-user.

- **Networking:** This component of the browser is responsible for retrieving the URLs, with the help of internet protocols. It handles the area of internet communication and security.

- **Javascript Interpreter:** Javascript interpreter is solely responsible for interpreting and executing the javascript code. The final result which is received after the interpretation of the javascript code is then sent to the rendering engine.

- **UI Backend:** UI backend is responsible for drawing various widgets like select box, input box, check box etc.

- **Data Persistence:** It acts as a database on the local drive of the user's computer. It helps in managing the user data like cache, cookies, bookmarks, preferences etc


![Browser components](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=650)