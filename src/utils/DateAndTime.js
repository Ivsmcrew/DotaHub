class DateAndTime {
  static getNow() {
    return Date.now()
  }

  static getElderDate(period = 7) {
    const periodInDays = period;
    const periodTime = periodInDays * 24 * 60 * 60 * 1000;
    const elderTime = this.getNow() - periodTime;
    const elderDate = new Date(elderTime);
    return elderDate
  }
}

export default DateAndTime