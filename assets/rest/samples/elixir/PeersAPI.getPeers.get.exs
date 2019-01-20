import RiseElixir

try do
  result = RiseElixir.Peers.get(%{limit: 3})
  IO.puts("Peers: #{Enum.count(result["peers"])}")
  # 3
catch
  err -> "API error #{err}"
end
