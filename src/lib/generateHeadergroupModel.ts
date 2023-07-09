import { AreaModelCellGroups, ColumnDefIf, TableFactory, TableModelIf } from "@guiexpert/table";
import headerGroups from "../demodata/header-groups";


// TODO hier gehts weiter
export function createHeadergroupModel(): TableModelIf {
  //const bodyAreaModel = new HeatMapSeattleBodyModel(data);
  const columnDefs: ColumnDefIf[] = [];
  const headerAreaModel = new AreaModelCellGroups("header", headerGroups, columnDefs, 34);
  //const columnSizes = [60, ...(new Array(days.length).fill(defaultColumnWidth))];

  return TableFactory.createTableModel({
    headerAreaModel
    //  bodyAreaModel,
    // columnSizes
  });
}
