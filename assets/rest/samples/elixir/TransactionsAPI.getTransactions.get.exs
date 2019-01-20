import RiseElixir

try do
  result = RiseElixir.Transactions.get(%{limit: 2, orderBy: "height:desc"})
  IO.puts(Enum.count(result["transactions"]))
catch
  err -> "API error #{err}"
end
