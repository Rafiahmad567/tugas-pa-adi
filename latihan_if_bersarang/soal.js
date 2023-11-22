var soal1 = prompt("1,50 + 1: ")
var poin = 0

if (soal1 == 51) {
    poin += 1
    alert(`jawaban anda benar,poin anda sekarang ${poin}`)
    var soal2 =prompt("ibukota malaysia adalah: ")
    if (soal2 == "kuala lumpur" || soal2 == "Kuala lumpur"){
        poin += 1
        alert(`jawaban anda benar,poin anda sekarang ${poin}`)
        var soal3 =prompt("bahasa apa yang di gunakan orang bali: ")
    if (soal3 == "bahasa bali" || soal3 == "bahasa bali"){
        poin += 1
        alert(`jawaban anda benar,poin anda sekarang ${poin}`)
        var soal4 =prompt("何の動物ですか？: ")
        if (soal4 == "teu apal" || soal4 == "teu apal"){
            poin += 1
            alert(`jawaban anda benar,poin anda sekarang ${poin}`)
    } else{
        poin += 0
        alert(`jawaban anda salah poin anda adalah ${poin}`)
    }
} else{
    poin += 0
    alert(`jawaban anda salah poin anda adalah ${poin}`)
} 
 
} else{
    poin += 0
    alert(`jawaban anda salah poin anda adalah ${poin}`)
}  
} else{
    poin += 0
    alert(`jawaban anda salah poin anda adalah ${poin}`)
}


