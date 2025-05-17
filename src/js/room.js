// harga kamar
class Villa {
   constructor() {
      this.villaName = ""
      this.hargaModal = 0
      this.totalHarga = 0
   }

   rumusHarga(type) {
      let arrType = {
         low: 0.8,
         mid: 0.10,
         high: 0.12
      }
      let markup

      switch (type) {
         case "low":
            markup = arrType.low
            break;
         case "mid":
            markup = arrType.mid
            break;
         case "high":
            markup = arrType.high
            break;
      
         default:
            throw new Erro("Tipe Harga Tidak Valid");
      }
   }
}