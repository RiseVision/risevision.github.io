import RiseElixir

try do
  result = RiseElixir.Accounts.get_delegates(%{address: "8093718274007724701R"})
  IO.puts("Delegate publicKey: #{Enum.at(result["delegates"], 0)["publicKey"]}")
  # Delegate publicKey: aaabdbb92c4bd64b175c6228f3a868ca2bbe8ff034d160364bf3e2f448148aa3
catch
  err -> "API error #{err}"
end
