/**
 * type to Coordinates
 */
type Coordinates = [number, number];

/**
 * interface to Flat
 */
export interface Flat {
  id: string;
  title: string;
  details: string;
  photos: string[];
  coordinates: Coordinates;
  bookedDates: number[];
  price: number;
}

/**
 * interface to SearchParameters
 */
export interface SearchParameters {
  city: string;
  checkInDate: Date;
  checkOutDate: Date;
  priceLimit: number;
}

/**
 * database - array of flats
 */
export const database: Array<Flat>;

/**
 * @param date Date
 * @return new Date from date in parameter
 */
export function cloneDate(date: Date): Date;

/**
 *
 * @param date Date
 * @param days count of days
 * @returns Date after count days
 */
export function addDays(date: Date, days: number): Date;

export const backendPort = 3040;
export const localStorageKey = "flat-rent-db";

export class FlatRentSdk {
  get(id: string): Promise<object | null>;

  /**
   * @param parameters SearchParameters type
   * @return Array of flats
   */
  search(parameters: SearchParameters): Array<Flat>;

  /**
   * @param flatId string id of flat
   * @param checkInDate Date
   * @param checkOutDate Date
   * @return transaction id
   */
  book(flatId: string, checkInDate: Date, checkOutDate: Date): number;

  /**
   * @param checkInDate Date
   * @param checkOutDate Date
   */
  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void;

  /**
   * @param date Date
   */
  _resetTime(date: Date): void;

  /**
   *
   * @param startDate Date
   * @param endDate Date
   * @return count of difference days
   */
  _calculateDifferenceInDays(startDate: Date, endDate: Date): number;

  /**
   *
   * @param from Date
   * @param to Date
   * @return Array of Date between 'from' date and 'to' date
   */
  _generateDateRange(from: Date, to: Date): Array<Date>;

  /**
   * @return transaction id
   */
  _generateTransactionId(): number;

  /**
   *
   * @param flat Flat
   * @param dateRange Array of dates
   * @return Array of boolean
   */
  _areAllDatesAvailable(flat: Flat, dateRange: Array<Date>): Array<boolean>;

  /**
   *
   * @param flat Flat
   * @param nightNumber number of night
   * @return formatted Flat object(may be contains new prop totalPrice)
   */
  _formatFlatObject(flat: Flat, nightNumber: number): object;

  /**
   * @return array of flats
   */
  _readDatabase(): Array<Flat>;

  /**
   *
   * @param database array of flats
   */
  _writeDatabase(database: Array<Flat>): void;

  /**
   *
   * @param database array of flats
   */
  _syncDatabase(database: Array<Flat>): void;
}
