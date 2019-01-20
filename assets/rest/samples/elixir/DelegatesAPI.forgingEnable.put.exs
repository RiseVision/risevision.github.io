import RiseElixir

try do
  result =
    RiseElixir.Delegates.enable_forging(%{
      secret: 'your account secret',
      publicKey: 'your publickey'
    })

  IO.puts(result[:success])
catch
  err -> "API error #{err}"
end
