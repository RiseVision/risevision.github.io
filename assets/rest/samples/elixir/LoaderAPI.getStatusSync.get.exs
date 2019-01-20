import RiseElixir

try do
  result = RiseElixir.Loader.get_sync_status()
  IO.puts("Loader sync status: #{result["syncing"]}")
  # false
catch
  err -> "API error #{err}"
end
