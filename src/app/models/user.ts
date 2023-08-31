export class User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: any;
      city: string;
      zipcode: any;
      geo: {
        lat: any;
        lng: any;
      }
    }
    phone: any;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    }
}