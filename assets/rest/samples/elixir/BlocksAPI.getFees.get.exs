import RiseElixir

try do
  result = RiseElixir.Blocks.get_fees(%{height: 1})
  IO.puts("Block send fee: #{result["fees"]["send"]}")
catch
  err -> "API error #{err}"
end
