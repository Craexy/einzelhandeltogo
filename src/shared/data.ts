export interface Driver {
  User: string;
  phone: string;
  gps: Gps;
  status: string;
}

export interface Gps {
  long: number;
  lat: number;
}

export interface Buyer {
  id: number;
  user: integer;
  phonenumber: string;
  adress: string;
  postalAdress: string;
}

export interface Seller {
  user: string;
  companyName: string;
  phone: string;
  postalAdress: string;
  shopCategories: string[];
  products: string[];
  status: string;
}

export interface Transaction {
  created: string;
  loaded: string;
  delivered: string;
  driver: Driver;
  buyer: Buyer;
  seller: Seller;
  transactionContent: string;
}

export interface adress {
  id: number;
  street: string;
  city: string;
  province: string;
  code: string;
}
