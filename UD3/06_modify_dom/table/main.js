let counter = 1;

function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0]

    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = counter++;
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'http://localhost/edit/'
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')

}
