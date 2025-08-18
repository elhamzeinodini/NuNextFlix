import type { ISidebarItems } from "~/typescript";

export const sidebarItems: ISidebarItems[] = [
  {
    id: 1,
    parent: "Feedback",
    children: [
      {
        id: 11,
        name: "Tooltip",
        link: "tooltip",
      },
      {
        id: 12,
        name: "Notification",
        link: "notification",
      },
    ],
  },
];
