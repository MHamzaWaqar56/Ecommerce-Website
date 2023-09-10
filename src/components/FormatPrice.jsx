

const FormatPrice = ({price}) => {
    return Intl.NumberFormat("en-Pk", {
        style: "currency",
        currency: "PKR",
        maximumFractionDigits: 2,
      }).format(price);
}

export default FormatPrice