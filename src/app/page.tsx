
// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       home page
//     </div>
//   );
// };

// export default Home;



import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { DataTable } from "@/components/data-table-all-components/data-table";
import { columns } from "@/components/data-table-all-components/columns";

export const metadata: Metadata = {
  title: "Expenses",
  description: "A Expense tracker build using Tanstack Table."
};

async function getData() {
  const filePath = path.join(
    process.cwd(),
    "src/components/data-table-all-components",
    "data.json"
  );
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

export default async function Page() {
  const data = await getData();
  console.log("data", data);

  return (
    <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Here&apos;s a list of your expenses for this month!
        </p>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
