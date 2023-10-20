class Footer {
    constructor(addressTxt, telTxt){
        this.addressTxt = addressTxt;
        this.address = 'Bv. Artigas 1443 OF 912, CP 11.200; Montevideo, Uruguay';
        this.telTxt = telTxt;
        this.tel = '(+598) 2408 8931';
        this.emailTxt = 'Email';
        this.email = 'info@adapta.uy';
    }
}

export const footer_es = new Footer('Dirección', 'Teléfono');
export const footer_en = new Footer('Address', 'Phone');