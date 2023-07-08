import { CellGroupIf } from "@guiexpert/table";

const headerGroups: CellGroupIf[] = [
  {
    data: "Gold",
    toggle: true,
    children: [
      {
        data: "Gold AB",
        toggle: true,
        ownColumn: true,
        children: [
          {
            data: "Gold A"
          },
          {
            data: "Gold B"
          }
        ]
      },
      {
        data: "Gold CD",
        children: [
          {
            data: "Gold C"
          },
          {
            data: "Gold D"
          },
          {
            data: "Gold Sum",
            visibility: 'inverted'
          }
        ]
      }
    ]
  },

  {
    data: "Hohenwarte",
    children: [
      {
        data: "HOH AB",
        toggle: true,
        ownColumn: true,
        children: [
          {
            data: "HOH Loc",
            visibility: 'always'
          },
          {
            data: "HOH A"
          },
          {
            data: "HOH B"
          }
        ]
      },
      {
        data: "HOH CD",
        closed: true,
        children: [
          {
            data: "HOH C"
          },
          {
            data: "HOH D"
          }
        ]
      }
    ]
  }
];
