const fs = require('fs')
const imageFileNames = () => {
    const array = fs
        .readdirSync('src/assets/images')
        .filter((file) => {
            return file.endsWith('.png')
        })
        .map((file) => {
            return file.replace('@2x.png', '').replace('@3x.png', '')
        })

    return Array.from(new Set(array))
}
const iconFileNames = () => {
    const array = fs
        .readdirSync('src/assets/icons')
        .filter((file) => {
            return file.endsWith('.png')
        })
        .map((file) => {
            return file.replace('@2x.png', '').replace('@3x.png', '')
        })

    return Array.from(new Set(array))
}
const generate = () => {
    let imageProperties = imageFileNames()
        .map((name) => {
            return `${name.replace('.png', '')}: require('./assets/images/${name}')`
        })
        .join(',\n  ')
    let iconProperties = iconFileNames()
        .map((name) => {
            return `${name.replace('.png', '')}: require('./assets/icons/${name}')`
        })
        .join(',\n  ')
    const string = `export default Media = {
        ${imageProperties},
        ${iconProperties}
}
`
    fs.writeFileSync('src/Media.js', string, 'utf8')
}
generate()
