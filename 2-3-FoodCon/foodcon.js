
function createTable() {
    // Get the food table container
    const container = document.getElementById('food-container');

    // Create the food table element
    const ftable = document.createElement('table');
    ftable.style.borderCollapse = 'collapse';
    ftable.style.width = '60%';
    ftable.style.border = '2px solid black';
    ftable.style.fontSize = '25px';
    ftable.style.justifySelf = 'center';

    // Add the headers
    const headers = ['S/No.', 'Food Class', 'Examples'];
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.border = '2px solid black';
        th.style.borderCollapse = 'collapse';
        th.style.textAlign = 'left';
        th.style.fontWeight = 'bold';
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    ftable.appendChild(thead);

    // Add the rows
    const data = [
        { sno: '1.', fclass: 'Carbohydrates', eg: 'Wheat, Rice, Potatoes, and Sugar' },
        { sno: '2.', fclass: 'Proteins', eg: 'Egg, Milk, Meat, and Fish' },
        { sno: '3.', fclass: 'Fats', eg: 'Oil, Butter, and Groundnut' },
        { sno: '4.', fclass: 'Vitamins', eg: 'Fruits and Vegetables(green and leafy)' },
        { sno: '5.', fclass: 'Minerals', eg: 'An essential nutrient for the body' },
        { sno: '6.', fclass: 'Water', eg: 'An essential nutrient for the body' }
    ];

    const tbody = document.createElement('tbody');

    data.forEach(item => {
        const row = document.createElement('tr');

        Object.values(item).forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            td.style.border = '2px solid black';
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    ftable.appendChild(tbody);

    // Clear previous table (if any) and add the new table
    container.innerHTML = '';
    container.appendChild(ftable);
}