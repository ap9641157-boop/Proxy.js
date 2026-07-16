// Filtro de tráfico local
let responseBody = $response.body;
console.log("Tráfico interceptado con éxito");
$done({ body: responseBody });
