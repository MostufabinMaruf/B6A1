/* Problem - 1 */

const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 10;
  if (typeof value === "boolean") return !value;

  // Fallback for unexpected types
  return value;
};

/* Problem - 2 */

const getLength = (input: string | unknown[]): number => {
  if (typeof input === "string") return input.length;
  if (Array.isArray(input)) return input.length;

  return 0; // default case
};

/* Problem - 3 */

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    const capitalizedName =
      this.name.charAt(0).toUpperCase() + this.name.slice(1);
    return `'Name: ${capitalizedName}, Age: ${this.age}'`;
  }
}

/* Problem - 4 */

type TBook = { title: string; rating: number };

const filterByRating = (books: TBook[]): TBook[] => {
  return books.filter(
    (book: TBook) => book.rating >= 4.0 && book.rating <= 5.0
  );
};

/* Problem - 5 */

type TUser = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: TUser[]): TUser[] => {
  return users.filter((user: TUser) => user.isActive);
};

/* Problem - 6 */

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const { title, author, publishedYear, isAvailable } = book;
  const availability = isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${availability}`
  );
};

/* Problem - 7 */

const getUniqueValues = <T>(arr1: T[], arr2: T[]): T[] => {
  const result: T[] = [];

  // check isExists

  const isExists = (arr: T[], value: T): boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return true;
    }
    return false;
  };

  // first array

  for (let i = 0; i < arr1.length; i++) {
    if (!isExists(result, arr1[i])) {
      result.push(arr1[i]);
    }
  }

  // second array

  for (let i = 0; i < arr2.length; i++) {
    if (!isExists(result, arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
};

/* Problem - 8 */

type TProduct = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: TProduct[]): number => {
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;

    if (product.discount && product.discount > 0 && product.discount <= 100) {
      const discountAmount = (basePrice * product.discount) / 100;
      return total + (basePrice - discountAmount);
    }

    return total + basePrice;
  }, 0);
};
