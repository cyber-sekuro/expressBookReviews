curl.exe -sS -i -X POST "http://localhost:5000/customer/login" -H "Content-Type: application/json" -d '{\"username\":\"testuser03\",\"password\":\"TestPass123\"}'
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 41
ETag: W/"29-ldhdojv0pqKaca4wRCr3sxVmVfs"
Date: Mon, 26 Oct 2026 14:05:32 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"User successfully logged in"}