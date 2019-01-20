import RiseElixir

try do
  result = RiseElixir.Transactions.get_count()
  IO.puts(result["confirmed"])
catch
  err -> "API error #{err}"
end
