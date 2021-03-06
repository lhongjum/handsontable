import moment from 'moment';
import * as C from '../../../../i18n/constants';
import { registerCondition } from '../../conditionRegisterer';

export const CONDITION_NAME = 'date_before';

/**
 * @param {object} dataRow The object which holds and describes the single cell value.
 * @param {Array} inputValues An array of values to compare with.
 * @returns {boolean}
 */
export function condition(dataRow, [value]) {
  const date = moment(dataRow.value, dataRow.meta.dateFormat);
  const inputDate = moment(value, dataRow.meta.dateFormat);

  if (!date.isValid() || !inputDate.isValid()) {
    return false;
  }

  return date.diff(inputDate) <= 0;
}

registerCondition(CONDITION_NAME, condition, {
  name: C.FILTERS_CONDITIONS_BEFORE,
  inputsCount: 1,
  showOperators: true
});
