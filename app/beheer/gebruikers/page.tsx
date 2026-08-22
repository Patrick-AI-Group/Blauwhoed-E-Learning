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
        className="mt-8 flex flex-wrap items-end gap-3 rounded-lg border bg-white p-5"
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
            className="rounded-lg border p-2"
            required
          />
        </label>
        <button className="rounded-lg bg-bh-blue-900 px-4 py-2.5 text-white">
          Uitnodigingen versturen
        </button>
      </form>
      <div className="mt-6 overflow-x-auto rounded-lg border bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-bh-sand">
            <tr>
              <th className="p-4">Naam</th>
              <th>Afdeling</th>
              <th>Rol</th>
              <th>AVG-verwijdering</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">
                  <p>{item.naam}</p>
                  <p className="text-xs text-bh-grey-600">{item.email}</p>
                </td>
                <td>{item.afdeling}</td>
                <td>
                  <form
                    action={updateUserRole}
                    className="flex items-center gap-2"
                  >
                    <input type="hidden" name="userId" value={item.id} />
                    <select
                      name="role"
                      defaultValue={item.rol}
                      className="rounded-lg border px-2 py-1.5"
                    >
                      {roles.map((role) => (
                        <option key={role}>{role}</option>
                      ))}
                    </select>
                    <button className="rounded-lg bg-bh-blue-900 px-3 py-1.5 text-white">
                      Opslaan
                    </button>
                  </form>
                </td>
                <td>
                  <form action={removeUserData} className="flex gap-2">
                    <input type="hidden" name="userId" value={item.id} />
                    <input
                      name="confirm"
                      className="w-28 rounded border px-2 py-1"
                      placeholder="VERWIJDER"
                      aria-label={`Typ VERWIJDER voor ${item.naam}`}
                    />
                    <button className="text-bh-red">Anonimiseer</button>
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
