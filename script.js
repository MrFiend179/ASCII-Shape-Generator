function squarenrectangle() {
    if (document.getElementById('inputsqrmn').value.includes('x')) {
        const [no1, no2] = document.getElementById('inputsqrmn').value.split('x').map(Number)
        const lenght = no1
        const width = no2
        const char = document.getElementById('inputsqrmn1').value
        if (document.getElementById('fillsqur').checked) {
            let topBottom = char.repeat(no1) + '<br>';

            let squareHTML = topBottom;
            for (let i = 0; i < no2 - 1; i++) {
                squareHTML += topBottom;
            }

            document.getElementById('maininnrtxt').innerHTML = squareHTML;
        } else {
            let topBottom = char.repeat(no1) + '<br>';
            let middle = char + ' '.repeat(no1 - 2) + char + '<br>';

            let squareHTML = topBottom;
            for (let i = 0; i < no2 - 2; i++) {
                squareHTML += middle;
            }
            squareHTML += topBottom;

            document.getElementById('maininnrtxt').innerHTML = squareHTML;
        }
    } else {

        const size = document.getElementById('inputsqrmn').value
        const char = document.getElementById('inputsqrmn1').value
        if (document.getElementById('fillsqur').checked) {
            let topBottom = char.repeat(size) + '<br>';

            let squareHTML = topBottom;
            for (let i = 0; i < size - 1; i++) {
                squareHTML += topBottom;
            }

            document.getElementById('maininnrtxt').innerHTML = squareHTML;
        } else {
            let topBottom = char.repeat(size) + '<br>';
            let middle = char + ' '.repeat(size - 2) + char + '<br>';

            let squareHTML = topBottom;
            for (let i = 0; i < size - 2; i++) {
                squareHTML += middle;
            }
            squareHTML += topBottom;

            document.getElementById('maininnrtxt').innerHTML = squareHTML;
        }
    }
}
crtbtnmn.addEventListener('click', () => {
    squarenrectangle()
})





function toptriangle(size, char) {
    let triangle = '';

    for (let i = 0; i < size; i++) {
        let spaces = ' '.repeat(size - i - 1);

        if (i === 0) {
            triangle += spaces + char + spaces + '\n';
        } else if (i === size - 1) {
            triangle += char.repeat(2 * size - 1) + '\n';
        } else {
            let middleSpaces = ' '.repeat(2 * i - 1);
            triangle += spaces + char + middleSpaces + char + spaces + '\n';
        }
    }
    return (triangle)
}
function bottomTriangle(size, char) {
    let triangle = '';

    for (let i = size; i > 0; i--) {
        let spaces = ' '.repeat(size - i);

        if (i === size) {
            triangle += toptriangle(size, char);
        } else if (i === 1) {
            triangle += spaces + char + '\n';
        } else {
            let middleSpaces = ' '.repeat(2 * i - 3);
            triangle += spaces + char + middleSpaces + char + '\n';
        }
    }

    return (triangle);
}
function bottomfldtrn(size, char) {
    let triangle = '';
    for (let i = size; i > 0; i--) {
        if (i === size) {
            triangle += topfldtrn(size, char)
        } else {
            let spaces = ' '.repeat(size - i);
            let stars = char.repeat(2 * i - 1);
            triangle += spaces + stars + spaces + '\n';
        }
    }
    return (triangle)
}

function topfldtrn(size, char) {
    let triangle = '';
    for (let i = 0; i < size; i++) {
        let spaces = ' '.repeat(size - i - 1);
        let stars = char.repeat(2 * i + 1);
        triangle += spaces + stars + spaces + '\n';
    }
    return (triangle)
}
function triangle() {
    const size = document.getElementById('inputsqrmn2').value
    const char = document.getElementById('inputsqrmn12').value
    if (document.getElementById('filltrngl').checked) {
        if (document.getElementById('invrtdtrngl').checked) {
            document.getElementById('maininnrtxt1').innerText = bottomfldtrn(size, char)
        } else {
            document.getElementById('maininnrtxt1').innerText = topfldtrn(size, char)
        }
    } else {
        if (document.getElementById('invrtdtrngl').checked) {
            document.getElementById('maininnrtxt1').innerText = bottomTriangle(size, char)
        } else {
            document.getElementById('maininnrtxt1').innerText = toptriangle(size, char)
        }
    }
}

crtbtnmn1.addEventListener('click', () => {
    triangle()
})

function table() {
    console.log('ok')
    const number = parseInt(document.getElementById('inputsqrmn21').value)
    const times = parseInt(document.getElementById('inputsqrmn121').value)
    let table = ''
    for (let i = 1; i < times + 1;) {
        console.log(number+ ' x ' + i + ' = ' + number * i)
        table += number + ' x ' + i + ' = ' + number * i + '\n'
        i++
    }
    document.getElementById('maininnrtxt2').innerText = table
}
crtbtnmn1221.addEventListener('click', () => {
    table()
})
