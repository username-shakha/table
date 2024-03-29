export const formatPhoneNumberInput = (phoneNumber: string) => {
    // Форматируем номер телефона как +7(XXX)XXX-XX-XX
    const regex = /^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/
    const formatted = phoneNumber.replace(regex, (_, p1, p2, p3, p4, p5) => {
        let formattedNumber = ''
        if (p1) formattedNumber += `+${p1}`
        if (p2) formattedNumber += `(${p2}`
        if (p3) formattedNumber += `)${p3}`
        if (p4) formattedNumber += `-${p4}`
        if (p5) formattedNumber += `-${p5}`
        return formattedNumber
    })
    return formatted
}
