// harga kamar
class ProfileVilla {
   constructor(name, rateWd, rateWe) {
      this.villaName = name;
      this.rateWd = rateWd;
      this.rateWe = rateWe;
   }

   callVilla() {
      const villaName = document.querySelector('.villaName');
      const villaRate = document.querySelector('.villaPrice');
      villaName.innerHTML = this.villaName;
      villaName.style.fontWeight = 600;
      villaRate.style.fontWeight = 600;
      if (new Date().getDay() === 0 || new Date().getDay() === 6) {
         villaRate.innerHTML = `Rp. ${this.rateWe.toLocaleString('id-ID')},- / malam`;
      } else {
         villaRate.innerHTML = `Rp. ${this.rateWd.toLocaleString('id-ID')},- / malam`;
      }
   }   
}

