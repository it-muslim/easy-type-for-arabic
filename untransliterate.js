const mapping = {"'": 1569, ">": 1571, "&": 1572, "<": 1573, "}": 1574, "A": 1575, "b": 1576, "p": 1577, "t": 1578, "v": 1579, "j": 1580, "H": 1581, "x": 1582, "d": 1583, "*": 1584, "r": 1585, "z": 1586, "s": 1587, "$": 1588, "S": 1589, "D": 1590, "T": 1591, "Z": 1592, "E": 1593, "g": 1594, "_": 1600, "f": 1601, "q": 1602, "k": 1603, "l": 1604, "m": 1605, "n": 1606, "h": 1607, "w": 1608, "Y": 1609, "y": 1610, "F": 1611, "N": 1612, "K": 1613, "a": 1614, "u": 1615, "i": 1616, "~": 1617, "o": 1618, "^": 1619, "#": 1620, "`": 1648, "{": 1649, ":": 1756, "@": 1759, "\"": 1760, "[": 1762, ";": 1763, ",": 1765, ".": 1766, "!": 1768, "-": 1770, "+": 1771, "%": 1772, "]": 1773 };

function untranslit(translitString) {
    return translitString.split('').map(function(x) {
        if (x in mapping) {
            return String.fromCharCode(mapping[x]);
        } else {
            return x;
        }
    }).join('');
}

function generateHelpTable(el) {
    for (var symb in mapping) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<tr><td>' +
            symb +
            '</td><td class="arabic">' +
            String.fromCharCode(mapping[symb]) +
            '</td></tr>';
        el.appendChild(tr);
    }
}