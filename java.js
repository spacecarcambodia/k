const data = [
  { Number:"PV5XWER67SLC02208", name:"Ford Everest Titanium X 2025", year:"2025", cc:2000, hp:207, seats:7, weight:2269, Kg:70, Fualoil:"DSL", length:4.91, width:1.92, height:1.84 },
  { Number:"PV5XWSR99SLG02151", name:"Ford Evereast Sport 2025", year:"2025", cc:2000, hp:168, seats:7, weight:2455, Kg:70, Fualoil:"DSL", length:4.91, width:1.92, height:1.84 },
  { Number:"PV4CU2ZX9TL101282", name:"Ford Territory", year:"2026", cc:1490, hp:160, seats:5, weight:1750, Kg:50, Fualoil:"E/A", length:4.7, width:1.9, height:1.7 },
  { Number:"PV3UKFF60SL004971", name:"Ford Ranger XLT ", year:"2025", cc:2000, hp:207, seats:5, weight:2152, Kg:600, Fualoil:"DSL", length:5.35, width:2, height:1.87 },
  { Number:"PV4CU2ZX8SL000748", name:"Ford Territory", year:"2025", cc:1490, hp:160, seats:5, weight:1750, Kg:50, Fualoil:"E/A", length:4.58, width:1.86, height:1.67},
  { Number:"PV3AKFF60SL0044467", name:"Ford Ranger WD", year:"2025", cc:2000, hp:207, seats:5, weight:2340, Kg:600, Fualoil:"DSL", length:5.37, width:2, height:1.88 },
  { Number:"PV3UKFF90SL004991", name:"Ford Ranger XL", year:"2025", cc:2000, hp:168, seats:5, weight:2084, Kg:600, Fualoil:"DSL", length:5.37, width:2.2, height:1.88 },
  { Number:"LKLSAAS45KA740819", name:"HIGER", year:"2019", cc:2498, hp:116, seats:12, weight:2400, Kg:240, Fualoil:"DSL", length:4.8, width:1.85, height:1.85 },
  { Number:"SALG2VF0FA232420", name:"LAND ROVER RANGER ROVER", year:"2015", cc:3000, hp:365, seats:5, weight:2500, Kg:50, Fualoil:"E/A", length:4.8, width:1.85, height:1.85 },
  { Number:"LMGAT1L8XS1377252", name:"GAC GS4", year:"2025", cc:1497, hp:174, seats:5, weight:1600, Kg:50, Fualoil:"E/A", length:4.5, width:1.8, height:1.65 },
  { Number:"JTJPD7CX5S4001688", name:"LEXUS LX700H", year:"2025", cc:3500, hp:409, seats:7, weight:2855, Kg:70, Fualoil:"E/A", length:5, width:2, height:1.9 },
  { Number:"WBS3R9C57FK331601", name:"BMW M4", year:"2015", cc:3000, hp:425, seats:4,  Kg:40, Fualoil:"E/A", length:4.68, width:1.87, height:1.38 },
  { Number:"JTJBARBZBF2032047", name:"LEXUS NX200T", year:"2015", cc:2000, hp:235, seats:5,  Kg:50, Fualoil:"E/A", length:4.63, width:1.87, height:1.63 },
  { Number:"JTFBR73J8SB006672", name:"TOYOTA LANDCRUISER", year:"2025", cc:2800, hp:204, seats:5, weight:2130, Kg:300, Fualoil:"DSL", length:5.24, width:1.8, height:1.96 },
  { Number:"PV4CU2ZX4SL000438", name:"Ford Territory Titanium", year:"2025", cc:1490, hp:160, seats:5, weight:1750, Kg:50, Fualoil:"DSL",  length:4.58, width:1.86, height:1.67 },
  { Number:"7G2CEHED1RA011624", name:"Tesla Cybertruck", year:"2024", cc:"N/A", hp:605, seats:5, weight:3025, Kg:300, Fualoil:"E/A", length:5.68, width:2.41, height:1.79 },
  { Number:"WDCYC6BJXKX311331", name:"Mercedes Benz G550", year:"2019", cc:4000, hp:416, seats:5,  Kg:50, Fualoil:"E/A", length:4.81, width:1.93, height:1.96 },
  { Number:"W1K6X7GBXSA329233", name:"Mercedes Benz Maybach S580", year:"2025", cc:4000, hp:416, seats:4, weight:2518, Kg:40, Fualoil:"E/A", length:5.82, width:1.93, height:1.96 },
  { Number:"BNR34001621", name:"Nissan SkyLine", year:"2001", cc:2600, hp:280, seats:4,  Kg:40, Fualoil:"E/A", length:4.6, width:1.78, height:1.36 },
  { Number:"LS6C3E2T0SF035767", name:"Changan Deepal S07", year:"2025", cc:1497, hp:238, seats:5, weight:2073, Kg:50, Fualoil:"E/A", length:4.75, width:1.93, height:162 },
  { Number:"LDP45B961TG421060", name:"GTV Kessor", year:"2026", cc:"N/A", hp:161, seats:5, weight:1365, Kg:50, Fualoil:"E/A", length:4.16, width:1.87, height:1.61 },
  { Number:"WDBGA51E6SA282126", name:"Mercedes Benz S500", year:"1995", cc:5000, hp:315, seats:5, weight:2200, Kg:50, Fualoil:"E/A", length:5.21, width:1.88, height:1.47 },
  { Number:"LEFYEDG36SHN46951", name:"JMC", year:"2025", cc:2771, hp:92, seats:3, weight:2030, Kg:500, Fualoil:"DSL", length:6, width:2, height:2.43 },
  { Number:"JTMAB7BJ0S4198023", name:"TOYOTA Landcruiser VXR", year:"2025", cc:3500, hp:409, seats:7, weight:2150, Kg:70, Fualoil:"E/A", length:5.14, width:1.98, height:1.9 },
  { Number:"W1K6X6BB9RA251670", name:"Mercedes Benz MayBach S480", year:"2024", cc:2999, hp:362, seats:5, weight:2375, Kg:50, Fualoil:"E/A", length:5.46, width:2.1, height:1.5 },
  { Number:"JTMAA7BJ4S4114692", name:"TOYOTA Landcruiser VXR", year:"2025", cc:3300, hp:302, seats:7, weight:2450, Kg:70, Fualoil:"DSL", length:5.14, width:1.98, height:1.9 },
  { Number:"LURMCWBT2RA151367", name:"AIQAR EQ3", year:"2024", cc:"N/A", hp:255, seats:5, weight:1892, Kg:50, Fualoil:"E/A", length:4.4, width:1.9, height:1.7 },
  { Number:"W1K6X6BB9RA251670", name:"Mercedes Benz MayBach S480", year:"2024", cc:2999, hp:362, seats:5, weight:2375, Kg:50, Fualoil:"E/A", length:5.46, width:2.1, height:1.5 },
  { Number:"WDD3G4EB5KW028005", name:"Mercedes Benz A220", year:"2019", cc:2000, hp:188, seats:5, weight:1800, Kg:50, Fualoil:"E/A", length:4.42, width:1.8, height:1.44 },
  { Number:"W1NFFB8RB114514", name:"Mercedes Benz MayBach GLS600", year:"2024", cc:3982, hp:550, seats:4, weight:2825, Kg:40, Fualoil:"E/A", length:5.2, width:2.15, height:1.83 },
  { Number:"55SWF4KB3FU061219", name:"Mercedes Benz  C300", year:"2015", cc:2000, hp:241, seats:5,  Kg:50, Fualoil:"E/A", length:4.68, width:1.81, height:1.44 },
  { Number:"4JGFF5KE9LA119318", name:"Mercedes Benz GL450", year:"2020", cc:3000, hp:362, seats:7, Kg:50, Fualoil:"E/A", length:5.2, width:1.9, height:1.8 },
  { Number:"WDDUG6HB2FA170133", name:"Mercedes Benz S400L", year:"2015", cc:3000, hp:333, seats:5,  Kg:50, Fualoil:"E/A", length:5.36, width:1.91, height:1.5 },
  { Number:"LB1WG3E67S8249046", name:"Mercedes Benz Vito", year:"2025", cc:1999, hp:231, seats:7, weight:2370, Kg:70, Fualoil:"E/A", length:5.14, width:1.92, height:1.99 },
  { Number:"4JGFF5KEBLA206059", name:"Mercedes Benz GLE450", year:"2020", cc:3000, hp:362, seats:4, Kg:40, Fualoil:"E/A", length:5.21, width:1.82, height:1.82 },
  { Number:"LE4G1DB5SL001499", name:"Mercedes Benz", year:"2025", cc:"N/A", hp:268, seats:5,  Kg:50, Fualoil:"E/A", length:4.76, width:1.83, height:1.47 },
  { Number:"KMJHG17HPBC009847", name:"Hyundai County", year:"2011", cc:3933, hp:160, seats:25,  Kg:500, Fualoil:"DSL", length:7, width:2, height:2.75 },
  { Number:"JTMA87BJ9S4186985", name:"TOYOTA LAND CRUISER LC300", year:"2025", cc:3500, hp:409, seats:7, weight:2570, Kg:70, Fualoil:"E/A", length:5.14, width:1.98, height:1.94 },
  { Number:"WDDSJ4EB3EN045327", name:"Mercedes Benz CLA250", year:"2014", cc:2000, hp:208, seats:5,  Kg:50, Fualoil:"E/A", length:4.68, width:1.78, height:1.43 },
  { Number:"JTHADAADB05006680", name:"LEXUS LM350H", year:"2025", cc:2500, hp:188, seats:4, weight:2870, Kg:40, Fualoil:"E/A", length:5.12, width:1.89, height:1.94 },
  { Number:"WDDSJ5CB4FN245062", name:"Mercedes Benz CLA45AMG", year:"2015", cc:2000, hp:355, seats:5,  Kg:50, Fualoil:"E/A", length:4.7, width:1.77, height:1.41 },
  { Number:"4JGFF5KE2LA205151", name:"Mercedes Benz GLS450", year:"2015", cc:3000, hp:362, seats:5,  Kg:50, Fualoil:"E/A", length:5.21, width:2, height:1.82 },
  { Number:"1FTFW1RG5JFD74357", name:"Ford F-150 Raptor", year:"2018", cc:3500, hp:450, seats:5,  Kg:600, Fualoil:"E/A", length:5.59, width:1.19, height:1.92 },
  { Number:"4JGFD6BB9SB342193", name:"Mercedes Benz GLE53", year:"2025", cc:3000, hp:429, seats:5, weight:2375, Kg:50, Fualoil:"E/A", length:4.937, width:2.018, height:1.782 },
  { Number:"JTJCMBHA402009862", name:"Lexus RX500H", year:"2025", cc:2400, hp:271, seats:5, kg:50, Fualoil:"E/A", length:4.89, width:1.92, height:1.68 },
  { Number:"FE71CBA664810", name:"FUSO", year:"2024", cc:4214, hp:120, seats:3,  Kg:1000, Fualoil:"DSL", length:5, width:1.9, height:2.7 },
  { Number:"ZCFA51ED102740936", name:"IVECO", year:"2023", cc:2700, hp:182, seats:3,  kg:1850, Fualoil:"DSL", length:8.8, width:3.05, height:3 },
  { Number:"LZZ8BYVF3MC411664", name:"SINO", year:"2021", cc:2499, hp:130, seats:3,  Kg:1, Fualoil:"DSL", length:12.20, width:2.5, height:4.00 },
  { Number:"WDAKHCAA0K0325425", name:"Mercedes Benz", year:"2019", cc:11946, hp:410, seats:3,  Kg:1, Fualoil:"DSL", length:10.5, width:2.5, height:4 },
  { Number:"LXWGUTCB7SHF86812", name:"Ford EQUATOR", year:"2025", cc:1498, hp:315, seats:7, weight:2100, Kg:70, Fualoil:"E/A", length:4.92, width:1.93, height:1.76 },
  { Number:"HJ4ABBDH2PN022087", name:"BAW", year:"2023", cc:1962, hp:142, seats:7,  Kg:70, Fualoil:"E/A", length:5.24, width:1.87, height:1.95 },
  { Number:"JTJCMCHAB0202220921", name:"LEXUS RX500H", year:"2023", cc:2393, hp:366, seats:5, weight:2100,  Kg:50, Fualoil:"E/A", length:4.89, width:1.92, height:1.69 },
  { Number:"WDDUG6DBBFA104143", name:"Mercedes Benz S550", year:"2015", cc:3000, hp:436, seats:7,  Kg:50, Fualoil:"E/A", length:5.24, width:1.9, height:1.5 },
  { Number:"KMFLA18AP5C050099", name:"HYUNDAI TRUCK", year:"2005", cc:6606, hp:225, seats:3,  Kg:500, Fualoil:"DSL", length:8.7, width:2.4, height:3 },
  { Number:"LVVDB21B7TDD09672", name:"CHERY TIGGO7", year:"2026", cc:1498, hp:154, seats:5, weight:1500,  Kg:50, Fualoil:"E/A", length:4.5, width:1.84, height:1.7 },
  { Number:"7G2CEHED0RA019570", name:"TESLA CYBERTRUCK", year:"2024",  hp:603, seats:5,  Kg:300, Fualoil:"អគ្គីសនី", length:5.6668, width:2.03, height:1.74},
  { Number:"KMFGA17HPBC170183", name:"HYUNDAI MIGHTY", year:"2011", cc:3933, hp:160, seats:3,  Kg:3500, Fualoil:"DSL", length:6.7, width:2.2, height:2.6 },
  { Number:"LEFEDDE18STP411423", name:"JMC VIGUS", year:"2025", cc:2498, hp:158, seats:5,  Kg:600, Fualoil:"DSL", length:5.3, width:1.88, height:1.78 },
  
];

function searchData() {
  const nameKey = document.getElementById("searchName").value.toLowerCase().trim();
  const numberKey = document.getElementById("searchNumber").value.toLowerCase().trim();
  const result = document.getElementById("result");

  if(nameKey === "" && numberKey === "") {
    result.innerHTML = "<p>Please enter a name or number </p>";
    return;
  }

  const filtered = data.filter(item => {
    const itemName = (item.name || "").toLowerCase();
    const itemNumber = (item.Number || "").toLowerCase();
    const nameMatch = nameKey === "" ? true : itemName.includes(nameKey);
    const numberMatch = numberKey === "" ? true : itemNumber.includes(numberKey);
    return nameMatch && numberMatch;
  });

  if(filtered.length === 0) {
    result.innerHTML = "<p>No data found</p>";
    return;
  }

let table = `
<div class="table-wrapper">
<table>
  <tr>
    <th>Number</th>
    <th>Name</th>
    <th>Year</th>
    <th>CC</th>
    <th>HP</th>
    <th>Seats</th>
    <th>Weight</th>
    <th>Kg</th>
    <th>Fual oil</th>
    <th>Length</th>
    <th>Width</th>
    <th>Height</th>
  </tr>
`;

filtered.forEach(item => {
  table += `
  <tr>
    <td>${item.Number || "-"}</td>
    <td>${item.name || "-"}</td>
    <td>${item.year || "-"}</td>
    <td>${item.cc || "-"}</td>
    <td>${item.hp || "-"}</td>
    <td>${item.seats || "-"}</td>
    <td>${item.weight || "-"}</td>
    <td>${item.Kg || "-"}</td>
    <td>${item.Fualoil || "-"}</td>
    <td>${item.length || "-"}</td>
    <td>${item.width || "-"}</td>
    <td>${item.height || "-"}</td>
  </tr>
  `;
});

table += `
</table>
</div>
`;
  result.innerHTML = table;
}

function clearSearch() {
  document.getElementById("searchName").value = "";
  document.getElementById("searchNumber").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("searchName").focus();
}
