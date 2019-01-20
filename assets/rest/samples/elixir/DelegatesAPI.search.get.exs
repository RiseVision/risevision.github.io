import RiseElixir

try do
  result =
    RiseElixir.Delegates.search(%{
      q: "pool",
      limit: 2
    })

  IO.puts(Enum.count(result["delegates"]))
catch
  err -> "API error #{err}"
end
