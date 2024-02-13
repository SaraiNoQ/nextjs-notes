import dayjs from "dayjs";

export function formatDate(day) {
  return dayjs(day).format('YYYY-MM-DD hh:mm:ss')
}