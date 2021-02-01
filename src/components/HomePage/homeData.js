import { correctData } from '../charts/data/correctData';
import { getIncomes, getCharges } from '../../common/utils/LocalStorageUtil';

export const chargesForMounth = correctData(getCharges(), 'mounth');
export const chargesPerWeek = correctData(getCharges(), 'week');

export const incomesForMounth = correctData(getIncomes(), 'mounth');
export const incomesPerWeek = correctData(getIncomes(), 'week');
