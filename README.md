# How does the browser fetch the desired result?

## What is the main functionality of the browser?

The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

## What are the High Level Components of a browser.

The browser's main components are:

- **The User Interface:-** The user interface is referred to as a space where a user can have to interact with the browser, The user interface consists of various numbers of elements and buttons, such as address bar, next and back button, refresh, stop and bookmark option etc. which helps in making the user interaction with the browser more interactive.

- **The Browser Engine:-** The browser engine behaves like a bridge between the user interface and the rendering engine.

- **The Rendering Engine:-** It’s the responsibility of the rendering engine to display the content which is requested by the end-user.

- **Networking:-** This component of the browser is responsible for retrieving the URLs, with the help of internet protocols. It handles the area of internet communication and security.

- **Javascript Interpreter:-** Javascript interpreter is solely responsible for interpreting and executing the javascript code. The final result which is received after the interpretation of the javascript code is then sent to the rendering engine.

- **UI Backend:-** UI backend is responsible for drawing various widgets like select box, input box, check box etc.

- **Data Persistence:-** It acts as a database on the local drive of the user's computer. It helps in managing the user data like cache, cookies, bookmarks, preferences etc.


![Browser components](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=650)


## Rendering engine and its use

The responsibility of the rendering engine is well… Rendering, that is display of the requested contents on the browser screen.

The work of the rendering engine starts once the user has requested a particular web page. The rendering engine starts receiving the Html, CSS and js files of the requested web page, through the networking layer. After receiving the content of the requested page, the following flow of the rendering engine begins:-

- The requested HTML and CSS files of the requested page are parsed in chunks. Dom nodes are created to form the Dom tree and CSSOM tree.
- The render tree is constructed by combining the Dom and CSSOM tree. The render tree contains both information about the order of the elements and their styling information. The render tree ensures that the content is displayed in the expected format.
- At this stage, every node is assigned with dedicated coordinates. To ensure that every element appears in the same position on the screen, this process is called the rendering process.
- In this stage, the render tree is traversed and every node as mentioned in the tree is painted on the screen.


## Parsers (HTML, CSS, etc)

Parsing is the step the browser takes to turn the data it receives over the network into the DOM and CSSOM, which is used by the renderer to paint a page to the screen. After the initial request to the server the browser receives a response containing the HTML resources of the webpage. Now the job of the browswer will be to start parsing the data.

### The Browser Engine

The browser engine is a core component of every major browser and it's main role is to combine structure (HTML) and style (CSS) so it can draw the web page on our screens. It is also responsible to find out which pieces of code are interactive. It should be consider like a separate piece of software but as being part of a bigger sofware i.e the browser.

### HTML PARSING

Let's assume the document looks like this:


            <!doctype HTML>
            <html>
                <head>
                    <title>This is my page</title>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body>
                    <h1>This is my page</h1>
                    <h3>This is a H3 header.</h3>
                    <p>This is a paragraph.</p>
                    <p>This is another paragraph,</p>
                </body>
            </html>            

HTML parsing involves two steps: **tokenization** and **tree construction** (building something called the **DOM Tree** (Document Object Model)).

- **Tokenization:-** It converts some input into tokens (basic components of source code). At the end of the tokenization process is a series of zero or more of the following tokens: DOCTYPE, start tag (<tag>), end tag (</tag>), self-closing tag (<tag/>), attribute names, values, comments, characters, end-of-file or plain text content within an elemen

![HTML5 Parser](https://res.cloudinary.com/practicaldev/image/fetch/s--yy-6k1E1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oy2l781kaik9tq6xvs4d.png)

- **Building the DOM:-** After the first token gets created, tree building starts. This is essentially creating a tree like structure (called the Document Object Model) based on the previously parsed tokens.

The DOM tree describes the content of the HTML document. The <html> element is the first tag and root node of the document tree. The tree reflects the relationships and hierarchies between different tags. We have parent nodes and tags nested within other tags are child nodes. The greater the number of nodes, the longer it will takes to build the DOM tree. Below is the DOM Tree for the HTML document example we got from the server:

![DOM Tree](https://res.cloudinary.com/practicaldev/image/fetch/s--Pd1hP5tb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8qdomt3z4u21pex1hhbw.png)


The parser works line by line, from top to bottom. When the parser will encounter non-blocking resources (for example images), the browser will request those images from the server and continue parsing. On the other hand, if it encounters blocking-resources (CSS stylesheets, Javascrpt files added in the <head> section of the HTML or fonts added from a CDN ), the parser will stop execution until all those blocking resources are downloaded. That's why, if yu're working with Javascript it is recommended to add your <script> tags at the end of the HTML file, or if you want to keep them in the <head> tag, you should add to them the defer or async attribute (async allows for asynchronous as soon as the script is downloaded and defer allows execution only after the whole document has been parsed.).

![Complete process of DOM creation](https://res.cloudinary.com/practicaldev/image/fetch/s--AQryP0on--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9h659kk44fxd4ke0soez.png)


### CSS PARSING

After the HTML has been parsed, it's time to parse the CSS (found in in external CSS files and in style elements) and build the CSSOM tree (CSS Object Model).

When the browser encounters a CSS stylesheet, be it external or embeded, it needs to parse the text into something it can use for styling the layouts. The data structure that the browser turns the CSS into is called the CSSOM. The DOM and the CSSOM follow similar concepts, in the sense that they are both trees, but they are different data structures. Just like building the DOM out of our HTML, building the CSSOM out of CSS is considered a render-blocking process.

- **Tokenization & building the CSSOM:-**Similar to HTML parsing, CSS parsing starts with tokenization. The CSS parser takes the bytes and converts them into characters, then tokens, then nodes and finally they are linked into the CSSOM. The browser does something called selector machting which means that each set of styles will be matched against all nodes (elements) on the page. 

![CSS Tokenizationa and CSSOM creation](https://res.cloudinary.com/practicaldev/image/fetch/s--pnop7Cu_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qyiwv33dqna9wai2p2wm.png)


The browser starts with the most general rule applicable to a node (e.g: if a node it's the child of the body element, then all body styles are inherited by that node) and then recursively refines the computed styles by applying more specific rules. This is why we say that the style rules are cascading.

Imagine we have the HTML and CSS below:

            body {
                font-size: 16px;
                color: white;
            } 

            h1 {
                font-size: 32px;
            }

            section {
                color: tomato;
            }

            section .mainTitle {
                margin-left: 5px
            }

            div {
                font-size: 20px;
            }

            div p {
                font-size:  8px;
                color: yellow;
            }


The CSSOM for this code would look something like this:


![CSS object model](https://res.cloudinary.com/practicaldev/image/fetch/s--dbDf1J0I--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6udct34olw9ekkwqbxws.png)

Note that in the schema above, the nested elements have both inherited styles (from the parent - e.g: h1 inherits its color from the body and the section inherits its font-size from the body) and their own styles (which can overwrite rules inherited from the parent or not - e.g: p overwrites both the color and the font-size inherited from the div and mainTitle doesn't get its left margin from a parent node).

Since we can have multiple sources for our CSS and they can contain rules that apply to the same node, the browser must decide which rule will apply in the end. That's when specificity comes into play.
