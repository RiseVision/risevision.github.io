import RiseElixir

try do
  result = RiseElixir.Delegates.get(%{limit: 3})
  IO.puts("Delegate username: #{Enum.at(result["delegates"], 0)["username"]}")
catch
  err -> "API error #{err}"
end
