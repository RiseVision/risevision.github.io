import RiseElixir

try do
  result = RiseElixir.Peers.get_peer(%{ip: "167.114.212.9", port: "5555"})
  IO.puts("Peer ip: #{result["peers"]["ip"]}")
  # 167.114.212.9
catch
  err -> "API error #{err}"
end
