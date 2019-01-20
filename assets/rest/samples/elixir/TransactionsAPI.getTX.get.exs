import RiseElixir

try do
  result = RiseElixir.Transactions.get_by_id(%{id: "6920969059388666996"})
  IO.puts(result["transaction"]["confirmations"])
  # 968431
catch
  err -> "API error #{err}"
end
