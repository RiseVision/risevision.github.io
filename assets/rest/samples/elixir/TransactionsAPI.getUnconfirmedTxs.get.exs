import RiseElixir

try do
  result = RiseElixir.Transactions.get_unconfirmed(%{})
  IO.puts(result["count"])
  # 3
catch
  err -> "API error #{err}"
end
