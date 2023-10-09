const fs = require('fs')
const jsonfile = require('jsonfile')

async function main() {
  fs.readdirSync('../content/events').map(async (fileName) => {
    const path = `../content/events/${fileName}`
    const event = await jsonfile.readFile(path)

    if (event.linkText === 'GUEST LIST') {
      let newEvent = {
        ...event,
        linkText: 'GUESTLIST',
      }

      await jsonfile.writeFile(path, newEvent, { spaces: 2, finalEOL: false })
    }
  })
}

main()
