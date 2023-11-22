var belanja = parseInt(prompt("masukan total belanja : "))

document.writeln(`anda belanja = ${belanja}`)
document.write("\n")
if(belanja < 100000){
    document.writeln(`anda tidak mendapatkan diskon`)
}else if (belanja >= 100000 && belanja < 200000){
    let diskon = belanja * 10/100 
    document.writeln(`anda mendapatkan diskon 10% total bayar menjadi ${belanja - diskon} `)
}else if(belanja > 200000){
    let diskon = belanja * 25/100
    document.writeln(`anda mendapatkan diskon 25% dan total bayar diskon ${belanja - diskon}`)
}