import { parseISO, format } from 'date-fns';

const yyMmDd = date => format(parseISO(date), 'yyyy/MM/dd');

const mmDdYy = date => format(parseISO(date), 'MM/dd/yyyy');

export const formatingDate = { yyMmDd, mmDdYy };
