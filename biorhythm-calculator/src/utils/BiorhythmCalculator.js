import { DateUtils } from "./DateUtils";


class BiorhythmCalculator {
  
  static PHYSICAL_CYCLE = 23;
  static EMOTIONAL_CYCLE = 28;
  static INTELLECTUAL_CYCLE = 33;

  static calculate(isoBirthDate, isoTargetDate) {
    const birthDate = DateUtils.toDayJs(isoBirthDate);
    const targetDate = DateUtils.toDayJs(isoTargetDate);
    const differnece = DateUtils.diffBetween(targetDate, birthDate, "days");
    
    return { 
      physical: BiorhythmCalculator.calculatePhysical(differnece),
      emotional: BiorhythmCalculator.calculateEmotional(differnece),
      intellectual: BiorhythmCalculator.calculateIntellectual(differnece),
    }
  }

  static calculatePhysical(differnece) {
    return Math.sin(2 * Math.PI * differnece / BiorhythmCalculator.PHYSICAL_CYCLE);
  }

  static calculateEmotional(differnece) {
    return Math.sin(2 * Math.PI * differnece / BiorhythmCalculator.EMOTIONAL_CYCLE);
  }

  static calculateIntellectual(differnece) {
    return Math.sin(2 * Math.PI * differnece / BiorhythmCalculator.INTELLECTUAL_CYCLE);
  }

  static calculateSeries(isoBirthDate, isoEndDate, size) {

    const birthDate = DateUtils.toDayJs(isoBirthDate);
    const endDate = DateUtils.toDayJs(isoEndDate);
    
    const series = [];
    for (let i = 0; i < size; i++) {
      const targetDate = endDate.add(-1 * i, "days");
      const isoTargetDate = targetDate.toISOString();
      const biorhythm = BiorhythmCalculator.calculate(birthDate, isoTargetDate);
      series.push({
        date: targetDate.format("YY-MM-DD"),
        ...biorhythm
      });
    }

    return series;
  }
}


export { BiorhythmCalculator };