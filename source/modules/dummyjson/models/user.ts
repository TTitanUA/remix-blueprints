import { IDataModel, IDataModelField } from '@core/data-layer/interfaces/model'
import string from '../fields/string'
import number from '../fields/number'
import { CommonTypeString } from '@core/common/types/string'
import { CommonTypeNumber } from '@core/common/types/number'

/*
{
  "id": 1,
  "firstName": "Emily",
  "lastName": "Johnson",
  "maidenName": "Smith",
  "age": 28,
  "gender": "female",
  "email": "emily.johnson@x.dummyjson.com",
  "phone": "+81 965-431-3024",
  "username": "emilys",
  "password": "emilyspass",
  "birthDate": "1996-5-30",
  "image": "...",
  "bloodGroup": "O-",
  "height": 193.24,
  "weight": 63.16,
  "eyeColor": "Green",
  "hair": {
    "color": "Brown",
    "type": "Curly"
  },
  "ip": "42.48.100.32",
  "address": {
    "address": "626 Main Street",
    "city": "Phoenix",
    "state": "Mississippi",
    "stateCode": "MS",
    "postalCode": "29112",
    "coordinates": {
      "lat": -77.16213,
      "lng": -92.084824
    },
    "country": "United States"
  },
  "macAddress": "47:fa:41:18:ec:eb",
  "university": "University of Wisconsin--Madison",
  "bank": {
    "cardExpire": "03/26",
    "cardNumber": "9289760655481815",
    "cardType": "Elo",
    "currency": "CNY",
    "iban": "YPUXISOBI7TTHPK2BR3HAIXL"
  },
  "company": {
    "department": "Engineering",
    "name": "Dooley, Kozey and Cronin",
    "title": "Sales Manager",
    "address": {
      "address": "263 Tenth Street",
      "city": "San Francisco",
      "state": "Wisconsin",
      "stateCode": "WI",
      "postalCode": "37657",
      "coordinates": {
        "lat": 71.814525,
        "lng": -161.150263
      },
      "country": "United States"
    }
  },
  "ein": "977-175",
  "ssn": "900-590-289",
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  "crypto": {
    "coin": "Bitcoin",
    "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    "network": "Ethereum (ERC20)"
  },
  "role": "admin" // or "moderator", or "user"
}
 */


const idField: IDataModelField = {
  ...string,
  name: 'id',
  description: 'User ID',
  nullable: false,
  unique: true,
  defaultValue: new CommonTypeString(),
}

const firstNameField: IDataModelField = {
  ...string,
  name: 'firstName',
  description: 'User first name',
  nullable: false,
  unique: false,
  defaultValue: new CommonTypeString(),
}

const lastNameField: IDataModelField = {
  ...string,
  name: 'lastName',
  description: 'User last name',
  nullable: false,
  unique: false,
  defaultValue: new CommonTypeString(),
}

const ageField: IDataModelField = {
  ...number,
  name: 'age',
  description: 'User age',
  nullable: false,
  unique: false,
  defaultValue: new CommonTypeNumber(),
}

const genderField: IDataModelField = {
  ...string,
  name: 'gender',
  description: 'User gender',
  nullable: false,
  unique: false,
  defaultValue: new CommonTypeString(),
}

const emailField: IDataModelField = {
  ...string,
  name: 'email',
  description: 'User email',
  nullable: false,
  unique: true,
  defaultValue: new CommonTypeString(),
}

const phoneField: IDataModelField = {
  ...string,
  name: 'phone',
  description: 'User phone',
  nullable: false,
  unique: true,
  defaultValue: new CommonTypeString(),
}

const usernameField: IDataModelField = {
  ...string,
  name: 'username',
  description: 'User username',
  nullable: false,
  unique: true,
  defaultValue: new CommonTypeString(),
}

const passwordField: IDataModelField = {
  ...string,
  name: 'password',
  description: 'User password',
  nullable: false,
  unique: false,
  defaultValue: new CommonTypeString(),
}

const birthDateField: IDataModelField = {
  ...string,
  name: 'birthDate',
  description: 'User birth date',
  nullable: false,
  unique: false,
  defaultValue: new CommonTypeString(),
}

const imageField: IDataModelField = {
  ...string,
  name: 'image',
  description: 'User image',
  nullable: true,
  unique: false,
  defaultValue: new CommonTypeString(),
}

const bloodGroupField: IDataModelField = {
  ...string,
  name: 'bloodGroup',
  description: 'User blood group',
  nullable: true,
  unique: false,
  defaultValue: new CommonTypeString(),
}

const heightField: IDataModelField = {
  ...number,
  name: 'height',
  description: 'User height',
  nullable: true,
  unique: false,
  defaultValue: new CommonTypeNumber(),
}

const weightField: IDataModelField = {
  ...number,
  name: 'weight',
  description: 'User weight',
  nullable: true,
  unique: false,
  defaultValue: new CommonTypeNumber(),
}

const eyeColorField: IDataModelField = {
  ...string,
  name: 'eyeColor',
  description: 'User eye color',
  nullable: true,
  unique: false,
  defaultValue: new CommonTypeString(),
}

// const hairField: IDataModelField = {}

const ipField: IDataModelField = {
  ...string,
  name: 'ip',
  description: 'User IP',
  nullable: true,
  unique: false,
  defaultValue: new CommonTypeString(),
}

// const addressField: IDataModelField = {}

const macAddressField: IDataModelField = {
  ...string,
  name: 'macAddress',
  description: 'User MAC address',
  nullable: true,
  unique: false,
  defaultValue: new CommonTypeString(),
}

const universityField: IDataModelField = {
  ...string,
  name: 'university',
  description: 'User university',
  nullable: true,
  unique: false,
  defaultValue: new CommonTypeString(),
}

// const bankField: IDataModelField = {}

// const companyField: IDataModelField = {}

const einField: IDataModelField = {
  ...string,
  name: 'ein',
  description: 'User EIN',
  nullable: true,
  unique: false,
  defaultValue: new CommonTypeString(),
}

const ssnField: IDataModelField = {
  ...string,
  name: 'ssn',
  description: 'User SSN',
  nullable: true,
  unique: false,
  defaultValue: new CommonTypeString(),
}

const userAgentField: IDataModelField = {
  ...string,
  name: 'userAgent',
  description: 'User browser user agent',
  nullable: true,
  unique: false,
  defaultValue: new CommonTypeString(),
}

// const cryptoField: IDataModelField = {}

const roleField: IDataModelField = {
  ...string,
  name: 'role',
  description: 'User role',
  nullable: false,
  unique: false,
  defaultValue: new CommonTypeString(),
}

const user: IDataModel = {
  name: 'user',
  description: 'The users endpoint provides a versatile dataset of sample user information and related data like carts, posts, and todos, making it ideal for testing and prototyping user management functionalities in web applications.',
  fields: [
    idField,
    firstNameField,
    lastNameField,
    ageField,
    genderField,
    emailField,
    phoneField,
    usernameField,
    passwordField,
    birthDateField,
    imageField,
    bloodGroupField,
    heightField,
    weightField,
    eyeColorField,
    ipField,
    macAddressField,
    universityField,
    einField,
    ssnField,
    userAgentField,
    roleField,
  ],
  indexes: [],
  relations: [],
  primaryKey: ['id']
}

export default user
