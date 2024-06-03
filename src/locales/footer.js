class Footer {
  constructor(addressTxt, telTxt) {
    this.addressTxt = addressTxt;
    this.address = "Blvr. Artigas 1132 / 001, CP 11.300; Montevideo, Uruguay";
    this.telTxt = telTxt;
    this.tel = "(+598) 2706 7055";
    this.emailTxt = "Email";
    this.email = "info@adapta.uy";
  }
}

export const footer_es = new Footer("Dirección", "Teléfono");
export const footer_en = new Footer("Address", "Phone");

