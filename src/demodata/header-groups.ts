import { CellGroupIf, ColumnDef, ColumnDefIf, px100, px120 } from "@guiexpert/table";


export const headerGroups: CellGroupIf[] = [
  {
    data: "Gold",
    toggle: true,
    children: [
      {
        data: "Gold AB",
        toggle: true,
        property: "GOLD_AB",
        children: [
          {
            data: "Gold A",
            property: "GOLD_A"
          },
          {
            data: "Gold B",
            property: "GOLD_B"
          }
        ]
      },
      {
        data: "Gold CD",
        children: [
          {
            data: "Gold C",
            property: "GOLD_C"
          },
          {
            data: "Gold D",
            property: "GOLD_D"
          },
          {
            data: "Gold Sum",
            property: "GOLD_SUM_CD",
            visibility: "inverted"
          }
        ]
      }
    ]
  },

  {
    data: "Hohenwarte",
    children: [
      {
        data: "Sum",
        property: "HOH_SUM",
      },
      {
        data: "HOH AB",
        toggle: true,
        property: "HOH_AB",
        children: [
          {
            data: "HOH Loc",
            property: "HOH_LOC",
            visibility: "always"
          },
          {
            data: "HOH A",
            property: "HOH_A"
          },
          {
            data: "HOH B",
            property: "HOH_B"
          }
        ]
      },
      {
        data: "HOH CD",
        closed: true,
        children: [
          {
            data: "HOH C",
            property: "HOH_C"
          },
          {
            data: "HOH D",
            property: "HOH_D"
          }
        ]
      }
    ]
  }
];


/*
export const columnDefs: ColumnDefIf[] = [
   ColumnDef.create({
      property: "GOLD_AB",
      headerLabel: "Gold AB",
      width: px100
    }),
   ColumnDef.create({
      property: "GOLD_A",
      headerLabel: "Gold A",
      width: px100
    }),
   ColumnDef.create({
      property: "GOLD_B",
      headerLabel: "Gold B",
      width: px100
    }),
   ColumnDef.create({
      property: "GOLD_C",
      headerLabel: "Gold C",
      width: px100
    }),
   ColumnDef.create({
      property: "GOLD_D",
      headerLabel: "Gold D",
      width: px100
    }),
   ColumnDef.create({
      property: "HOH_AB",
      headerLabel: "HOH AB",
      width: px100
    }),
   ColumnDef.create({
      property: "HOH_LOC",
      headerLabel: "HOH Loc",
      width: px100
    }),
   ColumnDef.create({
      property: "HOH_A",
      headerLabel: "HOH A",
      width: px100
    }),
   ColumnDef.create({
      property: "HOH_B",
      headerLabel: "HOH B",
      width: px100
    }),
   ColumnDef.create({
      property: "HOH_C",
      headerLabel: "HOH C",
      width: px100
    }),
   ColumnDef.create({
      property: "HOH_D",
      headerLabel: "HOH D",
      width: px100
    }),
  ];
*/
