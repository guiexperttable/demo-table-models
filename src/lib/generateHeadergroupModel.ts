import {
  AreaModelArrayOfArrays,
  AreaModelCellGroups, AreaModelObjectArrayWithColumndefs,
  CellgroupFactory,
  TableFactory,
  TableModelIf
} from "@guiexpert/table";
import { headerGroups } from "../demodata/header-groups";

export interface FalconIf {
  "GOLD_AB":  number;
  "GOLD_A":  number;
  "GOLD_B":  number;
  "GOLD_C":  number;
  "GOLD_D":  number;
  "GOLD_SUM_CD":  number;
  "HOH_AB":  number;
  "HOH_LOC":  number;
  "HOH_A":  number;
  "HOH_B":  number;
  "HOH_C":  number;
  "HOH_D":  number;
}

// TODO hier gehts weiter
export function createHeadergroupModel(): TableModelIf {
  const defaultRowHeight = 34;
  const columnDefs = CellgroupFactory.buildColumnDefs(headerGroups); // TODO fix
  const headerAreaModel = new AreaModelCellGroups("header", headerGroups, columnDefs, defaultRowHeight);

  console.info("headerGroups", headerGroups);
  console.info("columnDefs", columnDefs.map(cd=>cd.property));
  //console.info(CellgroupFactory.buildDeepMap(headerGroups));

  const arrs = [
    {
      "GOLD":  11,
      "GOLD_AB":  22,
      "GOLD_A":  33,
      "GOLD_B":  12 * Math.floor(Math.random()*50),
      "GOLD_C":  12 * Math.floor(Math.random()*50),
      "GOLD_D":  12 * Math.floor(Math.random()*50),
      "GOLD_SUM_CD":  12 * Math.floor(Math.random()*50),
      "HOH_AB":  12 * Math.floor(Math.random()*50),
      "HOH_LOC":  12 * Math.floor(Math.random()*50),
      "HOH_A":  12 * Math.floor(Math.random()*50),
      "HOH_B":  12 * Math.floor(Math.random()*50),
      "HOH_C":  12 * Math.floor(Math.random()*50),
      "HOH_D":  12 * Math.floor(Math.random()*50),
    }
  ];
  const bodyAreaModel = new AreaModelObjectArrayWithColumndefs<FalconIf>("body", arrs, columnDefs, 34);

  return TableFactory.createTableModel({
    headerAreaModel,
    bodyAreaModel,
    columnDefs
  });
}
