import RiseElixir

try do
  delegates_count = RiseElixir.Delegates.get_count()
  IO.puts(delegates_count["count"])
catch
  err -> "API error #{err}"
end
