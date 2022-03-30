export function bech32(str:string) {
    if (!str)
        return '';
    return (str.substring(0, 13) +
        '...' +
        str.substring(str.length - 6, str.length));
}

export function copyToClipboard(address:string) {
    navigator.clipboard.writeText(address);
    alert("Copied address: " + address);
}