import {
  AreaModelArrayOfArrays,
  AreaModelCellGroups,
  CellgroupFactory,
  TableFactory,
  TableModelIf
} from "@guiexpert/table";
import { headerGroups } from "../demodata/header-groups";


// TODO hier gehts weiter
export function createHeadergroupModel(): TableModelIf {
  const defaultRowHeight = 34;
  const columnDefs = CellgroupFactory.buildColumnDefs(headerGroups);
  const headerAreaModel = new AreaModelCellGroups("header", headerGroups, columnDefs, defaultRowHeight);

  console.info("headerGroups", headerGroups);
  console.info("columnDefs", columnDefs);
  console.info(CellgroupFactory.buildDeepMap(headerGroups));

  const arrs = Array.from(Array(10).keys()).map((r) =>
    Array.from(Array(columnDefs.length).keys()).map((c) => `${r}/${c}`)
  );
  const bodyAreaModel = new AreaModelArrayOfArrays<string>("body", arrs, defaultRowHeight, columnDefs);

  return TableFactory.createTableModel({
    headerAreaModel,
    bodyAreaModel,
    columnDefs
  });
}
