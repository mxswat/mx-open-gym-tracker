import { FormEvent, useState } from 'react'

export function SyncRoute() {
  const [remoteUrl, setRemoteUrl] = useState('')
  const [branch, setBranch] = useState('main')
  const [status, setStatus] = useState('Idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus(`Ready to sync ${remoteUrl || '(missing remote)'} on ${branch}`)
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-medium">Repository Sync</h2>
      <p className="opacity-80">Placeholder form while we rebuild the full sync workflow.</p>

      <form onSubmit={handleSubmit} className="grid gap-3 text-left">
        <label className="grid gap-1">
          Remote URL
          <input
            type="url"
            value={remoteUrl}
            onChange={(event) => setRemoteUrl(event.target.value)}
            className="rounded border px-3 py-2"
            placeholder="https://github.com/org/repo.git"
          />
        </label>

        <label className="grid gap-1">
          Branch
          <input
            type="text"
            value={branch}
            onChange={(event) => setBranch(event.target.value)}
            className="rounded border px-3 py-2"
            placeholder="main"
          />
        </label>

        <button type="submit" className="w-fit rounded border px-4 py-2">
          Save draft sync config
        </button>
      </form>

      <p>Status: {status}</p>
    </section>
  )
}
