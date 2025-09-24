const mete = [
  {
    titolo: "Parigi",
    descrizione: "La città dell'amore, famosa per la Torre Eiffel e i musei.",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=60",
    price: "1200",
  },
  {
    titolo: "Tokyo",
    descrizione: "Tradizione e tecnologia si incontrano nella capitale giapponese.",
    img: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
    price: "3100",
  },
  {
    titolo: "New York",
    descrizione: "La città che non dorme mai, tra grattacieli e Broadway.",
    img: "https://media.istockphoto.com/id/178735930/it/foto/new-york-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=4E8asFfZS9Oy_V4SMvsIpMxkWyO0AGXoJh0KTmfXtFg=",
    price: "1850",
  },
  {
    titolo: "Roma",
    descrizione: "Storia millenaria, arte e cucina italiana.",
    img: "https://plus.unsplash.com/premium_photo-1661962723801-1015e61ec340?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9tYSUyMGNvbG9zc2VvfGVufDB8fDB8fHww",
    price: "1000",
  },
  {
    titolo: "Sydney",
    descrizione: "Spiagge, surf e la famosa Opera House.",
    img: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN5ZG5leXxlbnwwfHwwfHx8MA%3D%3D",
    price: "2500",
  },
  {
    titolo: "Barcellona",
    descrizione: "Arte, spiagge e la vivace vita notturna catalana.",
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhcmNlbGxvbmF8ZW58MHx8MHx8fDA%3D",
    price: "899",
  },
  {
    titolo: "Cape Town",
    descrizione: "Panorami mozzafiato tra oceano e Table Mountain.",
    img: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwZSUyMHRvd258ZW58MHx8MHx8fDA%3D",
    price: "1999",
  },
  {
    titolo: "Bangkok",
    descrizione: "Templi dorati, mercati galleggianti e street food unico.",
    img: "https://images.unsplash.com/photo-1601224335112-b74158e231ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhbmdrb2t8ZW58MHx8MHx8fDA%3D",
    price: "2250",
  },
  {
    titolo: "Vancouver",
    descrizione: "Natura, sport e una città moderna tra mare e montagne.",
    img: "https://images.unsplash.com/photo-1578961509811-1f55a380e31f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhbmNvdXZlcnxlbnwwfHwwfHx8MA%3D%3D",
    price: "1150",
  },
  {
    titolo: "Rio de Janeiro",
    descrizione: "Spiagge famose, samba e il Cristo Redentore.",
    img: "https://media.istockphoto.com/id/608540602/it/foto/panorama-aereo-della-baia-di-botafogo-rio-de-janeiro.webp?a=1&b=1&s=612x612&w=0&k=20&c=6Z6IUNKyTnPVU8hpBQPVHJn2xF6KVPNiVA-aHEkCBpg=",
    price: "2700",
  },
  {
    titolo: "Istanbul",
    descrizione: "Dove Oriente e Occidente si incontrano tra bazar e moschee.",
    img: "https://media.istockphoto.com/id/475460738/it/foto/moschea-blu-la-basilica-di-santa-sofia-kiev.webp?a=1&b=1&s=612x612&w=0&k=20&c=rWeRonhXuGlZhP-XyGfy-EH1VSNHTjViQt8_qBu0CCg=",
    price: "750",
  },
  {
    titolo: "San Francisco",
    descrizione: "Il Golden Gate, le colline e la cultura tech della Silicon Valley.",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbiUyMGZyYW5jaXNjb3xlbnwwfHwwfHx8MA%3D%3D",
    price: "3000",
  },
  {
    titolo: "Praga",
    descrizione: "Castelli fiabeschi, ponti storici e birra artigianale.",
    img: "https://images.unsplash.com/photo-1564511287568-54483b52a35e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJhZ2F8ZW58MHx8MHx8fDA%3D",
    price: "800",
  },
  {
    titolo: "Dubai",
    descrizione: "Grattacieli futuristici, shopping di lusso e deserto.",
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1YmFpfGVufDB8fDB8fHww",
    price: "1200",
  },
  {
    titolo: "Buenos Aires",
    descrizione: "Tango, architettura coloniale e la passione argentina.",
    img: "https://media.istockphoto.com/id/2030865936/it/foto/lobelisco-di-buenos-aires-argentina.webp?a=1&b=1&s=612x612&w=0&k=20&c=GW5K00ZjuNsGEBGW2qxnGZPy68yjDy4MSuHYVM48s14=",
    price: "1950",
  },
];
export default mete;
