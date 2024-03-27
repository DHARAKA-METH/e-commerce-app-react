
const EmailValidation = (email) => {
    if (email.includes('@')) {
        const emailSplit = email.split('@')
        if (emailSplit[0].length > 3) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}


export default EmailValidation
