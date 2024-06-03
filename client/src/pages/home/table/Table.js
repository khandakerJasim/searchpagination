import React from "react";

export default function Table() {
  return (
    <div className="  mt-10 md:mt-[100px] h-auto md:justify-center flex m-auto">
      <table>
        <thead className="bg-black text-gray-200  ">
          <tr className="text-xl ">
            <th className="px-4 py-3">id</th>
            <th className="px-4 py-3">fullname</th>
            <th className="px-4 py-3">email</th>
            <th className="px-4 py-3">gender</th>
            <th className="px-4 py-3">status</th>
            <th className="px-4 py-3">profile</th>
            <th className="px-4 py-3">action</th>
          </tr>
        </thead>
        <tbody className="text-xl font-semibold">
          <tr>
            <td className="px-4 py-3">1</td>
            <td className="px-4 py-3">joshim uddin</td>
            <td className="px-4 py-3">md.joshim uddin075@gmal.com</td>
            <td className="px-4 py-3">Male</td>
            <td className="px-4 py-3">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
