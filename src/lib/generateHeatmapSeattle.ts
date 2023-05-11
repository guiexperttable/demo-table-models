import { getRawData, RawData } from "./generateHeatmapSeattleData";
import {
  AreaModel,
  ColorRgb,
  GeCssColorUtil,
  TableModelFactory,
  TableModelIf,
  ThreeColorGradientArg
} from "@guiexpert/table";

const defaultRowHeights = 24;
const defaultColumnWidth = 3;
const data: RawData[] = getRawData();


const map: { [key: string]: { [key: string]: RawData } } = {};
data.forEach(item => {
  const [d, t] = item.date.split("T") as [string, string];
  if (!map[d]) {
    map[d] = {};
  }
  map[d][t.substring(0, 5)] = item;
});


const days = Object.keys(map);
const times = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00",
  "01:00", "02:00", "03:00", "04:00", "05:00"];


function getMinMax(): [number, number] {
  let min = 10;
  let max = 0;
  data.forEach(item => {
    min = Math.min(min, item.temperature);
    max = Math.max(max, item.temperature);
  });
  return [min, max];
}

const [MIN, MAX] = getMinMax();

export function createHeatMapSeattleModel(): TableModelIf {
  const bodyAreaModel = new HeatMapSeattleModel();
  const columnSizes = [60, ...(new Array(days.length).fill(defaultColumnWidth))];
  return TableModelFactory.createByAreaModelsParam({
    bodyAreaModel,
    columnSizes
  });
}

// TODO  split   time vs date, see https://vega.github.io/vega/examples/heatmap/
// colors  from   #430355 -> #1F908D  -> #FAE625

class HeatMapSeattleModel extends AreaModel {

  override getRowCount(): number {
    return times.length;
  }

  override getRowHeight(rowIndex: number): number {
    return defaultRowHeights;
  }

  override getValueAt(rowIndex: number, columnIndex: number): any {
    if (columnIndex === 0) return times[rowIndex];
    return "";
  }


  override getTooltipAt(rowIndex: number, columnIndex: number): any {
    if (columnIndex === 0) {
      return "";
    }
    columnIndex--;
    const date = days[columnIndex];
    const time = times[rowIndex];
    if (map[date] && map[date][time]) {
      return `${date} ${time} : ${map[date][time].temperature}`;
    }
    return "";
  }

  override getCustomStyleAt(rowIndex: number, columnIndex: number): { [p: string]: string } | undefined {
    if (columnIndex === 0) {
      return undefined;
    }
    columnIndex--;
    const date = days[columnIndex];
    const time = times[rowIndex];
    if (!map[date] || !map[date][time]) return undefined;

    const n = map[date][time].temperature;

    // const red = new ColorRgb(255, 0, 0);
    // const blue = new ColorRgb(0, 0, 255);
    // const p = new TwoColorGradientArg(MIN, red, MAX, blue);
    // -> "background": GeCssColorUtil.getTwoColorGradientRGB(n, p),

    const minColor = new ColorRgb(67, 1, 84);
    const middleColor = new ColorRgb(31, 144, 141);
    const maxColor = new ColorRgb(250, 230, 37);
    const p = new ThreeColorGradientArg(MIN, minColor, (MAX + MIN) / 2, middleColor, MAX, maxColor);

    return {
      "background": GeCssColorUtil.getThreeColorGradientRGB(n, p),
      "color": "#fff"
    };
  }
}
