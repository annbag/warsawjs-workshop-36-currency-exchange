const date = prompt('podaj datę w formacie: RRRR-MM-DD');

fetch(`http://api.nbp.pl/api/exchangerates/tables/A//${date}/?format=json`).then(res =>
  res.json().then(res => {
    for (let i = 0; i < res[0].rates.length; i++) {
      const trRow = document.createElement('tr');
      document.querySelector('tbody').appendChild(trRow);
      const tdA = document.createElement('td');
      const tdB = document.createElement('td');
      const tdC = document.createElement('td');
      trRow.appendChild(tdA);
      tdA.innerText = res[0].rates[i].currency;
      trRow.appendChild(tdB);
      tdB.innerText = res[0].rates[i].code;
      trRow.appendChild(tdC);
      tdC.innerText = res[0].rates[i].mid;
    }
  })
);
