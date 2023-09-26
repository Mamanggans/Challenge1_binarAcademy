class BankAccount {
    constructor() {
      this.saldo = 0;
    }
  
    updateSaldo() {
      const saldoElement = document.getElementById("saldo");
      if (saldoElement) {
        saldoElement.textContent = this.saldo;
      }
    }
    tambahSaldo() {
        while (true) {
            var tambahan = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan: "));
            if (!isNaN(tambahan)) {
                this.saldo += tambahan;
                this.updateSaldo();
                var lanjutkan = window.confirm(`Sisa saldo anda sekarang adalah: ${this.saldo}. Apakah ingin menambahkan? Klik "Cancel" jika tidak ingin lanjut.`);
                if (!lanjutkan) {
                    break;
                }
            } else {
                alert("Input tidak valid. Masukkan angka yang valid.");
            }
        }
    }
    kurangiSaldo() {
        while (true) {
            var pengurangan = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangkan: "));
            if (!isNaN(pengurangan)) {
                if (pengurangan <= saldo) {
                    this.saldo -= pengurangan;
                    this.updateSaldo();
                    var lanjutkan = window.confirm(`Sisa saldo anda sekarang adalah: ${this.saldo}. Apakah ingin mengurangkan? Klik "Cancel" jika tidak ingin lanjut.`);
                    if (!lanjutkan) {
                        break;
                    }
                } else {
                    alert("Jumlah yang ingin Anda kurangkan melebihi saldo yang tersedia.");
                }
            } else {
                alert("Input tidak valid. Masukkan angka yang valid.");
            }
        }
    }
}

const bankAccount = new BankAccount();
bankAccount.updateSaldo(); 
