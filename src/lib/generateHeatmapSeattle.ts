import { getRawData, RawData } from "./generateHeatmapSeattleData";
import { AreaModel, TableModelFactory, TableModelIf } from "@guiexpert/table";

const defaultRowHeights = 30;
const defaultColumnWidth = 3;

/*
  "date": "2010-12-30T09:00:00",
  "pressure": "1017.9",
  "temperature": "3.8",
  "wind": "3.8"
*/

const data: RawData[] = getRawData();

// TODO  split   time vs date, see https://vega.github.io/vega/examples/heatmap/
// colors  from   #430355 -> #1F908D  -> #FAE625

const map: { [key: string]: { [key: string]: RawData } } = {};
data.forEach(item => {
  const [d, t] = item.date.split("T") as [string, string];
  if (!map[d]) {
    map[d] = {};
  }
  map[d][t.substring(0, 5)] = item;
});
console.info(map);

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

class RGB {
  constructor(
    public r: number,
    public g: number,
    public b: number
  ) {
  }
}

function normalize(value: number, fromSource: number, toSource: number, fromTarget: number, toTarget: number) {
  return (value - fromSource) / (toSource - fromSource) * (toTarget - fromTarget) + fromTarget;
}

function getTwoColorGradientRGB(min: number, max: number, value: number): string {
  var startRGB = new RGB(255, 0, 0);
  var endRGB = new RGB(0, 0, 255);
  var percentFade = normalize(value, min, max, 0, 1);

  var diffRed = endRGB.r - startRGB.r;
  var diffGreen = endRGB.g - startRGB.g;
  var diffBlue = endRGB.b - startRGB.b;

  diffRed = (diffRed * percentFade) + startRGB.r;
  diffGreen = (diffGreen * percentFade) + startRGB.g;
  diffBlue = (diffBlue * percentFade) + startRGB.b;

  return `rgb(${Math.round(diffRed)}, ${Math.round(diffGreen)}, ${Math.round(diffBlue)})`;
}


export function createHeatMapSeattleModel(): TableModelIf {
  const bodyAreaModel = new HeatMapSeattleModel();
  const columnSizes = [60, ...(new Array(days.length).fill(defaultColumnWidth))];
  return TableModelFactory.createByAreaModelsParam({
    bodyAreaModel,
    columnSizes
  });
}


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
    if (columnIndex === 0) return "";
    columnIndex--;
    const date = days[columnIndex];
    const time = times[rowIndex];
    if (map[date] && map[date][time]) {
      return `${date} ${time} : ${map[date][time].temperature}`;
    }
    return "";
  }

  override getCustomStyleAt(rowIndex: number, columnIndex: number): { [p: string]: string } | undefined {
    if (columnIndex === 0) return undefined;
    columnIndex--;
    const date = days[columnIndex];
    const time = times[rowIndex];
    if (!map[date] || !map[date][time]) return undefined;

    const n = map[date][time].temperature;
    return {
      "background": getTwoColorGradientRGB(MIN, MAX, n),
      "color": "#fff"
    };
  }
}
