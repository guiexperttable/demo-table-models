import { CellGroupIf } from "@guiexpert/table";


const headerGroups: CellGroupIf[] = [
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
            property: "GOLD_SUM_AB",
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

export default headerGroups;
