import { TableModelFactory, TableModelIf } from "@guiexpert/table";

export function generateSimpleModel(
  rowCount: number = 1000,
  columnCount: number = 1000
): TableModelIf {

  const data: string[][] =
    Array.from(Array(rowCount).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => `${r}/${c}`)
    );

  const columnLabels: string[][] =
    Array.from(Array(2).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => `H${r}/${c}`)
    );

  const footer: string[][] =
    Array.from(Array(2).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => `F${r}/${c}`)
    );

  return TableModelFactory.createByArrayOfArraysParams({
    columnLabels,
    data,
    footer,
    overridingColumnWidth: 120,
    fixedLeftColumnCount: 2,
    fixedRightColumnCount: 2
  });
}
