export default function handler(req, res) {
const target = "https://chat.whatsapp.com/F3keJnfzvks3dWHuoDdupa";

res.writeHead(302, {
Location: target,
"Cache-Control": "no-store"
});

res.end();
}
