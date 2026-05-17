const backendBaseUrl = process.env.BACKEND_API_URL || "https://darak.runasp.net/API";

const hopByHopHeaders = new Set([
  "connection",
  "content-length",
  "expect",
  "host",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
]);

function buildTargetUrl(request, pathParts) {
  const path = pathParts.map(encodeURIComponent).join("/");
  const target = new URL(`${backendBaseUrl.replace(/\/$/, "")}/${path}`);
  target.search = new URL(request.url).search;
  return target;
}

function buildHeaders(request) {
  const headers = new Headers();

  request.headers.forEach((value, key) => {
    if (!hopByHopHeaders.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });

  return headers;
}

async function proxy(request, context) {
  const { path = [] } = await context.params;
  const target = buildTargetUrl(request, path);
  const method = request.method.toUpperCase();

  const response = await fetch(target, {
    method,
    headers: buildHeaders(request),
    body: method === "GET" || method === "HEAD" ? undefined : await request.arrayBuffer(),
    cache: "no-store",
  });

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

export const GET = proxy;
export const POST = proxy;
export const PUT = proxy;
export const PATCH = proxy;
export const DELETE = proxy;
