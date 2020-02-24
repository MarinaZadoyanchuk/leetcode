function verify(str) {
    const braceMap = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    const openStack = []

    for (let i = 0; i < str.length; i++) {
        const brace = str[i]
        if (braceMap[brace]) { // if open brace
            openStack.push(brace)
        } else {
            const lastOpen = openStack.pop()
            console.log({lastOpen, brace, isEqual: brace !== braceMap[lastOpen]})

            if (brace !== braceMap[lastOpen]) { // if the close brace is not relative to last open brace
                return false
            }
        }
    }

    console.log({openStack})

    return openStack.length === 0
}

function braces(values) {
  return values.map(str => verify(str) ? 'YES' : 'NO')
}

console.log(braces(['{}[]()']))