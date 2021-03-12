function getColor() {
    return Math.floor(Math.random() * 256);
}

const colorGenerator = () => {
    html = ""
    for (let i = 1; i <= 10; i++) {
        const r = getColor()
        const g = getColor()
        const b = getColor()
        const a = (Math.round(Math.random() * 9) + 1) / 10
        const randomColor = `rgba(${r}, ${g}, ${b}, ${a})`
        html += `<div id="bar" style="background-color: ${randomColor}">${randomColor}</div>`
    }
    document.getElementById("container").innerHTML = html
}

colorGenerator()

