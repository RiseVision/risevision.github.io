import RiseElixir

try do
  result = RiseElixir.Accounts.get_balance(%{address: "8093718274007724701R"})
  IO.puts("Balance: #{result["balance"]} RISE")
  # Balance: 3370390005074 RISE
catch
  err -> "API error #{err}"
end
