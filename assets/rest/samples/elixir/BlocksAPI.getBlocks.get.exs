import RiseElixir

try do
  result = RiseElixir.Blocks.get(%{limit: 3})
  IO.puts("Block id: #{Enum.at(result["blocks"], 0)["id"]}")
catch
  err -> "API error #{err}"
end
