function get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}



fetch("https://api2.conpass.io/v2/nps/dashboard/5fcaad6a429544506bcf5563/2020-12-05/2021-02-19?&collectBy=all&offSet=1", {
  "headers": {
    "accept": "application/json",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "content-type": "application/json",
    "if-none-match": "W/\"870-OxfkGFtMbBkRDS5AUMKkVa8ykp4\"",
    "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiX2lkIjoiNWZjYTA0YjY0Mjk1NDQ1MDZiMjg0NmYzIn0sImN1cnJlbnRNZW1iZXIiOnsiX2lkIjoiNWZlYjU0NDA3N2I4YWMwYzQ5MGU3YjU4In0sImlhdCI6MTYwOTc3MzM4MX0.E_MaUH0cps8p_FnArSe84wGlIQG5VI2BTbLklhGOVyE"},"referrer": "https://app.conpass.io/","referrerPolicy": "strict-origin-when-cross-origin","body": null,"method": "GET","mode": "cors","credentials": "omit"})
    .then(response => response.json()).then(console.log);