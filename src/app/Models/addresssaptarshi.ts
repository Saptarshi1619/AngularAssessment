export class AddressSaptarshi {
    houseNo: string
    street: string
    area: string
    city: string
    state: string
    zip: string
    country:string

    constructor(houseNo: string, street: string,
        city: string,
        area:string,
        state: string,
        zip: string,
        country:string
    ){
        this.houseNo = houseNo
        this.street = street
        this.area = area
        this.city = city
        this.state = state
        this.zip = zip
        this.country = country
    }
  }
  