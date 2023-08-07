function timeConversion(s) {
    if (s.slice(-2) === 'AM'){
        if(s.slice(0, 2) === '12'){
            let h = Number(s.slice(0,2)) - 12
            h = h.toString().padStart(2, '0')
            s = h + s.slice(2)
            s = s.slice(0, -2)
            return s
        }
        return s.slice(0, -2)
    }
    if(s.slice(0, 2) === '12'){
        return s.slice(0, -2)
    }
    let h = Number(s.slice(0,2)) + 12
    if(h >= 24){
        h = h - 24
    }
    h = h.toString().padStart(2, '0')
    s = h + s.slice(2)
    s = s.slice(0, -2)
    return s
}

console.log(timeConversion('12:45:54PM'));