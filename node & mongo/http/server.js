const http = require("http");
const url = require("url");

// Mock database
let users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
];

// Utility to parse request body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject("Invalid JSON");
      }
    });
  });
}

// Helper to send JSON response
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true); // true to get query
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Log each request
  console.log(`${method} ${pathname}`);

  // -------- GET /users or /users?id=123 --------
  if (method === "GET" && pathname === "/users") {
    const { id } = parsedUrl.query;
    if (id) {
      const user = users.find((u) => u.id === id);
      return user
        ? sendJson(res, 200, user)
        : sendJson(res, 404, { error: "User not found" });
    }
    return sendJson(res, 200, users);
  }

  // -------- GET /users/:id --------
  if (method === "GET" && pathname.startsWith("/users/")) {
    const id = pathname.split("/")[2];
    const user = users.find((u) => u.id === id);
    return user
      ? sendJson(res, 200, user)
      : sendJson(res, 404, { error: "User not found" });
  }

  // -------- POST /users --------
  if (method === "POST" && pathname === "/users") {
    try {
      const body = await parseBody(req);
      const newUser = { id: String(Date.now()), ...body };
      users.push(newUser);
      return sendJson(res, 201, newUser);
    } catch (error) {
      return sendJson(res, 400, { error });
    }
  }

  // -------- PUT /users/:id --------
  if (method === "PUT" && pathname.startsWith("/users/")) {
    const id = pathname.split("/")[2];
    try {
      const body = await parseBody(req);
      let user = users.find((u) => u.id === id);
      if (!user) return sendJson(res, 404, { error: "User not found" });
      user = Object.assign(user, body);
      return sendJson(res, 200, user);
    } catch (error) {
      return sendJson(res, 400, { error });
    }
  }

  // -------- DELETE /users/:id --------
  if (method === "DELETE" && pathname.startsWith("/users/")) {
    const id = pathname.split("/")[2];
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return sendJson(res, 404, { error: "User not found" });
    const deleted = users.splice(index, 1)[0];
    return sendJson(res, 200, deleted);
  }

  // -------- 404 Fallback --------
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route not found" }));
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
