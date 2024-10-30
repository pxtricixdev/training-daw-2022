let counter = 1;

function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0]

    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = counter;
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    td = document.createElement('td');
    let link = document.createElement('a');
    link.innerText = `http://localhost/edit/${counter}`
    link.href = `http://localhost/edit/${counter}`; 
    td.appendChild(link);
    tr.appendChild(td);

    counter++;

    tbody.appendChild(tr)
    console.log('add')

}
