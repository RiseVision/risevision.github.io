import RiseElixir

try do
  result = RiseElixir.Delegates.get_next_forgers(%{})
  IO.puts(Enum.at(result["delegates"], 0))
catch
  err -> "API error #{err}"
end
