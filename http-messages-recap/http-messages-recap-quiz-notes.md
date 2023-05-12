# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  In computing,[1] a client is a piece of computer hardware or software that accesses a service made available by a server as part of the client–server model
- What is a server?
  A server is a computer program or device that provides a service to another computer program and its user, also known as the client.- Which HTTP method does a browser issue to a web server when you visit a URL?
  GET, POST, PUT, PATCH, DELETE, or a handful of other HTTP verbs. request target?
- What is on the first line of an HTTP **request** message?
  The protocol version, usually HTTP/1.1 . A status code, indicating success or failure of the request.
- What is on the first line of an HTTP **response** message?
  The status line
- What are HTTP headers?
  a field of an HTTP request or response that passes additional context and metadata about the request or response.
- Is a body required for a valid HTTP message?
  no
  HTTP requests have a body if they have a Content-Length or Transfer-Encoding header (RFC 2616 4.3). If the request has neither, it has no body, and your server should treat it as such.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
