import RiseElixir

try do
  result = RiseElixir.Accounts.get_publicKey(%{address: "6507244540548668920R"})
  IO.puts("PublicKey: #{result["publicKey"]}")
  # PublicKey: 7f47eb8161678a776d63d100508bf5bb5865361481e3054428c66ab9432b2b01
catch
  err -> "API error #{err}"
end
