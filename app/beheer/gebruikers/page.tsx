import { asc, isNull } from "drizzle-orm";
import { db } from "@/db";
import { users } from "@/db/schema";
import { roles } from "@/lib/auth/authorize";
import {
  inviteUsersCsv,
  removeUserData,
  updateUserRole,
} from "@/lib/actions/admin";
export const dynamic = "force-dynamic";
export default async function UsersAdmin() {
  const items = await db
    .select()
    .from(users)
    .where(isNull(users.deletedAt))
    .orderBy(asc(users.naam));
  return (
    <main>
      <h1 className="text-4xl text-bh-blue-900">Gebruikers</h1>
      <p className="mt-2 text-bh-grey-600">
        Rollen worden server-side afgedwongen en iedere wijziging komt in het
        auditlog.
      </p>
      <form
        action={inviteUsersCsv}
        className="mt-8 card flex flex-wrap items-end gap-3 p-5"
      >
        <label className="grid gap-1 text-sm">
          Bulk uitnodigen via CSV
          <span className="text-xs text-bh-grey-600">
            Kolommen: email, naam, afdeling, rol
          </span>
          <input
            name="file"
            type="file"
            accept=".csv,text/csv"
            className="card p-2"
            required
          />
        </label>
        <button className="btn btn-primary btn-sm">
          Uitnodigingen versturen
        </button>
      </form>
      <div className="card mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-bh-sand text-xs font-bold uppercase tracking-wider text-bh-grey-600">
            <tr>
              <th className="p-4">Naam</th>
              <th className="p-4">Afdeling</th>
              <th className="p-4">Rol</th>
              <th className="p-4">AVG-verwijdering</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">
                  <p>{item.naam}</p>
                  <p className="text-xs text-bh-grey-600">{item.email}</p>
                </td>
                <td className="p-4">{item.afdeling}</td>
                <td className="p-4">
                  <form
                    action={updateUserRole}
                    className="flex items-center gap-2"
                  >
                    <input type="hidden" name="userId" value={item.id} />
                    <select
                      name="role"
                      defaultValue={item.rol}
                      className="field !w-auto !py-1.5"
                    >
                      {roles.map((role) => (
                        <option key={role}>{role}</option>
                      ))}
                    </select>
                    <button className="btn btn-primary btn-sm">
                      Opslaan
                    </button>
                  </form>
                </td>
                <td className="p-4">
                  <form action={removeUserData} className="flex gap-2">
                    <input type="hidden" name="userId" value={item.id} />
                    <input
                      name="confirm"
                      className="w-28 rounded border px-2 py-1"
                      placeholder="VERWIJDER"
                      aria-label={`Typ VERWIJDER voor ${item.naam}`}
                    />
                    <button className="whitespace-nowrap text-sm font-semibold text-bh-red">Anonimiseer</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
