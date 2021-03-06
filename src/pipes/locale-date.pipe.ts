/**
 * ANGULAR 2 LOCALIZATION
 * An Angular 2 library to translate messages, dates and numbers.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular2localization
 */

import { Pipe, PipeTransform } from '@angular/core';
import { StringMapWrapper } from '@angular/common/src/facade/collection';
import { DateFormatter } from '@angular/common/src/facade/intl';
import { DateWrapper, NumberWrapper, isBlank, isDate, isString } from '@angular/common/src/facade/lang';
import { InvalidPipeArgumentException } from '@angular/common/src/pipes/invalid_pipe_argument_exception';

// Services.
import { IntlSupport } from '../services/Intl-support';

/**
 * 'localedate' pipe function.
 */
@Pipe({
    name: 'localeDate',
    pure: true
})

/**
 * LocaleDatePipe class.
 * Localizes dates.
 * 
 * Getting the local date:
 * 
 * expression | localedate[:defaultLocale[:format]]
 * 
 * where 'expression' is a date object or a number (milliseconds since UTC epoch) and 'format' indicates which date/time components to include.
 * 
 * For example, to get the local date, add in the template:
 * 
 * {{ today | localedate:defaultLocale:'fullDate' }}
 * 
 * and include in the component:
 * 
 * import {LocaleService} from 'angular2localization/angular2localization';
 * ...
 * export class AppComponent {
 * 
 *     constructor(public locale: LocaleService) {
 *         ...
 *     }
 * 
 *     // Gets the default locale.
 *     get defaultLocale(): string {
 *
 *         return this.locale.getDefaultLocale();
 *      
 *     }
 * 
 * }
 * 
 * @author Roberto Simonetti
 * @see Angular 2 DatePipe for further information
 */
export class LocaleDatePipe implements PipeTransform {

    public static ALIASES: { [key: string]: String } = {
        'medium': 'yMMMdjms',
        'short': 'yMdjm',
        'fullDate': 'yMMMMEEEEd',
        'longDate': 'yMMMMd',
        'mediumDate': 'yMMMd',
        'shortDate': 'yMd',
        'mediumTime': 'jms',
        'shortTime': 'jm'
    };

    /**
     * LocaleDatePipe transform method.
     * 
     * @param value The date to be localized
     * @param defaultLocale The default locale
     * @param pattern The format of the date
     * @return The locale date
     */
    public transform(value: any, defaultLocale: string, pattern: string = 'mediumDate'): string {

        if (isBlank(value)) { return null; }

        if (!this.supports(value)) {

            throw new InvalidPipeArgumentException(LocaleDatePipe, value);

        }

        if (NumberWrapper.isNumeric(value)) {

            value = DateWrapper.fromMillis(NumberWrapper.parseInt(value, 10));

        } else if (isString(value)) {

            value = <Date>DateWrapper.fromISOString(value);

        }

        // Checks for support for Intl.
        if (IntlSupport.DateTimeFormat(defaultLocale) == true) {

            if (StringMapWrapper.contains(LocaleDatePipe.ALIASES, pattern)) {

                pattern = <string>StringMapWrapper.get(LocaleDatePipe.ALIASES, pattern);

            }

            return DateFormatter.format(value, defaultLocale, pattern);

        }

        // Returns the date without localization.
        return value;

    }

    private supports(obj: any): boolean {

        if (isDate(obj) || NumberWrapper.isNumeric(obj)) { return true; }

        if (isString(obj) && isDate(DateWrapper.fromISOString(obj))) { return true; }

        return false;

    }

}
