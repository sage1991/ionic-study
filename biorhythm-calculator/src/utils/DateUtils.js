import dayjs from "dayjs";


class DateUtils {
  static formatDate = (isoString) => dayjs(isoString).format("YYYY MM DD");
  static toDayJs = (isoString) => dayjs(isoString).startOf("day");
  static diffBetween = (date1, date2, unit) => date1.diff(date2, unit);
}


export { DateUtils };