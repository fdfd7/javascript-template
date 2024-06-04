export function removeSalutation(name) {
    if (name.startsWith("Hr.") || name.startsWith("Fr.")) {
        return name.substring(4, name.length)
    } else {
        return name
    }
}
export function removeString(subject, needle) {
    while (1 == 1)
        if (subject.includes(needle)) {
            if (
                subject.includes(
                    ` ${subject.substring(subject.indexOf(needle), subject.indexOf(needle) + needle.length)}`,
                ) &&
                subject.includes(
                    `${subject.substring(subject.indexOf(needle), subject.indexOf(needle) + needle.length)} `,
                )
            ) {
                subject = `${subject.substring(0, subject.indexOf(needle) - 1)}${subject.substring(subject.indexOf(needle) + needle.length, subject.length)}`
                //Ich verhindere ein Doppelleerzeichen an der Stelle, an der vorher das Wort stand.
            } else
                subject = `${subject.substring(0, subject.indexOf(needle))}${subject.substring(subject.indexOf(needle) + needle.length, subject.length)}`
        } else {
            return subject
        }
}
