// import FolderIcon from "./svg/FolderIcon";
// import DocumentIcon from "./svg/DocumentIcon";
// import ChevronRight from "./svg/ChevronRight";

// import { FolderIcon } from "@heroicons/react/24/solid";
// import { DocumentIcon } from "@heroicons/react/24/solid";
// import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { HiDocument } from "react-icons/hi2";
import { HiFolder } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

import { useState } from "react";
// import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

type Folder = {
  name: string;
  folders?: Folder[];
};

const folders: Folder[] = [
  {
    name: "Home",
    folders: [
      {
        name: "Movies",
        folders: [
          {
            name: "Action",
            folders: [
              {
                name: "2000s",
                folders: [
                  {
                    name: "Popular",
                    folders: [{ name: "300.mp4" }, { name: "Gladiator.mp4" }],
                  },
                  { name: "Most Viewed", folders: [] },
                ],
              },
              { name: "2010s", folders: [] },
            ],
          },
          { name: "Comedy", folders: [{ name: "2000s", folders: [] }] },
        ],
      },
      {
        name: "Music",
        folders: [
          { name: "Rnb", folders: [] },
          { name: "Hip Hop", folders: [] },
        ],
      },
      { name: "Pictures", folders: [] },
      { name: "Documents", folders: [] },
      { name: "password.txt" },
    ],
  },
];

export default function FolderTree() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <ul className="my-8">
        {folders.map((folder) => (
          <Folder folder={folder} key={folder.name} />
        ))}
      </ul>
    </div>
  );
}

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="my-1.5 list-group" key={folder.name}>
      <span className="flex items-center gap-2 py-1">
        {folder.folders && (
          <button className="btn p-1 -m-1" onClick={() => setIsOpen(!isOpen)}>
            <HiChevronRight className={`${isOpen ? "rotate-90" : ""}`} />
          </button>
        )}

        {folder.folders ? (
          <HiFolder fontSize={`1.7rem`} color="#1E99DF" />
        ) : (
          <HiDocument fontSize={`1.5rem`} />
        )}
        {" " + folder.name}
      </span>
      {isOpen && (
        <ul className="pl-6">
          {folder.folders?.map((folder) => (
            <Folder folder={folder} key={folder.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
