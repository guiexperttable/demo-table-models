import { TableModelFactory, TableModelIf } from "@guiexpert/table";

export function generateSimpleModel(
  rowCount: number = 1000,
  columnCount: number = 1000
): TableModelIf {


  const data: string[][] = [];
  for (let r = 0; r < rowCount; r++) {
    const row: string[] = [];
    data.push(row);
    for (let c = 0; c < columnCount; c++) {
      row.push(`${r}/${c}`);
    }
  }

  const labels: string[] = [];
  for (let c = 0; c < columnCount; c++) {
    labels.push(`col ${c}`);
  }

  const footer: string[][] = [];
  for (let r = 0; r < 2; r++) {
    const row: string[] = [];
    footer.push(row);
    for (let c = 0; c < columnCount; c++) {
      row.push(`F${r}/${c}`);
    }
  }
  const overridingColumnWidth = 100;
  return TableModelFactory.createByArrayOfArrayParams({
    columnLabels: [labels],
    data,
    footer,
    overridingColumnWidth,
    fixedLeftColumnCount: 1,
    fixedRightColumnCount: 1
  });
}
