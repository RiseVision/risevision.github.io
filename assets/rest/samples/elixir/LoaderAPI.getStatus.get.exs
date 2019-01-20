import RiseElixir

try do
  result = RiseElixir.Loader.get_status()
  IO.puts("Loader status: #{result["loaded"]}")
  # true
catch
  err -> "API error #{err}"
end
