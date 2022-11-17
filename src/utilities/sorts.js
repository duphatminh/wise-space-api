// Sắp xếp một array dựa trên 1 array khác
const mapOrder = (array, order, key) => {
    array.sort((a,b) => order.indexOf(a[key]) - order.indexOf(b[key]))
    return array
}

export { mapOrder }