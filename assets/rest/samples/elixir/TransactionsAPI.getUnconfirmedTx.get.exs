import RiseElixir

try do
  result = RiseElixir.Transactions.get_unconfirmed_by_id(%{id: "6920969059388666996"})

  if result["error"] do
    # "Transaction not found in this queue 6920969059388666996"
    IO.puts(result["error"])
  else
    IO.puts(Enum.at(result["transactions"], 0))
  end
catch
  err -> "API error #{err}"
end
