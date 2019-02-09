let company = {
  1: 'Acme Corporation',
  2: 'Globex Corporation',
  3: 'Soylent Corp',
  4: 'Initech',
  5: 'Bluth Company',
  6: 'Umbrella Corporation',
  7: 'Hooli',
  8: 'Vehement Capital Partners',
  9: 'Massive Dynamic',
  10: 'Wonka Industries',
  11: 'Stark Industries',
  12: 'Gekko & Co',
  13: 'Wayne Enterprises',
  14: 'Bubba Gump',
  15: 'Cyberdyne Systems',
  16: 'Genco Pura Olive Oil Company',
  17: 'The New York Inquirer',
  18: 'Duff Beer',
  19: 'Olivia Pope & Associates',
  20: 'Sterling Cooper',
  21: "Ollivander's Wand Shop",
  22: 'Cheers',
  23: 'Krusty Krab',
  24: 'Good Burger',
  26: 'Open Lane',
  27: 'Yearin',
  28: 'Good Silron',
  29: 'Condax',
  30: 'Opentech',
  31: 'Golddex',
  32: 'Year Job',
  33: 'Isdom',
  34: 'Gogozoom',
  35: 'Y Corporation',
  36: 'Donquadtech',
  37: 'Ware Phase',
  38: 'Donware',
  39: 'Faxquote',
  40: 'Sunnamplex',
  41: 'Sumace',
  42: 'Tree Quotes',
  45: 'Iselectrics',
  46: 'Zen corporation'
}
const elements = company
const array = []
Object.keys(elements).forEach(item => {
  array.push(elements[item])
})
array.sort()
export const formatedCompany = array.reduce((acc, cur, i) => {
  acc[i] = cur
  return acc
}, {})

const errorsArray = []
const random = () => (Math.floor(Math.random() * 10) > 7 ? true : false)
Object.keys(company).forEach(key => {
  errorsArray.push(random())
})
export const errors = errorsArray
