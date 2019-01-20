import RiseElixir

try do
  status = RiseElixir.Blocks.get_status()
  IO.puts(status["height"])
catch
  err -> "API error #{err}"
end
