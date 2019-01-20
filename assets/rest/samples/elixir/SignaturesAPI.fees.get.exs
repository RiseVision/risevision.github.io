import RiseElixir

try do
  result = RiseElixir.Signatures.get_fee(%{})
  IO.puts("Signature fee: #{result["fee"]}")
catch
  err -> "API error #{err}"
end
