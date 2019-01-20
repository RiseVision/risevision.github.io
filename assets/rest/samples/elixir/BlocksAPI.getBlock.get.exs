import RiseElixir

try do
  result = RiseElixir.Blocks.get(%{id: "16907575157603209054"})
  IO.puts("Block Height: #{Enum.at(result["blocks"], 0)["height"]}")
catch
  err -> "API error #{err}"
end
