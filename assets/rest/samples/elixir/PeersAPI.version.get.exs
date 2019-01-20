import RiseElixir

try do
  result = RiseElixir.Peers.get_version()
  IO.puts("Peer version: #{result["version"]}")
  # 1.3.2
catch
  err -> "API error #{err}"
end
