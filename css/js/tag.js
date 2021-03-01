const colors = {

    // Attr Properties
    p: "#388e3c",
    div: "#1565c0",
    span: "#e53935",
    section: "#f67809",
    ul: "#5e35b1",
    ol: "#fbc02d",
    header: "#d81b60",
    nav: "#64dd17",
    main: "#00acc1",
    form: "#9f6581",
    footer: "#304ffe",
    body: "#25b6da",
    std: "#616161",

    // method
    get(tagName) {
        return this[tagName] ? this[tagName] : this.std
    }
}

document.querySelectorAll('.tag').forEach(box => {

    const tagName = box.tagName.toLowerCase()

    // Margin border color
    box.style.borderColor = colors.get(tagName)

    if (!box.classList.contains('nolabel')) {
        // creating label
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName

        // inserting label before first text on element
        box.insertBefore(label, box.childNodes[0])
    }
}

)